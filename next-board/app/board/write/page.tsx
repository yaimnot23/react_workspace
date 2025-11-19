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

  // ✅ 여기에 async를 붙여야 비동기 통신(fetch)이 가능합니다.
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 유효성 검사
    if (!title) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!writer) {
      alert("작성자를 입력해주세요.");
      return;
    }
    if (!contents) {
      alert("내용을 입력해주세요.");
      return;
    }

    // ✅ 실제 DB 전송 로직 (fetch 사용)
    try {
      const res = await fetch('/api/board', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          title, 
          writer, 
          contents 
        }),
      });

      if (res.ok) {
        alert("게시글이 정상적으로 등록되었습니다.");
        router.push('/board'); // 목록으로 이동
        router.refresh();      // 데이터 새로고침
      } else {
        alert("등록에 실패했습니다.");
      }

    } catch (error) {
      console.error("등록 중 오류 발생:", error);
      alert("오류가 발생했습니다.");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold border-b border-gray-300 pb-4 mb-6">
        게시글 등록
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