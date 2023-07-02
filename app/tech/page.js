import Card from "../components/Card/Card";
import { BsCodeSlash } from "react-icons/bs";

export const metadata = {
	title: "Tech",
};

export default function () {
	return (
		<div className=" flex flex-col items-center justify-center pt-[7rem] h-[100vh]">
			<header className="mx-4 mb-10 flex flex-col items-center justify-center gap-3 px-6 text-center font-serif sm:p-0">
				<h1 className="text-[1.2rem] font-medium italic leading-snug sm:text-[1.6rem]">
					Coming Soon
				</h1>
				<BsCodeSlash className="text-[1.3rem] text-black" />
			</header>

			<div className="mx-8 mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2"></div>
		</div>
	);
}
