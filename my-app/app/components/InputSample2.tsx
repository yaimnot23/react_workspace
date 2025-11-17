// 1. useState를 사용하므로 "use client" 추가
"use client";

import React from 'react'
import { useState } from 'react'

// 2. 컴포넌트 함수 정의
export default function InputSample2() {
  
  // 3. 모든 훅과 로직을 컴포넌트 함수 *안*으로 이동
  const [inputs, setInputs] = useState({
    name: '',
    nick: '',
  });

  const { name, nick } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // [e.target.name]을 사용해서 name과 nick을 동적으로 처리
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onReset = () => { // (이름을 onReset으로 변경)
    setInputs({
      name: '',
      nick: '',
    });
  };

  // 4. 하나의 부모 <div>로 감싸기
  return (
    <div>
      <input
        className="
          p-2 rounded-md bg-zinc-800 text-white 
          border border-amber-50 
          focus:outline-none focus:ring-2 focus:ring-amber-400
          placeholder:text-gray-500 mr-3
        " // (스타일 통합)
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="이름 (name)"
      />

      <input
        className="
          p-2 rounded-md bg-zinc-800 text-white 
          border border-amber-50 
          focus:outline-none focus:ring-2 focus:ring-amber-400
          placeholder:text-gray-500
        " // (스타일 통합)
        type="text"
        name="nick"
        value={nick}
        onChange={onChange}
        placeholder="닉네임 (nick)"
      />
      
      {/* 5. onReset 버튼 추가 */}
      <button 
        className="px-4 py-2 mx-3 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        onClick={onReset}
      >
        reset
      </button>

      {/* 값이 잘 들어가는지 확인용 */}
      <div className='mt-4'>
        <div><b>이름:</b> {name}</div>
        <div><b>닉네임:</b> {nick}</div>
      </div>
    </div>
  );
}