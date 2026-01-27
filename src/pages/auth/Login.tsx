
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import launchpadLogo from "@/assets/launchpad-logo.png";

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login attempted with:", formData.email);
        setLoading(true);

        try {
            console.log("Calling supabase.auth.signInWithPassword...");
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            });
            console.log("Supabase response:", { data, error });

            if (error) throw error;

            console.log("Login successful, navigating...");
            navigate("/");
        } catch (error: any) {
            console.error("Login error caught:", error);
            toast.error(error.message || "Error logging in");
        } finally {
            console.log("Login finished, setting loading false");
            setLoading(false);
        }
    };

    return (
        <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
            <div className="hidden bg-muted lg:block">
                <div className="h-full w-full object-cover bg-slate-900 relative flex flex-col items-center justify-center p-12 text-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />
                    <div className="relative z-10 flex flex-col items-center">
                        <img
                            src={launchpadLogo}
                            alt="LaunchPad Logo"
                            className="h-24 w-auto mb-8 animate-fade-in"
                        />
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Master Your Money
                        </h2>
                        <p className="text-slate-300 max-w-md text-lg leading-relaxed">
                            Join thousands of students learning to earn, save, and invest for a brighter financial future. Your journey to independence starts here.
                        </p>
                    </div>
                    <div className="relative z-10 mt-12 grid grid-cols-2 gap-4 text-left w-full max-w-sm">
                        <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                            <h3 className="font-semibold text-primary mb-1">Interactive</h3>
                            <p className="text-xs text-slate-400">Chat-based lessons that adapt to you</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                            <h3 className="font-semibold text-primary mb-1">Practical</h3>
                            <p className="text-xs text-slate-400">Real-world skills for life after school</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center py-12 px-4 sm:px-8">
                <div className="mx-auto grid w-full max-w-sm gap-6">
                    <div className="flex flex-col space-y-2 text-center lg:text-left">
                        {/* Mobile Logo */}
                        <div className="lg:hidden flex justify-center mb-4">
                            <img src={launchpadLogo} alt="LaunchPad Logo" className="h-16 w-auto" />
                        </div>

                        <h1 className="text-3xl font-semibold tracking-tight">
                            Welcome back
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email to sign in to your account
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="name@example.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-background"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    to="#"
                                    className="text-xs text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toast.info("Password reset coming soon!");
                                    }}
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="bg-background"
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Sign In
                        </Button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                or
                            </span>
                        </div>
                    </div>

                    <div className="text-center text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <Link to="/signup" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/90">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
