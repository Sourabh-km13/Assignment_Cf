import { Mail, Phone } from "lucide-react";

export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

interface UserCardProps {
    user: User;
    onClick: (user: User) => void;
}

export const UserCard = ({ user, onClick }: UserCardProps) => {
    return (
        <div
            
            className=" bg-slate-800/50 text-white rounded-xl border p-5 shadow-sm shadow-purple-800/50 transition hover:shadow-lg"
        >
            <div className="flex items-center justify-between">
                <div>
                    <h3 onClick={() => onClick(user)} className="font-semibold cursor-pointer text-lg">{user.name}</h3>
                    <p className="text-sm text-gray-200">User #{user.id}</p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                    {user.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                </div>
            </div>

            <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                    <Mail size={16} />
                    <span>{user.email}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                    <Phone size={16} />
                    <span>{user.phone}</span>
                </div>
            </div>
        </div>
    );
};