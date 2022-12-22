export type GetUser = {
    user_id: number;
    user_name: string;
    password: string;
    email: string;
    created_at: Date;
    updated_at: Date;
}

export type PostUser = {
    user_name: string;
    password: string;
    email: string;
}