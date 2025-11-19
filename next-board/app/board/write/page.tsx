'use client'

import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function BoardWrite() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    writer: "",
    contents: ""
  });

  const { title, writer, contents } = form;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 유효성 검사 (하나씩 체크해서 구체적으로 알려주기)
    if (!title) {
      alert("제목을 입력해주세요.");
      return; // 함수 종료 (더 이상 진행 안 함)
    }
    if (!writer) {
      alert("작성자를 입력해주세요.");
      return;
    }
    if (!contents) {
      alert("내용을 입력해주세요.");
      return;
    }

    // 실제 DB 전송 로직이 들어갈 자리
    /*
      const boardData = { ...form, reg_date: new Date() };
      axios.post('/api/board', boardData)...
    */

    alert(`[등록 처리 완료]\n제목: ${title}\n작성자: ${writer}\n내용: ${contents}`);
    
    router.push('/board');
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold border-b border-gray-300 pb-4 mb-6">
        게시글 등록 (onSubmit 적용)
      </h2>

      <form onSubmit={handleSubmit}>

        {/* 제목 입력 */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">제목</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            placeholder="제목을 입력하세요"
          />
        </div>

        {/* 작성자 입력 */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">작성자</label>
          <input
            type="text"
            name="writer"
            value={writer}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            placeholder="작성자를 입력하세요"
          />
        </div>

        {/* 본문 내용 입력 */}
        <div className="mb-10">
          <label className="block text-gray-700 font-bold mb-2">내용</label>
          <textarea
            name="contents"
            value={contents}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded h-[300px] focus:outline-none focus:border-blue-500 resize-none"
            placeholder="내용을 입력하세요"
          />
        </div>

        {/* 하단 버튼 영역 */}
        <div className="flex justify-end gap-2 border-t border-gray-300 pt-6">
          <Link
            href="/board"
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
            List
          </Link>
          
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Write
          </button>
        </div>

      </form>
    </div>
  );
}