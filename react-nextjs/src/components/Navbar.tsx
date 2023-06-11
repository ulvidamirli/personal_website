import Image from "next/image";
import Link from "next/link";
import Logo from "/public/icons/laptop_1f4bb.png";

export default function Navbar(): JSX.Element {
  return (
    <>
      <div className="shadow-sm bg-white sm:mb-10">
        <div className="container-sm py-4">
          <div className="row -mx-4">
            <div className="w-full px-4">
              <div className="flex justify-between">
                <Link href="/">
                  <Image
                    width={24}
                    height={24}
                    src={Logo}
                    alt="Laptop icon"
                  ></Image>
                </Link>
                <div className="flex justify-between space-x-10">
                  <Link href="/posts">
                    <div className="p">Posts</div>
                  </Link>
                  <Link href="https://www.github.com" target="_blank">
                    <div className="p">Github</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
