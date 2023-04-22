export const metadata = {
	title: "• Books",
};

export default function ({ children }) {
	return (
		<div className="flex flex-col items-center justify-center pt-[7rem]">
			<header className="mx-4 mb-10 flex flex-col items-center justify-center gap-3 px-6 text-center font-serif sm:p-0">
				<h1 className="text-[1.2rem] font-medium italic leading-snug  sm:text-[1.6rem]">
					"A reader lives a thousand lives before he dies. The man who never
					reads lives only one"
				</h1>
				<h2 className="w-[100%] text-base font-light sm:text-lg">
					George R.R Martin
				</h2>
			</header>

			<div className="mx-6 mb-12 grid grid-cols-1 gap-8 sm:m-0 sm:grid-cols-2 md:mx-6">
				<div>hi</div>
				<div>hi</div>
			</div>
		</div>
	);
}
