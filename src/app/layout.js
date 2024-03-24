import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mesopotamia For General Contracting",
  description: "Created by FIROZ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* BODY CONTAINER */}
        <div className=" ">
          {/* BODY ITEMS CONTAINER */}
          <div className="p-4 min-w-full min-h-screen bg-slate-300 flex flex-col justify-start items-center gap-8">
            {/* NAVBAR CONTAINER */}
            <div className="w-full min-h-full ">
              <NavBar />
            </div>

            {/* CHILDREN CONTAINER */}
            <div className="w-full min-h-full bg-white">{children}</div>

            {/* FOOTER CONTAINER */}
            <div className="w-full min-h-full bg-white">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
