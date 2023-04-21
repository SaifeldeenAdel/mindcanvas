import "./globals.css";
import {
	Fraunces,
	Montserrat,
	Heebo,
	Josefin_Sans,
	Nunito,
	Nunito_Sans,
} from "next/font/google";

import SideBar from "./components/Sidebar/SideBar";

const heebo = Heebo({
	subsets: ["latin"],
	weight: ["variable"],
	variable: "--heebo",
});

const fraunces = Fraunces({
	subsets: ["latin"],
	weight: ["variable"],
	variable: "--fraunces",
});

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["variable"],
	variable: "--montserrat",
});

const josefin = Josefin_Sans({
	subsets: ["latin"],
	weight: ["variable"],
	variable: "--josefin",
});

const nunito = Nunito({
	subsets: ["latin"],
	weight: ["variable"],
	variable: "--nunito",
});

export const metadata = {
	title: "• MindCanvas",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.variable} ${heebo.variable} ${fraunces.variable} ${josefin.variable} ${nunito.variable}`}
			>
				<SideBar />
				<div>{children}</div>
			</body>
		</html>
	);
}
