import Link from "next/link";
import { CiCalendar } from "react-icons/ci";

export const metadata = {
	title: "• Who is Zdzisław Beksiński?",
};

export default function () {
	return (
		<article className="mx-auto flex max-w-[60rem] flex-col px-4 pt-[7rem] pb-[5rem]">
			<header className="mx-6 text-left sm:mx-10">
				<div className="flex">
					<CiCalendar size="20" className="mr-2" />
					<small className="font-sans text-[0.8rem] font-light sm:text-[1rem]">
						28 April, 2023
					</small>
				</div>
				<h1 className="font-sans text-[1.8rem] font-bold tracking-[0.02rem] sm:text-[2rem] md:text-[2.8rem]">
					Who is Zdzisław Beksiński?
				</h1>
			</header>
			<img
				alt="Zdzisław Beksiński"
				src="/graves.jpg"
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
					Zdzisław Beksiński is a polish painter who has made a great impact on
					surrealism and dark dystopian art. He was also interested in
					photography in the beginning of his career however he turned to
					painting due to photography's limitations and I dont blame him.
					Someone with as vivid of an imagination as him would only be satisfied
					with painting his visions from scratch.
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					His paintings and art in general can be divided into several periods
					and genres, the paintings you'll find here are all from his so-called
					"fantastic" series in the late 1960s which consisted of very detailed,
					nightmarish surrealistic environments usually containing death and
					decay.
				</p>
				<br />
				<br />

				<div className="flex flex-row justify-center gap-3 md:gap-8">
					<img
						className="w-[60%] rounded-[1rem] object-cover transition-all duration-[200ms] ease-linear "
						src={`/portrait.jpeg`}
					/>
					<img
						className="w-[40%] rounded-[1rem] object-cover transition-all duration-[200ms] ease-linear "
						src={`/portrait2.jpg`}
					/>
				</div>
				<br />

				<br />

				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					The art
				</h2>

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Creepy, surreal,
				</p>

				<br />
				<br />

				<h3 className="pb-4 font-sans text-[1.1rem] font-semibold sm:text-[1.3rem]">
					None of his paintings are titled. Why?
				</h3>

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Create a todo list. Yes, it's that simple sometimes. You won't believe
					it until you try it. Creating a list forces you to organize whatever
					you need to get done into concise, deliverable tasks. Then it forces
					you to work on these tasks one by one instead of multitasking and
					eventually being overwhelmed and never completely done with any of
					them.
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
