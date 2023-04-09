import Card from "../components/Card/Card";

export default function () {
	return (
		<div className="content-container ">
			<h1 className="mb-2 px-4 text-center font-serif text-[1.2rem] font-medium italic leading-snug  sm:text-[1.6rem]">
				"The happiness of your life depends upon the quality of your thoughts."
			</h1>
			<h2 className="font-serif text-lg font-light">Marcus Aurelius</h2>

			<div className="mx-8 mt-12 mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
				<Card
					page="reflect"
					title="How do you self reflect?"
					date="15 March, 2023"
					img="reflect"
				/>
				<Card
					page="productive"
					title="Everyone wants to be productive"
					date="13 March, 2023"
					img="desk"
				/>
				{/* <Card title="The Mind of Zdzisław Beksiński" date="19 March, 2023" img="beksinski"/> */}
			</div>
		</div>
	);
}
