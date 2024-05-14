import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const jbm = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://hushh.npitt.dev"),
	title: "hushh - a minimal noise generator for MacOS",
	description:
		"hushh is a minimal noise generator for MacOS. Generate rain sounds for sleep, or some white noise to help you feel relaxed.",

	openGraph: {
		images: "/og.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="overflow-hidden">
			<body
				className={`${jbm.className} bg-gradient-to-t from-violet-100 h-svh overflow-auto`}
			>
				{children}
			</body>
		</html>
	);
}
