import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import { CiLogout } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";

const DashboardSideBar = () => {
  return (
    <div className="h-screen w-16 md:flex flex-col space-y-4 py-6 items-center hidden">
      <div className="h-[30%]">
        <Link href="/">
          <Image
            src="/favicon.ico"
            alt="lupleg logo"
            height={50}
            width={50}
            className="h-8 w-8"
          />
        </Link>
      </div>
      <div className="h-[60%] flex flex-col space-y-4 mb-12 text-green-900">
        <div>
        <Link href="#" >
        <FaCalendarAlt className="h-6 w-6"/>
        </Link>
        </div>
        <div>
        <Link href="#" >
        <FaCalendarAlt className="h-6 w-6"/>
        </Link>
        </div>
        <div>
        <Link href="#" >
        <FaCalendarAlt className="h-6 w-6"/>
        </Link>
        </div>
        <div>
        <Link href="#" >
        <FaCalendarAlt className="h-6 w-6"/>
        </Link>
        </div>
        <div>
        <Link href="#" >
        <FaCalendarAlt className="h-6 w-6"/>
        </Link>
        </div>
        <div>
        <Link href="#" >
        <FaCalendarAlt className="h-6 w-6"/>
        </Link>
        </div>
      </div>
      <div className="text-green-700 font-bold mt-32 flex flex-col items-center">
        <div className="text-md pb-2">
          {/* <Link href="account-profile">Go Profile</Link> */}
          <UserButton className="m-2 h-40 w-40 " />
        </div>
        <SignOutButton>
            <CiLogout className="cursor-pointer h-6 w-6" />
          </SignOutButton>
      </div>
    </div>
  );
};

export default DashboardSideBar;
