
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const { profile, user, refreshProfile } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        groupName: "",
        avatarUrl: "",
    });
    const [passwordData, setPasswordData] = useState({
        password: "",
        confirmPassword: "",
    });

    useEffect(() => {
        if (profile) {
            setFormData({
                firstName: profile.first_name || "",
                lastName: profile.last_name || "",
                groupName: profile.group_name || "",
                avatarUrl: profile.avatar_url || "",
            });
        }
    }, [profile]);

    const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) {
            return;
        }

        const file = e.target.files[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        setLoading(true);
        try {
            const { error: uploadError } = await supabase.storage
                .from('avatars')
                .upload(filePath, file);

            if (uploadError) {
                // If avatars bucket doesn't exist, this fails. 
                // Since user didn't specify bucket, we assume 'avatars' or guide them.
                throw uploadError;
            }

            const { data: { publicUrl } } = supabase.storage
                .from('avatars')
                .getPublicUrl(filePath);

            setFormData(prev => ({ ...prev, avatarUrl: publicUrl }));
            toast.success("Image uploaded!");
        } catch (error: any) {
            console.error("Upload error:", error);
            toast.error("Failed to upload image. (Ensure 'avatars' bucket is public)");
        } finally {
            setLoading(false);
        }
    };

    const handleProfileUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;
        setLoading(true);

        try {
            const { error } = await supabase
                .from('profiles')
                .update({
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    group_name: formData.groupName,
                    avatar_url: formData.avatarUrl,
                })
                .eq('id', user.id);

            if (error) throw error;
            toast.success("Profile updated successfully!");

            // Refresh global state so UserMenu updates immediately
            await refreshProfile();

        } catch (error: any) {
            toast.error(error.message || "Failed to update profile");
        } finally {
            setLoading(false);
        }
    };

    const handlePasswordUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (passwordData.password !== passwordData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        setLoading(true);
        try {
            const { error } = await supabase.auth.updateUser({
                password: passwordData.password
            });

            if (error) throw error;
            toast.success("Password updated successfully!");
            setPasswordData({ password: "", confirmPassword: "" });
        } catch (error: any) {
            toast.error(error.message || "Failed to update password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-background">
            <ChatHeader />

            <div className="flex-1 overflow-y-auto p-6 md:p-12">
                <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => navigate("/")}
                            className="text-muted-foreground hover:text-foreground"
                        >
                            <ArrowLeft className="w-4 h-4 mr-1" />
                            Back
                        </Button>
                        <h1 className="text-3xl font-bold font-display">Profile Settings</h1>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {/* General Info */}
                        <div className="space-y-6 md:col-span-2">
                            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                                <form onSubmit={handleProfileUpdate} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First name</Label>
                                            <Input
                                                id="firstName"
                                                value={formData.firstName}
                                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last name</Label>
                                            <Input
                                                id="lastName"
                                                value={formData.lastName}
                                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="groupName">Group / Class Name</Label>
                                        <Input
                                            id="groupName"
                                            value={formData.groupName}
                                            onChange={(e) => setFormData({ ...formData, groupName: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="avatar">Profile Picture</Label>
                                        <div className="flex gap-4 items-center">
                                            {formData.avatarUrl && (
                                                <img
                                                    src={formData.avatarUrl}
                                                    alt="Avatar preview"
                                                    className="w-12 h-12 rounded-full object-cover border"
                                                />
                                            )}
                                            <Input
                                                id="avatar"
                                                type="file"
                                                accept="image/*"
                                                onChange={handleAvatarUpload}
                                                className="cursor-pointer"
                                            />
                                        </div>
                                        <p className="text-xs text-muted-foreground">Upload a JPG or PNG image.</p>
                                    </div>

                                    <div className="pt-2">
                                        <Button type="submit" disabled={loading}>
                                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                            Save Profile
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Password Update */}
                        <div className="space-y-6 md:col-span-2">
                            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                                <h2 className="text-xl font-semibold mb-4">Security</h2>
                                <form onSubmit={handlePasswordUpdate} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="newPassword">New Password</Label>
                                        <Input
                                            id="newPassword"
                                            type="password"
                                            value={passwordData.password}
                                            onChange={(e) => setPasswordData({ ...passwordData, password: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                                        <Input
                                            id="confirmPassword"
                                            type="password"
                                            value={passwordData.confirmPassword}
                                            onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                        />
                                    </div>
                                    <div className="pt-2">
                                        <Button type="submit" variant="outline" disabled={loading || !passwordData.password}>
                                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                            Update Password
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
