import { useState } from "react";

export default function InputSample() {
  // input 값 변경 시 input value 값이 업데이트 되어야함
  // useState()로 관리
  const [text, setText] = useState<string>('');
  //e : event 해당 event의 대상이 되는 타켓의 객체(element)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setText(e.target.value);
  }
  return (
    <div>
      <input type="text" name="text" value={text} onChange={onChange} className="border border-amber-50"/>
      <button className="px-4 py-2 mx-3 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      onClick={() => setText('')}>
        reset
      </button>
      <div>value : {text} </div>
    </div>
  );
}
