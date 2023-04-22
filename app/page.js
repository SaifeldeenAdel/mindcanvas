import Link from "next/link";
import { TfiBookmarkAlt, TfiDesktop, TfiPalette, TfiThought } from "react-icons/tfi";

export default function Home() {
	return (
		<div className="mx-auto flex h-screen max-w-2xl flex-col justify-center px-4 font-sans sm:px-0">
			<h1 className="text-center text-[2.1rem] font-bold text-primary sm:text-[2.5rem]">
				MINDCANVAS
			</h1>
			<h2 className="mt-2 text-center text-[1rem] font-light text-primary sm:text-[1rem]">
				things I like to talk about.
			</h2>
			<br />
			<br />
			<div className="grid w-[100%] grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-0">
				<Link
					href="/self"
					className="rounded-xl border border-slate-200 bg-slate-100 py-4 px-2 transition-all duration-200 hover:shadow-lg hover:shadow-slate-300 sm:py-6 sm:px-4"
				>
					<div className="flex items-center">
						<div className="mr-4 ml-2">
							<TfiThought size="25" />
						</div>
						<div>
							<h1 className="text-lg font-semibold">Self</h1>
							<p className="text-sm font-light">
								Mindset, productivity, reflection
							</p>
						</div>
					</div>
				</Link>
				<Link
					href="/art"
					className="rounded-xl border border-slate-200 bg-slate-100 py-4 px-2 transition-all duration-200 hover:shadow-lg hover:shadow-slate-300 sm:py-6 sm:px-4"
				>
					<div className="flex items-center">
						<div className="mr-4 ml-2">
							<TfiPalette size="25" />
						</div>
						<div>
							<h1 className="text-lg font-semibold">Art</h1>
							<p className="text-sm font-light">
								Anything art related I like
							</p>
						</div>
					</div>
				</Link>
				<Link
					href="/books"
					className="rounded-xl border border-slate-200 bg-slate-100 py-4 px-2 transition-all duration-200 hover:shadow-lg hover:shadow-slate-300 sm:py-6 sm:px-4"
				>
					<div className="flex items-center">
						<div className="mr-4 ml-2">
							<TfiBookmarkAlt size="25" />
						</div>
						<div>
							<h1 className="text-lg font-semibold">Books</h1>
							<p className="text-sm font-light">
								Book shelf, ratings, reviews
							</p>
						</div>
					</div>
				</Link>
				<Link
					href="/tech"
					className="rounded-xl border border-slate-200 bg-slate-100 py-4 px-2 transition-all duration-200 hover:shadow-lg hover:shadow-slate-300 sm:py-6 sm:px-4"
				>
					<div className="flex items-center">
						<div className="mr-4 ml-2">
							<TfiDesktop size="25" />
						</div>
						<div>
							<h1 className="text-lg font-semibold">Tech</h1>
							<p className="text-sm font-light">Tech I use, new tech</p>
						</div>
					</div>
				</Link>
			</div>
			{/* <div className="flex w-[100%]">
				<input
					type="email"
					className="mx-auto w-[100%] rounded-l-lg bg-slate-100 py-4 px-4 font-sans outline-none placeholder:font-light"
					placeholder="Get an email whenever I post!"
				/>
				<button className="text-light w-[25%] rounded-r-lg bg-primary font-sans text-white">
					Sign up!
				</button>
			</div> */}
		</div>
	);
}
