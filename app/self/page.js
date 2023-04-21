import Card from "../components/Card/Card";
export const metadata = {
	title: "• Self",
};

export default function () {
	return (
		<div className="mt-[8rem] flex flex-col items-center justify-center">
			<header className="mb-10 flex flex-col items-center justify-center gap-3 px-2 font-serif sm:p-0">
				<h1 className="text-center text-[1.2rem] font-medium italic leading-snug  sm:text-[1.6rem]">
					"The happiness of your life depends upon the quality of your
					thoughts."
				</h1>
				<h2 className="text-base font-light sm:text-lg">Marcus Aurelius</h2>
			</header>

			<div className="mx-6 mb-12 grid grid-cols-1 gap-8 sm:m-0 sm:grid-cols-2 md:mx-6 lg:grid-cols-2">
				<Card
					page="reflect"
					title="How do you self reflect?"
					date="15 March, 2023"
					img="reflect"
				/>
				<Card
					page="productive"
					title="Everyone wants to be productive"
					date="21 April, 2023"
					img="desk"
				/>
			</div>
		</div>
	);
}
