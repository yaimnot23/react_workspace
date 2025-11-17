import React from "react";

type UserData = {
  id: number;
  username: string;
  email: string;
}
type UserProps = {
  user: UserData;
}

const User = ({ user }: UserProps) => {
    const { id, username, email } = user;

  return (
   <div className="flex flex-col items-center justify-center p-4">
    <h3>{id}</h3>
    <h3>{username}</h3>
    <h3>{email}</h3>
   </div>
  );
};

function UserList() {
  const users: UserData[] = [
    {
      id: 1,
      username: "johndoe",
      email: "john@example.com",
    },
    {
      id: 2,
      username: "janedoe",
      email: "jane@example.com",
    },
    {
      id: 3,
      username: "coder",
      email: "coder@example.com",
    },
  ];

  return (
    <div className="p-4 rounded-md bg-zinc-800 text-white w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">사용자 목록</h2>         
        {/* 5. User 컴포넌트를 map()으로 렌더링합니다. */}     {" "}
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
         {" "}
    </div>
  );
}

export default UserList;
