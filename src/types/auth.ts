
export interface Profile {
    id: string;
    first_name: string | null;
    last_name: string | null;
    group_name: string | null;
    avatar_url: string | null;
    created_at: string;
}

export interface UserProgress {
    id: string;
    user_id: string;
    lesson_id: string;
    status: 'started' | 'completed';
    score_pre: number | null;
    score_post: number | null;
    updated_at: string;
}

export interface User {
    id: string;
    email?: string;
    profile?: Profile;
}
