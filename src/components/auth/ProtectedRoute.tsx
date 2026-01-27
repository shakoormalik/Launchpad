
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { session, loading } = useAuth();

    console.log("ProtectedRoute: render", { loading, hasSession: !!session });

    if (loading) {
        console.log("ProtectedRoute: loading...");
        return (
            <div className="flex items-center justify-center h-screen bg-background">
                <div className="space-y-4 w-[300px]">
                    <Skeleton className="h-12 w-12 rounded-full mx-auto" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4 mx-auto" />
                </div>
            </div>
        );
    }

    if (!session) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};
