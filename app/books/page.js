import Book from "../components/Book/Book";

import darkmatter from "../../public/darkmatter.jpg";
import project from "../../public/project.jpg";
import road from "../../public/road.jpg";
import goneworld from "../../public/goneworld.jpg";
import rage from "../../public/rage.jpg";
import pines from "../../public/pines.jpg";

import discourses from "../../public/discourses.jpg";
import meditations from "../../public/meditations.jpg";
import night from "../../public/night.jpg";
import meaning from "../../public/meaning.jpg";

export const metadata = {
	title: "• Books",
};

export default function ({ children }) {
	return (
		<div className="flex flex-col items-center justify-center pt-[7rem]">
			<header className="mx-4 mb-5 flex flex-col items-center justify-center gap-3 text-center font-serif sm:mx-0">
				<h1 className="text-[1.2rem] font-medium italic leading-snug  sm:text-[1.6rem]">
					"A reader lives a thousand lives before he dies. The man who never
					reads lives only one"
				</h1>
				<h2 className="w-[100%] text-base font-light sm:text-lg">
					George R.R Martin
				</h2>
			</header>
			<div className="flex max-w-[55rem] flex-col items-center justify-center px-4 sm:px-8">
				<h1 className="w-[100%] text-left font-sans text-[1rem] font-bold sm:text-[1.3rem]">
					Fiction
				</h1>
				<hr className="mb-4 w-[100%]" />

				<div className="mb-10 grid grid-cols-3 gap-4 md:grid-cols-5">
					<Book rating={5} img={darkmatter} />
					<Book rating={3} img={project} />
					<Book rating={4} img={goneworld} />
					<Book rating={1} img={rage} />
					<Book rating={4} img={road} />
					<Book rating={5} img={pines} />
				</div>
			</div>

			<div className="flex max-w-[55rem] flex-col items-center justify-center px-4 sm:px-8">
				<h1 className="w-[100%] text-left font-sans text-[1rem] font-bold sm:text-[1.3rem] ">
					Non Fiction
				</h1>
				<hr className="mb-4 w-[100%]" />

				<div className="mb-10 grid grid-cols-3 gap-4 md:grid-cols-5">
					<Book rating={5} img={meaning} />
					<Book img={night} />
					<Book img={discourses} />
					<Book img={meditations} />
				</div>
			</div>
		</div>
	);
}
