import Link from "next/link";
import "./globals.css";
import { Heebo, Fraunces } from "next/font/google";
import SideBar from "./(Sidebar)/SideBar";

const heebo = Heebo({
	subsets: ["latin"],
	weight: ["100", "200", "300", "500", "900"],
	variable: "--heebo",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ['100', "300", "500", "700", "900"],
  variable: "--fraunces"
})

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${heebo.variable} ${fraunces.variable}`}>
				<SideBar />
				<div className="content-container">{children}</div>
			</body>
		</html>
	);
}
