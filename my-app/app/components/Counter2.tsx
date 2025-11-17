import { useState } from "react";

type CounterProps = {
  num?: number;
};

//props로 count 받기
// {num=0} : undefined일 때만 기본값으로 처리, null은 그대로 적용
// {num?: number} : props의 타입은 number
// num ?? 0 : 널병합 연산자 num가 null이면 0처리

export default function Counter2({ num = 0 }: CounterProps) {
  const [count, setCount] = useState<number>(num ?? 0);

  return (
    <div>
      <h1 className="text-2xl font-bold my-5">{count}</h1>
      <button
        className="px-4 py-2 mr-3 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        className="px-4 py-2 mx-3 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        onClick={() => {
          //초기값 다시 할당 
          setCount(num ?? 0);
          //초기값 할당 다른 방법
          //setCount(100);
        }}
      >
        reset
      </button>
    </div>
  );
}
