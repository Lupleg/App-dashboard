import { Inter } from "next/font/google";
import "../globals.css";
import DashboardSideBar from "@/components/DashboardSideBar";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Building Africa's Tech Future",
  description:
    "Join us in shaping the future of technology in Africa! Our developer community empowers Africans with the skills and resources to solve problems, drive innovation, and create a more sustainable future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
       <body className={`${inter.className} flex md:flex-row flex-col w-full justify-between`} >
          <DashboardSideBar />
          <div className="w-full">
          {children}
          </div>
        </body>
      </ClerkProvider>
    </html>
  );
}

// For reference use this link: https://icodethis.com/pro
