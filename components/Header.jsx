"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Image from "next/image";
import { useState } from "react";
import { UserButton, UserProfile } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between bg-white p-6 dark:bg-gray-800">
      <div className="flex items-center space-x-3">
        <Link href="/">
          <Image src="/lupleg.png" alt="Lupleg" width={300} height={200} />
        </Link>
      </div>
      <div className="hidden md:block">
        <nav className="flex space-x-6">
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="about-us"
          >
            About
          </Link>
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="challenge"
          >
            Challenge
          </Link>
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="mentorships"
          >
            Mentorships
          </Link>
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="academy"
          >
            Academy
          </Link>
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="podcasts"
          >
            Podcasts
          </Link>
        </nav>
      </div>

      <div className="text-md hidden rounded-full   p-2 border-2 border-green-700  md:block">
        {/* <Link href="account-profile">Go Profile</Link> */}
        <UserButton className="m-2 " />
      </div>

      {/* mobile view */}
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6">
            <SheetTrigger asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="about-us"
              >
                About
              </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="challenge"
              >
                Challenge
              </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="mentorships"
              >
                Mentorships
              </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="academy"
              >
                Academy
              </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="podcasts"
              >
                Podcasts
              </Link>
            </SheetTrigger>
            <div className="w-30 flex   items-center rounded-full">
              <Button className="text-md text-white">
                <SheetTrigger asChild>
                  <Link href="profile">Go Profile</Link>
                </SheetTrigger>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
