"use client"
import Counter from "./components/Counter"
import Counter2 from "./components/Counter2"
import Hello from "./components/Hello"
import Start from "./components/Start"
import InputSample from "./components/InputSample"
import InputSample2 from "./components/InputSample2"
import UserList from "./components/user/UserList"
import UserList2 from "./components/user/UserList2"


export default function Home() {
  return (
    <div className="flex min-h-screen text-center flex-col bg-zinc-900 text-white justify-center p-24">
      <h1 className="text-6xl font-bold my-5">next.js page</h1>
      {/* 컴포턴트 삽입 */}
      <Hello />
      <Start />
      <hr />
      <Counter />
      <hr />
      <Counter2 num={100} />
      <hr />
      <InputSample />
      <hr />
      <InputSample2 />
      <hr />
      <UserList />
      <hr />
      <UserList2 />
      
    </div>
  )
}
