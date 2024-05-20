import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="text-white hover:text-gray-300">
            <span className="text-xl">Town</span>
            <span className="text-primary-foreground hover:text-primary/90 text-xl">in</span>
          </Link>
          <div>
            <Link href="/news" className="text-white hover:text-gray-300 px-3">
              뉴스
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300 px-3">
              연락처
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 px-3">
              정보
            </Link>
            <Link href="/signin" className="text-white hover:text-gray-300 px-3">
              로그인
            </Link>
            <Link href="../../../app/pages/signup" className="text-white hover:text-gray-300 px-3">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}