import Link from "next/link";
import ProfileMenu from "./components/profileMenu/profileMenu";
import { UserService } from "@/app/service/userService";
import LoginButton from "./components/loginButton/loginButton";

export default async function NavbarMap() {

  return (
    <div className="w-full top-0 overflow-hidden left-0 -z-1 absolute ">
      <nav>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                <h1 className="text-pink-500 cursor-pointer text-xl font-semibold">AniMap</h1></Link>
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