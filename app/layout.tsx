import type { Metadata } from "next";
import localFont from "next/font/local";
import clsx from "clsx";

import Sidebar from "./components/Common/sidebar";
import Theme from "./theme-provider";
import "./globals.css";

const pretendard = localFont({
  src: [
    {
      path: "../public/fonts/Pretendard-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Medium.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Seolyeong Bae",
    template: "%s | Seolyeong Bae",
  },
  description: "Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto text-black bg-white dark:text-white dark:bg-[#111010]",
          pretendard.variable
        )}
      >
        <Theme>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Sidebar />
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
