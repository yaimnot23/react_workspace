import { User as UserType } from "@/app/type/type";

type UserProps = {
    user: UserType;
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
}

export default function User({ user, onRemove, onToggle }: UserProps) {
    return (
        <div>
            <b
                style={{ cursor: 'pointer', color: user.active ? 'green' : 'black' }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}
