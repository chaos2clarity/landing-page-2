import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/purelogo.svg";
import SmallLogo from "@/public/purelogo.svg";

export default function Header() {
  const navigation = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    // ... other navigation items
  ]

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 backdrop-blur-sm px-3 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border-[0.5px] before:border-gray-400/20 before:[background:linear-gradient(theme(colors.white/50),theme(colors.gray.50/50))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-0 items-center">
            <Link href="/">
              <Image src={SmallLogo} alt="Logo" width={35} height={100} />
            </Link>
            <nav className="ml-8">
              <ul className="flex space-x-8">
                {navigation.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className="text-sm text-gray-600 hover:text-gray-900">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm bg-white text-gray-900 shadow hover:bg-gray-50 border border-gray-200 transition-colors"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-white text-gray-900 shadow hover:bg-gray-50 border border-gray-200 transition-colors"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
