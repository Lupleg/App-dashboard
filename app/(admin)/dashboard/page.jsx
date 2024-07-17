"use client";

import { CiLogout } from "react-icons/ci";
import { SignOutButton, useUser } from "@clerk/nextjs";

import { SiThealgorithms } from "react-icons/si";
import { FaDatabase, FaCode } from "react-icons/fa";
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
            <Card className="bg-gradient-to-br from-gray-400 via-gray-500 to-gray-700 flex flex-col justify-center items-start">
              <SiThealgorithms className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
              <CardHeader>
                <CardTitle className="mb-4 text-gray-300">
                  Algorithm Challenge
                </CardTitle>
                <CardDescription className=" text-white">
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
            <Card className="bg-gradient-to-br from-gray-400 via-gray-500 to-gray-700 flex flex-col justify-center items-start">
              <FaDatabase className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
              <CardHeader>
                <CardTitle className="mb-4 text-gray-300">
                  Data Structures Challenge
                </CardTitle>
                <CardDescription className=" text-white">
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
            <Card className="bg-gradient-to-br from-gray-400 via-gray-500 to-gray-700 flex flex-col justify-center items-start">
              <FaCode className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
              <CardHeader>
                <CardTitle className="mb-4 text-gray-300">
                  Coding Interview Challenge
                </CardTitle>
                <CardDescription className=" text-white">
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
            <Card className="bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600">
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
            <Card className="bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600">
              <FaDatabase className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
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
            <Card className="bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600">
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
            <Card className="bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600">
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
            <Card className="bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600">
              <FaDatabase className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
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
            <Card className="bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600">
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
            <Card className="bg-gradient-to-br from-gray-500 via-gray-400 to-gray-200">
              <SiThealgorithms className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
              <CardHeader>
                <CardTitle>Algorithm Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2 mt-3">
                  <span className="p-1 border rounded-lg border-gray-600 text-green-900">
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
            <Card className="bg-gradient-to-br from-gray-500 via-gray-400 to-gray-200">
              <FaDatabase className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
              <CardHeader>
                <CardTitle>Data Structures Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2 mt-2">
                  <span className="p-1 border rounded-lg border-gray-600 text-green-900">
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
            <Card className="bg-gradient-to-br from-gray-500 via-gray-400 to-gray-200">
              <FaCode className="text-[45px] ml-8 text-[#ED7133] font-bold mt-3" />
              <CardHeader>
                <CardTitle>Coding Interview Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2 mt-3">
                  <span className="p-1 border rounded-lg border-gray-600 text-green-900">
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
              <TableHeader className="text-xl text-gray-900 rounded-t-lg">
                <TableRow>
                  <TableHead className="py-4">Rank</TableHead>
                  <TableHead> User </TableHead>
                  <TableHead>Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <span className="bg-[#ED7133] rounded-lg flex items-center justify-center w-10 h-10 text-xl">
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
                    <span className="bg-[#ED7133] rounded-lg flex items-center justify-center w-10 h-10 text-xl">
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
                    <span className="bg-[#ED7133] rounded-lg flex items-center justify-center w-10 h-10 text-xl">
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
                    <span className="bg-[#ED7133] rounded-lg flex items-center justify-center w-10 h-10 text-xl">
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
                    <span className="bg-[#ED7133] rounded-lg flex items-center justify-center w-10 h-10 text-xl">
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
