import Image from "next/image";
import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import {
	manhood,
	youth,
	childhood,
	oldage,
	waves,
	antibes,
	sunset,
	ship,
	harbour,
	waves2,
  cliff
} from "../../utils/imgImports";

export const metadata = {
	title: "• Water in Monet's Art",
};

export default function () {
	return (
		<article className="mx-auto flex max-w-[60rem] flex-col px-4 pt-[7rem] pb-[5rem]">
			<header className="mx-6 text-left sm:mx-10">
				<div className="flex">
					<CiCalendar size="20" className="mr-2" />
					<small className="font-sans text-[0.8rem] font-light sm:text-[1rem]">
						2 July, 2023
					</small>
				</div>
				<h1 className="font-sans text-[1.8rem] font-bold tracking-[0.02rem] sm:text-[2rem] md:text-[2.8rem]">
					Water in Monet's Art
				</h1>
			</header>
			<Image
				alt="Stormy Sea"
				src={sunset}
				placeholder="blur"
				className="my-8 h-[8rem] max-w-[100%] rounded-lg object-cover sm:h-[10rem]"
			/>
			<div className="mx-4 font-nunito sm:mx-10">
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					"These landscapes of water and reflection have become an obsession." -
					Monet
				</p>

				<br />
				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					Introduction
				</h2>
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					If you've heard of Claude Monet, you've probably seen paintings of his
					infamous water lillies. They are not the main focus of this post as
					countless people already talked about them and I wouldn't be doing it
					enough justice. This post, however, is about Monet's love for water
					more generally. And moreso, my love for Monet's work involving water.
				</p>
				<br />
				<br />

				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					Water, what's so special
				</h2>

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Recently, I was going through Monet's pieces and the ones that kept
					catching my eye were ones that involved bodies of water, his
					seascapes. They are calm, vibrant, and extremely intricate. It is genuinely fascinating how he makes colors work together in this way. I also quite enjoy the visible brush strokes on some of these, they create some sort of texture that works really well with water.
				</p>
				<br />

        <p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Monet was one of the first artists in the impressionist movement. Impressionism, in short, being the art form that involves capturing colorful moments, usually outdoors, with no specific subject in mind. Water is perfect for that. Take something that is always in motion and paint what it looks like in a single moment, deciding on reflections and shades that are infinitely unique. 
				</p>
				<br />
				<br />

				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					Gallery
				</h2>

				<div className="grid grid-cols-1 items-center justify-center gap-3 md:grid-cols-2 md:gap-4">
					<Image
						alt=""
						className="rounded-xl duration-200 hover:scale-[1.01]"
						placeholder="blur"
						src={sunset}
					/>

					<Image
						alt=""
						className="rounded-xl duration-200 hover:scale-[1.01]"
						placeholder="blur"
						src={waves2}
					/>

					<Image
						alt=""
						className="rounded-xl duration-200 hover:scale-[1.01]"
						placeholder="blur"
						src={ship}
					/>

					<Image
						alt=""
						className="rounded-xl duration-200 hover:scale-[1.01]"
						placeholder="blur"
						src={harbour}
					/>

					<Image
						alt=""
						className="rounded-xl duration-200 hover:scale-[1.01]"
						placeholder="blur"
						src={antibes}
					/>

					<Image
						alt=""
						className="rounded-xl duration-200 hover:scale-[1.01]"
						placeholder="blur"
						src={cliff}
					/>
				</div>
				<br />
        <br />

        <h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					Conclusion
				</h2>

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Starting off with Childhood, we get the first sight of the voyager and
					the angel together on the boat. The cave depicting birth with the
					angel being the one in control of the boat given the helplessness of a
					child after birth. The water is still with a peaceful sunset over the
					horizon, all relating to the innocence of childhood.
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
