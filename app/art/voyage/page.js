import Image from "next/image";
import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import manhood from "../../../public/manhood.jpg";
import youth from "../../../public/youth.jpg";
import childhood from "../../../public/childhood.jpg";
import oldage from "../../../public/oldage.jpg";

export const metadata = {
	title: "• The Voyage of Life",
};

export default function () {
	return (
		<article className="mx-auto flex max-w-[60rem] flex-col px-4 pt-[7rem] pb-[5rem]">
			<header className="mx-6 text-left sm:mx-10">
				<div className="flex">
					<CiCalendar size="20" className="mr-2" />
					<small className="font-sans text-[0.8rem] font-light sm:text-[1rem]">
						20 June, 2023
					</small>
				</div>
				<h1 className="font-sans text-[1.8rem] font-bold tracking-[0.02rem] sm:text-[2rem] md:text-[2.8rem]">
					The Voyage of Life
				</h1>
			</header>
			<Image
				alt="Graves"
				src={manhood}
				placeholder="blur"
				className="my-8 h-[8rem] max-w-[100%] rounded-lg object-cover sm:h-[10rem]"
			/>
			<div className="mx-4 font-nunito sm:mx-10">
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Isn't life just a trip, or a voyage you could say.
				</p>

				<br />
				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					Overview
				</h2>
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Four stages of life; Childhood, Youth, Manhood and Old Age. Four
					paintings. Thomas Cole, an American artist, produced this series of
					paintings in 1840. In all four paintings, we follow a voyager on a
					boat travelling alongside an angel. Each painting has its own
					landscape setting containing unique elements that perfectly encompass
					its respective stage of life.
				</p>
				<br />
				<br />

				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					1. Childhood
				</h2>

				<div className="flex justify-center">
					<Image
						className="rounded-xl duration-200 hover:scale-[1.01]"
						placeholder="blur"
						src={childhood}
					/>
				</div>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Starting off with Childhood, we get the first sight of the voyager and
					the angel together on the boat. The cave depicting birth with the
					angel being the one in control of the boat given the helplessness of a
					child after birth. The water is still with a peaceful sunset over the
					horizon, all relating to the innocence of childhood.
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Another cool detail is in the front of the boat. There's a little
					hourglass in which no sand has fallen through yet as he is still
					starting off his voyage. We'll observe this hourglass in the next
					paintings and the condition of the boat itself.
				</p>
				<br />

				<br />

				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					2. Youth
				</h2>

				<div className="flex justify-center">
					<Image
						className="rounded-xl duration-200 hover:scale-[1.01]"
						placeholder="blur"
						src={youth}
					/>
				</div>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Now coming to Youth, we see the angel still, however, he's no longer
					on the boat but also not far away, maybe guiding the voyager when he
					needs help who is now in control of the boat, in control of where his
					life is headed.
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Unlike Childhood, we now see the river and landscape in full view and
					its vastness of it all I think shows how much is ahead of the voyager,
					a life of endless possibilities. As well as the voyager's expression,
					full of ambition and enthusiasm for what's to come.
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					The water is still calm as he still has not experienced any
					responsibilities or dangers yet. The hourglass beginning to fill up as
					time passes however not by much as we are still in the beginning of
					life.
				</p>
				<br />

				<br />

				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					3. Manhood
				</h2>

				<div className="flex justify-center">
					<Image
						className="rounded-xl duration-200 hover:scale-[1.01]"
						placeholder="blur"
						src={manhood}
					/>
				</div>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Coming to my favourite one, Manhood. There is so much going on in this one. The angel is now up above in the skies, no longer nearby, just observing over the voyager. The river is full of rocks and waves crashing creating an extremely difficult  pathway depicting the challenges and stresses of going through Manhood. 
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					The voyager's expression now is not one of ambition, but of pleading. Seems he has turned to prayer, feeling helpless in front of what lies ahead as he has no other option but to go through the rough waves. However we can see there's calm water again up ahead alluding to life returning to its calm state when going out of manhood and into old age.
				</p>
				<br />
				<br />

        <h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					4. Old Age
				</h2>

				<div className="flex justify-center">
					<Image
						className="rounded-xl duration-200 hover:scale-[1.01]"
						placeholder="blur"
						src={oldage}
					/>
				</div>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					End of the road. Calm waters, the angel goes back to the voyager's side. The voyager almost ready to be taken away now. There's not much going on in this one and its fitting. Observe the boat's condition. Completely worn out, broken down probably by the rocky terrain he went into in manhood. 
        </p>
				<br />
				<br />

        <h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					Conclusion
				</h2>

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Such a cool concept and it's one of the first painting series I've seen. The details, the colors, the story, so good. I didn't know about Thomas Cole until I stumbled upon The Voyage of Life but after checking out his work, I discovered that he's got more painting series so I'm excited to dive into them as well.
        </p>
				<br />

        <p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Didn't mention this but fun fact, each painting above is based on one of the four seasons. Can you guess which one's which?
        </p>
				<br />
				<br />

				<Link
					href="../art"
					className="text-[1rem] font-semibold sm:text-[1.2rem]"
				>
					{"-"} Go back
				</Link>
			</div>
		</article>
	);
}
