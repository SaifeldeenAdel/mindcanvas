import "./globals.css";
import { Fraunces, Montserrat, Nunito } from "next/font/google";

import SideBar from "./components/SideBar/SideBar";

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

const nunito = Nunito({
	subsets: ["latin"],
	weight: ["variable"],
	variable: "--nunito",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.variable} ${nunito.variable} ${fraunces.variable} `}
			>
				<SideBar />
				<div>{children}</div>
			</body>
		</html>
	);
}
