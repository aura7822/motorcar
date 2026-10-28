import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const links = [["Buy", "/inventory"], ["Sell or trade in", "/#trade-in"], ["Financing", "/#trade-in"], ["Delivery", "/#delivery"]];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-mist/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-display text-xl font-bold">Carweb</Link>
        <nav aria-label="Main" className="hidden gap-7 text-sm font-medium md:flex">
          {links.map(([l, h]) => <Link key={l} href={h} className="hover:text-sea">{l}</Link>)}
        </nav>
        <div className="flex items-center gap-4 text-sm font-medium">
          <Link href="/saved" aria-label="Saved cars">Saved</Link>
          <SignedOut><SignInButton mode="modal"><button className="rounded-full bg-ink px-4 py-2 text-white">Sign in</button></SignInButton></SignedOut>
          <SignedIn><UserButton /></SignedIn>
        </div>
      </div>
    </header>
  );
}
