import Card from "../components/Card/Card";

export const metadata = {
	title: "• Art",
};

export default function () {
	return (
		<div className="flex flex-col items-center justify-center pt-[7rem]">
			<header className="mx-4 mb-10 flex flex-col items-center justify-center gap-3 text-center font-serif">
				<h1 className="text-[1.2rem] font-medium italic leading-snug  sm:text-[1.6rem]">
					“I saw the angel in the marble and carved until I set him free”
				</h1>
				<h2 className="text-base font-light sm:text-lg">Michelangelo</h2>
			</header>

			<div className="mx-6 mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
				<Card
					title="Who is Zdzisław Beksiński?"
					date="19 March, 2023"
					img="beksinski"
				/>
				<Card
					title="The Gift of Claude Monet"
					date="19 March, 2023"
					img="monet"
				/>
			</div>
		</div>
	);
}
