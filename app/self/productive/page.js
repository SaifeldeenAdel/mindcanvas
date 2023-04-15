import Link from "next/link";
import { CiCalendar } from "react-icons/ci";

export const metadata = {
	title: "Everyone wants to be productive.",
};

export default function () {
	return (
		<article className="mx-auto my-[8rem] flex max-w-[60rem] flex-col px-4">
			<header className="mx-6 text-left sm:mx-10">
				<div className="flex">
					<CiCalendar size="20" className="mr-2" />
					<small className="font-montserrat text-[0.8rem] font-light sm:text-[1rem]">
						15 April, 2023
					</small>
				</div>
				<h1 className="font-montserrat text-[1.8rem] font-bold tracking-[0.02rem] sm:text-[2rem] md:text-[2.8rem]">
					Everyone wants to be productive.
				</h1>
			</header>
			<img
				src="/desk.jpg"
				className="my-8 h-[8rem] max-w-[100%] rounded-lg object-cover sm:h-[10rem]"
			/>
			<div className="mx-6 font-nunito sm:mx-10">
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Don't they? And if you don't, then you need to get yourself checked
					out. There are probably millions of articles about productivity
					already but I thought I'd share my experience and I how I deal with
					it.
				</p>

				<br />
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Bottom line is being productive is tough. Unless you achieve that
					momentum and you're in some kind of flow state, most of the time
					you're going to be forcing yourself to be productive. So how do you
					get that momentum? Or atleast try your best to.
				</p>

				<br />
				<Link
					href="../self"
					className="text-[1rem] font-semibold sm:text-[1.2rem]"
				>
					{"-"} Go back
				</Link>
			</div>
		</article>
	);
}
