import Student from "../components/Student";
import { student, students } from "../data/data";

export default  function Comp1(){
    return (
        <div className="flex min-h-screen text-center flex-col bg-zinc-900 text-white justify-center p-10">
            1
            <div>
                {student.name}({student.age}) / {student.addr}({student.phone}) 
            </div>
            <hr className="my-2" />

            {
                students.map((s, i) => <Student std={s} key={i} />)
            }
        </div>
    )
}