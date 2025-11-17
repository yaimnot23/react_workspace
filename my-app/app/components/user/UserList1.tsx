import { User as UserType } from "@/app/type/type";
import User from "./User";

type UserList1Props = {
    users: UserType[];
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
}

export default function UserList1({ users, onRemove, onToggle }: UserList1Props) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
}