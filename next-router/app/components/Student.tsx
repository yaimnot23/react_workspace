interface student {
    name: string;
    age: number;
    addr: string;
    phone: string;
}

interface stdProps  {
    std: student;
}

export default function Student({std} : stdProps){
    return (
        <div className="flex text-center flex-col justify-center p-4">
            <b className="text-2xl font-bold my-5 justify-center">{std.name}({std.age})</b>
            / {std.addr}({std.phone})
            <hr className="my-1" />
        </div>
    )
}