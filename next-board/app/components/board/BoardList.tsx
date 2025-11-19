import Link from "next/link";
import { boardList } from "@/app/data/data";

export default function BoardList() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">게시글 목록</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 text-sm text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="border border-gray-300 px-4 py-2 w-16 text-center">
                ID
              </th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2 w-24 text-center">
                Writer
              </th>
              <th className="border border-gray-300 px-4 py-2 w-32 text-center">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {boardList.map((board) => (
              <tr key={board.id} className="hover:bg-gray-50 transition-colors">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {board.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <Link
                    href={`/board/${board.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {board.title}
                  </Link>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {board.writer}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {board.reg_date.substring(0, 10)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <Link
          href="/"
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          Home
        </Link>
        <Link
          href="/board/write"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Write
        </Link>
      </div>
    </div>
  );
}
