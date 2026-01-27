
import { createContext, useContext, useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Profile } from "@/types/auth";

interface AuthContextType {
    session: Session | null;
    user: User | null;
    profile: Profile | null;
    loading: boolean;
    signOut: () => Promise<void>;
    refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    session: null,
    user: null,
    profile: null,
    loading: true,
    signOut: async () => { },
    refreshProfile: async () => { },
});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [session, setSession] = useState<Session | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Helper for timeouts
        const withTimeout = <T>(promise: Promise<T>, ms: number, label: string): Promise<T> => {
            const timeout = new Promise<never>((_, reject) => 
                 setTimeout(() => reject(new Error(`${label} timed out`)), ms)
                );
                return Promise.race([promise, timeout]);
        };

        // Get initial session
        const initSession = async () => {
                    console.log("AuthContext: initSession started");
                try {
                // Wrap getSession in timeout
                const {data: {session} } = await withTimeout(
                supabase.auth.getSession(),
                5000,
                "getSession"
                );

                console.log("AuthContext: session retrieved", !!session);
                setSession(session);
                setUser(session?.user ?? null);
                if (session?.user) {
                    console.log("AuthContext: fetching profile for", session.user.id);
                await withTimeout(fetchProfile(session.user.id), 5000, "fetchProfile");
                console.log("AuthContext: profile fetched in initSession");
                } else {
                    console.log("AuthContext: no user in session");
                }
            } catch (error: any) {
                if (error.name === 'AbortError') return;
                console.error("AuthContext: Error getting session:", error);
                if (error.message?.includes("timed out")) {
                    console.warn("AuthContext: Initialization timed out, forcing load completion");
                }
            } finally {
                    console.log("AuthContext: initSession finally - setLoading(false)");
                setLoading(false);
            }
        };

                // Listen for auth changes
                const {data: {subscription} } = supabase.auth.onAuthStateChange(async (event, session) => {
                    console.log("AuthContext: onAuthStateChange event:", event);
                setSession(session);
                setUser(session?.user ?? null);

                if (session?.user) {
                    console.log("AuthContext: onAuthStateChange fetching profile...");
                try {
                    await withTimeout(fetchProfile(session.user.id), 5000, "fetchProfileListener");
                console.log("AuthContext: onAuthStateChange profile fetched");
                } catch (e) {
                    console.error("AuthContext: Profile fetch in listener failed/timedout", e);
                }
            } else {
                    setProfile(null);
            }

                console.log("AuthContext: onAuthStateChange setting loading false");
                setLoading(false);
        });

                // Start initSession apart from the listener setup
                initSession();

        return () => subscription.unsubscribe();
    }, []);

    const fetchProfile = async (userId: string) => {
        try {
            const {data, error} = await supabase
                .from('profiles')
                .select('*')
                .eq('id', userId)
                .single();

                if (error) {
                    console.error("Error fetching profile:", error);
            } else {
                    setProfile(data as Profile);
            }
        } catch (error: any) {
            if (error.name === 'AbortError') return;
                console.error("Unexpected error fetching profile:", error);
        }
    };

    const signOut = async () => {
                    await supabase.auth.signOut();
    };

    const refreshProfile = async () => {
        if (session?.user) {
                    await fetchProfile(session.user.id);
        }
    };

                return (
                <AuthContext.Provider value={{ session, user, profile, loading, signOut, refreshProfile }}>
                    {children}
                </AuthContext.Provider>
                );
};
