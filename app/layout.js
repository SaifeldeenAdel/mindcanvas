import "./globals.css";
import { Heebo, Fraunces, Montserrat } from "next/font/google";
import SideBar from "./components/Sidebar/SideBar";

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

const montserrat = Montserrat({
  subsets:["latin"],
  variable: "--montserrat"
})


export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${heebo.variable} ${fraunces.variable} ${montserrat.variable}`}>
				<SideBar />
				<div>{children}</div>
			</body>
		</html>
	);
}
