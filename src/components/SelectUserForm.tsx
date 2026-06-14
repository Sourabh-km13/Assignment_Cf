import { useUsers } from "../hooks/useUsers";



interface Props {
    register: any;
}

export const UserSelect = ({ register }: Props) => {
    const { users } = useUsers();

    return (
        <div className="space-y-2">
            <label className="text-slate-200">
                Select User
            </label>

            <select
                {...register("userId", {
                    required: true,
                    valueAsNumber: true,
                })}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-slate-100"
            >
                <option value="">
                    Select User
                </option>

                {users.map(user => (
                    <option
                        key={user.id}
                        value={user.id}
                    >
                        {user.name}
                    </option>
                ))}
            </select>
        </div>
    );
};