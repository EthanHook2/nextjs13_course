import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Next.jsv13 Fullstack Course with Authentication</h1>
      <div className="flex space-x-4">
        <Link href="/login">
          Login
        </Link>
        <Link href="/signup">
          Signup
        </Link>
        <Link href="/profile">
          Vist my profile
        </Link>
      </div>
    </div>
  );
}
