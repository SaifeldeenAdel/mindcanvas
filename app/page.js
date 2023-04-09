import Link from "next/link";

export default function Home() {
	return (
		<div className="flex h-screen items-center justify-center overflow-hidden">
			<div className="mb-16">
				<h1 className="font-montserrat font-thin text-primary sm:text-[2.5em] xl:text-[3em] ">
					Welcome to my "Blog"
				</h1>
				<h2 className="mb-16 mt-2 text-center font-montserrat font-medium text-primary sm:text-sm xl:text-[1em]">
					I talk about things I find interesting
				</h2>
				<div className="flex w-[100%]">
					<input
						type="email"
						className="mx-auto w-[100%] rounded-l-lg bg-slate-100 py-4 px-4 font-sans outline-none placeholder:font-light"
						placeholder="Get an email whenever I post!"
					/>
					<button className="text-light w-[25%] rounded-r-lg bg-primary font-sans text-white">
						Sign up!
					</button>
				</div>
			</div>
		</div>
	);
}
