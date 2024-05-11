import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import NavBar from "../components/NavBar";

export const metadata: Metadata = {
    title: "Kinn's Lounge",
    description: "Portfolio Web of Kinn",
    icons: {
        icon: "img/kinn.png",
    },
    other: {
        url: "img/kinn-banner.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
