'use client'

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Board } from "@/app/components/type/boardType";

export default function BoardModify() {
  const params = useParams();
  const id = params.id; // URL의 id 값
  const router = useRouter();

  // 데이터 상태 관리
  const [board, setBoard] = useState<Board | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 입력 폼 상태 관리
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [writer, setWriter] = useState("");

  // 1. 게시글 데이터 조회 (DB 연결)
  useEffect(() => {
    const fetchBoard = async () => {
      try {
        // API 호출
        const res = await fetch(`/api/board/${id}`);
        if (!res.ok) throw new Error("데이터 조회 실패");
        
        const data = await res.json();
        
        setBoard(data);
        // 조회된 데이터로 input 초기값 설정
        setTitle(data.title);
        setContents(data.contents);
        setWriter(data.writer);
      } catch (error) {
        console.error(error);
        alert("게시글을 불러오지 못했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchBoard();
    }
  }, [id]);

  // 2. 수정 요청 핸들러 (PUT)
  const handleModify = async () => {
    if (!title.trim() || !contents.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    try {
      const res = await fetch(`/api/board/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          contents: contents,
          // writer는 보통 수정하지 않으므로 보내지 않음
        }),
      });

      if (res.ok) {
        alert("게시글이 수정되었습니다.");
        router.push(`/board/${id}`); // 상세 페이지로 이동
        router.refresh(); // 데이터 갱신
      } else {
        alert("수정에 실패했습니다.");
      }
    } catch (error) {
      console.error("수정 중 오류 발생:", error);
      alert("오류가 발생했습니다.");
    }
  };

  if (isLoading) return <div className="text-center py-20">Loading...</div>;
  if (!board) return <div className="text-center py-20">게시글을 찾을 수 없습니다.</div>;

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold border-b border-gray-300 pb-4 mb-6">
        게시글 수정
      </h2>

      {/* 제목 입력 */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          placeholder="제목을 입력하세요"
        />
      </div>

      {/* 작성자 (읽기 전용) */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">작성자</label>
        <input
          type="text"
          value={writer}
          readOnly
          disabled
          className="w-full border border-gray-300 p-2 rounded bg-gray-100 text-gray-500 cursor-not-allowed"
        />
      </div>

      {/* 본문 내용 입력 */}
      <div className="mb-10">
        <label className="block text-gray-700 font-bold mb-2">내용</label>
        <textarea
          value={contents}
          onChange={(e) => setContents(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded h-[300px] focus:outline-none focus:border-blue-500 resize-none"
          placeholder="내용을 입력하세요"
        />
      </div>

      {/* 하단 버튼 영역 */}
      <div className="flex justify-end gap-2 border-t border-gray-300 pt-6">
        <Link
          href={`/board/${id}`}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          Reset
        </Link>
        
        <button
          onClick={handleModify}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Modify
        </button>
      </div>
    </div>
  );
}