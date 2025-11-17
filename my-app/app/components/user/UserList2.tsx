'use client';

import { User } from "@/app/type/type";
import { useRef, useState } from "react";
import UserList1 from "./UserList1";

const initialUsers: User[] = [
    {
        id: 1,
        username: "alice",
        email: "alice@example.com",
        active: true,
    },
    {
        id: 2,
        username: "bob",
        email: "bob@example.com",
        active: false,
    },
    {
        id: 3,
        username: "charlie",
        email: "charlie@example.com",
        active: true,
    },
    {
        id: 4,
        username: "dave",
        email: "dave@example.com",
        active: false,
    }
];

export default function UserList2() {
    const [users, setUsers] = useState<User[]>(initialUsers);
    const [inputs, setInputs] = useState({ username: '', email: '' });
    const nextId = useRef(5); // 다음 user의 id

    const { username, email } = inputs;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    // Create
    const onCreate = () => {
        const newUser: User = {
            id: nextId.current,
            username,
            email,
            active: false
        };
        setUsers([...users, newUser]);
        setInputs({ username: '', email: '' });
        nextId.current += 1;
    };

    // Delete
    const onRemove = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
    };

    // Update (Toggle Active)
    const onToggle = (id: number) => {
        setUsers(users.map(user =>
            user.id === id ? { ...user, active: !user.active } : user
        ));
    };

    return (
        <div>
            <h2>User Management</h2>
            <div>
                <input name="username" placeholder="이름" onChange={onChange} value={username} />
                <input name="email" placeholder="이메일" onChange={onChange} value={email} />
                <button onClick={onCreate}>등록</button>
            </div>
            <hr />
            {/* UserList1에 상태와 함수들을 props로 전달 */}
            <UserList1 users={users} onRemove={onRemove} onToggle={onToggle} />
        </div>
    );
}