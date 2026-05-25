import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const jetbrainsMono = Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-jetbrainsMono",
});

export const metadata = {
	title: "Grantt",
	description: "Portfolio",
	icons: {
		icon: "/favicon.ico", // Note the leading forward slash
	},
};

export default function RootLayout({ children }) {
	return (
		<>
			<html lang="en">
				<body className={`${jetbrainsMono.variable}`}>
					<Header />
					<PageTransition>{children}</PageTransition>
				</body>
			</html>
		</>
	);
}
