import Card from "../components/Card/Card";

export const metadata = {
	title: "Tech",
};

export default function () {
	return (
		<div className="mt-[8rem] flex flex-col items-center justify-center">
			<h1 className="mb-2 px-4 text-center font-serif text-[1.2rem] font-medium italic leading-snug  sm:text-[1.6rem]">
				Book reviews
			</h1>
			<h2 className="font-serif text-lg font-light">Books</h2>

			<div className="mx-8 mt-12 mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2"></div>
		</div>
	);
}
