import Image from "next/image";
import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import voyage from "../../../public/manhood.jpg"

export const metadata = {
	title: "• The Voyage of Life",
};

export default function () {
	return (
		<article className="mx-auto flex max-w-[60rem] flex-col px-4 pt-[7rem] pb-[5rem]">
			<header className="mx-6 text-left sm:mx-10">
				<div className="flex">
					<CiCalendar size="20" className="mr-2" />
					<small className="font-sans text-[0.8rem] font-light sm:text-[1rem]">
						27 April, 2023
					</small>
				</div>
				<h1 className="font-sans text-[1.8rem] font-bold tracking-[0.02rem] sm:text-[2rem] md:text-[2.8rem]">
					The Voyage of Life
				</h1>
			</header>
			<Image
				alt="Graves"
				src={voyage}
        placeholder="blur"
				className="my-8 h-[8rem] max-w-[100%] rounded-lg object-cover sm:h-[10rem]"
			/>
			<div className="mx-4 font-nunito sm:mx-10">
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					One of the most unique artists I've come across, you're in for a ride.
				</p>

				<br />
				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					Background
				</h2>
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					
				</p>
				<br />
			

				<br />

				<Link
					href="../art"
					className="text-[1rem] font-semibold sm:text-[1.2rem]"
				>
					{"-"} Go back
				</Link>
			</div>
		</article>
	);
}
