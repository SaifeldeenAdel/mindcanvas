import Card from "../components/Card/Card";
import { monsters, voyage, waves, pillars, sunset} from "../utils/imgImports";

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
				<h2 className="w-[100%] text-base font-light sm:text-lg">Michelangelo</h2>
			</header>

			<div className="mx-6 mb-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
				<Card
					section="art"
					page="beksinski"
					title="Who is Zdzisław Beksiński?"
					date="27 April, 2023"
					img={pillars}
				/>
				<Card
					section="art"
					title="The Voyage of Life"
					page="voyage"
					date="20 June, 2023"
					img={voyage}
				/>

				<Card
					section="art"
					title="Water in Monet's Art"
					page="water-monet"
					date="2 July, 2023"
					img={sunset}
				/>
			</div>
		</div>
	);
}
