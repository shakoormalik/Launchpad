
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import launchpadLogo from "@/assets/launchpad-logo.png";

export default function SignUp() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        groupName: "",
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (formData.password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            setLoading(false);
            return;
        }

        try {
            const { data: { user }, error: signUpError } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
            });

            if (signUpError) throw signUpError;
            if (!user) throw new Error("No user created");

            const { error: profileError } = await supabase
                .from('profiles')
                .insert({
                    id: user.id,
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    group_name: formData.groupName,
                });

            if (profileError) {
                console.error("Profile creation error:", profileError);
                toast.error("Account created but profile setup failed.");
            } else {
                toast.success("Account created! Please sign in.");
                navigate("/login");
            }

        } catch (error: any) {
            toast.error(error.message || "Error signing up");
        } finally {
            setLoading(false);
        }
    };

    return (
    return (
        <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
            <div className="hidden bg-muted lg:block">
                <div className="h-full w-full object-cover bg-slate-900 relative flex flex-col items-center justify-center p-12 text-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-800" />
                    <div className="relative z-10 flex flex-col items-center">
                        <img
                            src={launchpadLogo}
                            alt="LaunchPad Logo"
                            className="h-24 w-auto mb-8 animate-fade-in"
                        />
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Start Your Journey
                        </h2>
                        <p className="text-slate-300 max-w-md text-lg leading-relaxed">
                            Create your account to access all lessons, track your progress, and earn certificates. It's time to take control of your financial future.
                        </p>
                    </div>
                    <div className="relative z-10 mt-12 w-full max-w-sm">
                        <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
                            <p className="text-slate-200 italic mb-2">
                                "The best investment you can make is in yourself."
                            </p>
                            <p className="text-sm text-primary font-semibold">
                                — Warren Buffett
                            </p>
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
                            Create an account
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your details to create your participant account
                        </p>
                    </div>

                    <form onSubmit={handleSignUp} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First name</Label>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Alex"
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="bg-background"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last name</Label>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Doe"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="bg-background"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="groupName">Group / Class Name</Label>
                            <Input
                                id="groupName"
                                name="groupName"
                                placeholder="Summer Camp 2024"
                                required
                                value={formData.groupName}
                                onChange={handleChange}
                                className="bg-background"
                            />
                        </div>
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
                            <Label htmlFor="password">Password</Label>
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
                            Sign Up
                        </Button>
                    </form>

                    <div className="text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link to="/login" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/90">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
