import Link from "next/link";
import getUser from "./action";
import ProfileMenu from "./profileMenu";
import { UserSerivce } from "@/app/service/userService";

export default async function Navbar() {
  const userId = getUser();
  const userSerivce = new UserSerivce()
  const user = await userSerivce.getUserInfoByUUID(userId)

  return (
    <div className="min-h-full ">
      <nav className="bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/"><h1 className="font-medium text-pink-400 cursor-pointer text-xl">AniMap</h1></Link>
              </div>
              <div className="hidden md:block">
                {/* <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/anime"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Anime
                  </Link>
                  </div> */}
                  <div>
                </div>
              </div>
            </div>
            <div>
            {user ? (
                    <ProfileMenu user={user}/>
                  ) : (
                    <Link
                      href="/login"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Login
                    </Link>
                  )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
