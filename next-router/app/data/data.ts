export interface Student {
    name: string;
    age: number;
    addr: string;
    phone: string;
}

export const student: Student = {
    name: "홍길동",
    age: 20,
    addr: "서울",
    phone: "010-1111-2222"
};

export const students: Student[] = [
    {
        name: "김유신",
        age: 23,
        addr: "경주",
        phone: "010-2222-3333"
    },
    { name: "이순신", age: 31, addr: "아산", phone: "010-3333-4444" }
];