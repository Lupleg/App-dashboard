"use client";

import { CiLogout } from "react-icons/ci";
import { SiDatastax } from "react-icons/si";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { SiThealgorithms } from "react-icons/si";
import { FaCode } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function Component() {
  const { user } = useUser();
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="bg-gray-900 text-white py-6 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Coding Challenge Dashboard</h1>
        <div className="flex items-center gap-4">
          Hello 👋, {user?.fullName}{" "}
          <SignOutButton>
            <CiLogout className="cursor-pointer" />
          </SignOutButton>
        </div>
      </header>
      <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 mt-4">Upcoming Challenges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className=" border border-gray-600 flex flex-col justify-center items-start">
              <SiThealgorithms className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
              <CardHeader>
                <CardTitle className="mb-4">
                  Algorithm Challenge
                </CardTitle>
                <CardDescription className="">
                  June 15, 2023
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex items-end justify-between">
                <Button
                  variant="solid"
                  size="sm"
                  className="rounded-lg bg-[#ED7133] hover:bg-amber-800 text-white mt-2 transition-transform duration-300 transform hover:translate-x-2"
                >
                  Sign Up →
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-gray-600 flex flex-col justify-center items-start">
              <SiDatastax className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
              <CardHeader>
                <CardTitle className="mb-4">
                  Data Structures Challenge
                </CardTitle>
                <CardDescription className="">
                  Nov 15, 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="solid"
                  size="sm"
                  className="rounded-lg bg-[#ED7133] hover:bg-amber-800 text-white mt-2 transition-transform duration-300 transform hover:translate-x-2"
                >
                  Sign Up →
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-gray-600 flex flex-col justify-center items-start">
              <FaCode className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
              <CardHeader>
                <CardTitle className="mb-4">
                  Coding Interview Challenge
                </CardTitle>
                <CardDescription className="">
                  June 15, 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="solid"
                  size="sm"
                  className="rounded-lg bg-[#ED7133] hover:bg-amber-800 text-white mt-2 transition-transform duration-300 transform hover:translate-x-2"
                >
                  Sign Up →
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 mt-4">Active Challenges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="border border-gray-600">
              <SiThealgorithms className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
              <CardHeader>
                <CardTitle>Algorithm Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <Progress value={75} />
                </div>
                <Button
                  variant="solid"
                  size="sm"
                  className="rounded-lg border border-gray-600 hover:bg-gray-200 mt-4 transition-transform duration-300 transform hover:translate-x-2"
                >
                  View Challenge →
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-gray-600">
              <SiDatastax className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
              <CardHeader>
                <CardTitle>Data Structures Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <Progress value={50} />
                </div>
                <Button
                  variant="solid"
                  size="sm"
                  className="rounded-lg border border-gray-600 hover:bg-gray-200 mt-4 transition-transform duration-300 transform hover:translate-x-2"
                >
                  View Challenge →
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-gray-600">
              <FaCode className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
              <CardHeader>
                <CardTitle>Coding Interview Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <Progress value={90} />
                </div>
                <Button
                  variant="solid"
                  size="sm"
                  className="rounded-lg border border-gray-600 hover:bg-gray-200 mt-4 transition-transform duration-300 transform hover:translate-x-2"
                >
                  View Challenge →
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <Card className="border border-gray-600">
              <SiThealgorithms className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
              <CardHeader>
                <CardTitle>Algorithm Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <Progress value={75} />
                </div>
                <Button
                  variant="solid"
                  size="sm"
                  className="rounded-lg border border-gray-600 hover:bg-gray-200 mt-4 transition-transform duration-300 transform hover:translate-x-2"
                >
                  View Challenge →
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-gray-600">
              <SiDatastax className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
              <CardHeader>
                <CardTitle>Data Structures Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <Progress value={50} />
                </div>
                <Button
                  variant="solid"
                  size="sm"
                  className="rounded-lg border border-gray-600 hover:bg-gray-200 mt-4 transition-transform duration-300 transform hover:translate-x-2"
                >
                  View Challenge →
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-gray-600">
              <FaCode className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
              <CardHeader>
                <CardTitle>Coding Interview Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <Progress value={90} />
                </div>
                <Button
                  variant="solid"
                  size="sm"
                  className="rounded-lg border border-gray-600 hover:bg-gray-200 mt-4 transition-transform duration-300 transform hover:translate-x-2"
                >
                  View Challenge →
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 mt-4">Past Challenges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="border border-gray-600">
              <SiThealgorithms className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
              <CardHeader>
                <CardTitle>Algorithm Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2 mt-3">
                  <span className="text-green-900">
                    Score: 95
                  </span>
                  <Button
                    variant="solid"
                    size="sm"
                    className="rounded-lg border border-gray-600 hover:bg-gray-200 transition-transform duration-300 transform hover:translate-x-2"
                  >
                    View Results →
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-600">
              <SiDatastax className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
              <CardHeader>
                <CardTitle>Data Structures Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2 mt-2">
                  <span className=" text-green-900">
                    Score: 95
                  </span>
                  <Button
                    variant="solid"
                    size="sm"
                    className="rounded-lg border border-gray-600 hover:bg-gray-200 transition-transform duration-300 transform hover:translate-x-2"
                  >
                    View Results →
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-600">
              <FaCode className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
              <CardHeader>
                <CardTitle>Coding Interview Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2 mt-3">
                  <span className=" text-green-900">
                    Score: 95
                  </span>
                  <Button
                    variant="solid"
                    size="sm"
                    className="rounded-lg border border-gray-600 hover:bg-gray-200 transition-transform duration-300 transform hover:translate-x-2"
                  >
                    View Results →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-6 mt-4">Leaderboard 🏆</h2>
          <Card>
            <Table>
              <TableHeader className="text-xl rounded-t-lg font-bold">
                <TableRow>
                  <TableHead className="py-4 text-[#000] font-bold">Rank</TableHead>
                  <TableHead className="py-4 text-[#000] font-bold"> User </TableHead>
                  <TableHead className="py-4 text-[#000] font-bold">Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <span className="bg-[#ED7133] rounded-lg flex items-center justify-center w-10 h-10 text-xl text-white font-bold">
                      1
                    </span>
                  </TableCell>
                  <TableCell className="flex gap-4 items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                      alt=""
                      className="h-10 w-10 rounded-lg"
                    />
                    John Doe
                  </TableCell>
                  <TableCell>1000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <span className="bg-[#ED7133] rounded-lg flex items-center justify-center w-10 h-10 text-xl text-white font-bold">
                      2
                    </span>
                  </TableCell>
                  <TableCell className="flex gap-4 items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                      alt=""
                      className="h-10 w-10 rounded-lg"
                    />
                    Jane Smith
                  </TableCell>
                  <TableCell>950</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <span className="bg-[#ED7133] rounded-lg flex items-center justify-center w-10 h-10 text-xl text-white font-bold">
                      3
                    </span>
                  </TableCell>
                  <TableCell className="flex gap-4 items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                      alt=""
                      className="h-10 w-10 rounded-lg"
                    />
                    Bob Johnson
                  </TableCell>
                  <TableCell>900</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <span className="bg-[#ED7133] rounded-lg flex items-center justify-center w-10 h-10 text-xl text-white font-bold">
                      4
                    </span>
                  </TableCell>
                  <TableCell className="flex gap-4 items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                      alt=""
                      className="h-10 w-10 rounded-lg"
                    />
                    Sarah Lee
                  </TableCell>
                  <TableCell>850</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <span className="bg-[#ED7133] rounded-lg flex items-center justify-center w-10 h-10 text-xl text-white font-bold">
                      5
                    </span>
                  </TableCell>
                  <TableCell className="flex gap-4 items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                      alt=""
                      className="h-10 w-10 rounded-lg"
                    />
                    Tom Wilson
                  </TableCell>
                  <TableCell>800</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </section>
      </main>
    </div>
  );
}
