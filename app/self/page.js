
import Card from "../components/Card/Card";
import reflect from "../../public/reflect.jpg";
import desk from "../../public/desk.jpg";

export const metadata = {
	title: "• Self",
};

export default function () {
	return (
		<div className="flex flex-col items-center justify-center pt-[7rem]">
			<header className="mx-4 mb-10 flex flex-col items-center justify-center gap-3 text-center font-serif sm:p-0">
				<h1 className="text-[1.2rem] font-medium italic leading-snug sm:text-[1.6rem]">
					"The happiness of your life depends upon the quality of your
					thoughts."
				</h1>
				<h2 className="w-[100%] text-base font-light sm:text-lg">
					Marcus Aurelius
				</h2>
			</header>

			<div className="mx-6 mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
				<Card
					section="self"
					page="reflect"
					title="How do you self reflect?"
					date="15 March, 2023"
					img={reflect}
				/>
				<Card
					section="self"
					page="productive"
					title="Everyone wants to be productive"
					date="21 April, 2023"
					img={desk}
				/>
			</div>
		</div>
	);
}
