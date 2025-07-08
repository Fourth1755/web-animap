import Link from "next/link";
import ProfileMenu from "./components/profileMenu/profileMenu";

export default async function Navbar() {

  return (
    <div className="w-full top-0 overflow-hidden left-0 -z-1 absolute">
      <nav className="bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                <h1 className="font-medium text-pink-400 cursor-pointer text-xl">AniMap</h1></Link>
              </div>
              <div className="hidden md:block">

                  <div>
                </div>
              </div>
            </div>
            <div>
            <ProfileMenu/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
