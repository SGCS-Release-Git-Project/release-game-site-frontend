// src/pages/SubmitCodePage.tsx
import { useState, FormEvent } from "react";
import { ArrowLeftCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function SubmitCodePage() {
  // ── 상태 ─────────────────────────────────────────────────────
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  // ── 제출 핸들러 ───────────────────────────────────────────────
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!file) return alert("ZIP 파일을 선택해 주세요.");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("token", token);

    try {
      setStatus("sending");
      const res = await fetch("http://20.41.105.205:8011/git", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("done");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  // ── 화면 ─────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* 헤더 상단으로 돌아가기 링크 */}
      <header className="container mx-auto px-4 py-6">
        <Link
          to="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
        >
          <ArrowLeftCircle className="mr-2 h-5 w-5" />
          홈으로
        </Link>
      </header>

      {/* 제출 섹션 */}
      <section className="flex-grow bg-gradient-to-b from-gray-900 to-gray-800 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto bg-gray-800 rounded-2xl shadow-xl p-8">
            <h1 className="text-3xl font-bold text-center mb-8">코드 제출</h1>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              encType="multipart/form-data"
            >
              {/* ZIP 업로드 */}
              <div>
                <label className="block mb-1 font-medium">ZIP 파일</label>
                <input
                  type="file"
                  accept=".zip"
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                  required
                  className="w-full border rounded px-3 py-2 bg-gray-700 placeholder-gray-400"
                />
              </div>

              {/* 이름 */}
              <div>
                <label className="block mb-1 font-medium">이름</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border rounded px-3 py-2 bg-gray-700 placeholder-gray-400"
                  placeholder="hyeonsang"
                />
              </div>

              {/* Git 토큰 */}
              <div>
                <label className="block mb-1 font-medium">Git 토큰</label>
                <input
                  type="password"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  required
                  className="w-full border rounded px-3 py-2 bg-gray-700 placeholder-gray-400"
                  placeholder="ghp_…"
                />
              </div>

              {/* 전송 버튼 */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-2 rounded-lg font-semibold transition"
              >
                {status === "sending" ? "전송 중…" : "제출"}
              </button>

              {/* 상태 메시지 */}
              {status === "done" && (
                <p className="text-green-400 text-center">
                  ✅ 제출이 완료되었습니다!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-center">
                  ⚠️ 제출 중 오류가 발생했습니다. 다시 시도해 주세요.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
