import Image from "next/image";
import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import graves from "../../../public/graves.jpg";
import portrait from "../../../public/portrait.jpeg";
import portrait2 from "../../../public/portrait2.jpg";
import monsters from "../../../public/monsters.jpg";
import bones from "../../../public/bones.jpg";
import soldier from "../../../public/soldier.jpg";
import person from "../../../public/person.jpg";
import beksinski from "../../../public/beksinski.jpg";
import pillars from "../../../public/pillars.jpg";
import fuse from "../../../public/fuse.jpg";
import face from "../../../public/face.jpg";
import bones2 from "../../../public/bones2.jpg";

export const metadata = {
	title: "• Who is Zdzisław Beksiński?",
};

export default function () {
	return (
		<article className="mx-auto flex max-w-[60rem] flex-col px-4 pt-[7rem] pb-[5rem]">
			<header className="mx-6 text-left sm:mx-10">
				<div className="flex">
					<CiCalendar size="20" className="mr-2" />
					<small className="font-sans text-[0.8rem] font-light sm:text-[1rem]">
						27 April, 2023
					</small>
				</div>
				<h1 className="font-sans text-[1.8rem] font-bold tracking-[0.02rem] sm:text-[2rem] md:text-[2.8rem]">
					Who is Zdzisław Beksiński?
				</h1>
			</header>
			<Image
				alt="Graves"
				src={graves}
        placeholder="blur"
				className="my-8 h-[8rem] max-w-[100%] rounded-lg object-cover sm:h-[10rem]"
			/>
			<div className="mx-4 font-nunito sm:mx-10">
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					One of the most unique artists I've come across, you're in for a ride.
				</p>

				<br />
				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					Background
				</h2>
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Zdzisław Beksiński is a polish painter who has made a great impact on
					surrealism and dark dystopian art. He was also interested in
					photography in the beginning of his career however he turned to
					painting due to photography's limitations and I dont blame him.
					Someone with as vivid of an imagination as him would only be satisfied
					with painting his visions from scratch.
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					His paintings and art in general can be divided into several periods
					and genres, the paintings you'll find here are all from his so-called
					"fantastic" series in the late 1960s which consisted of very detailed,
					nightmarish surrealistic environments usually containing death and
					decay.
				</p>
				<br />
				<br />

				<div className="flex flex-row justify-center gap-3 md:gap-8">
					<Image
            alt="portrait"
						className="w-[60%] rounded-[1rem] object-cover transition-all duration-[200ms] ease-linear "
						src={portrait}
						placeholder="blur"
					/>
					<Image
            alt="portrait2"
						className="w-[40%] rounded-[1rem] object-cover transition-all duration-[200ms] ease-linear "
						src={portrait2}
						placeholder="blur"
					/>
				</div>
				<br />

				<br />

				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					The art
				</h2>

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Creepy, disturbing, surreal, ominous are all adjectives that could be
					used to describe Beksiński's art but no adjective actually does it
					justice. "I wish to paint in such a manner as if I were photographing
					dreams" is the way he likes to put it. I would not want to have dreams
					that look like this.
				</p>

				<br />

				<div className="grid grid-cols-1 justify-center gap-3 md:grid-cols-2 md:gap-6">
					<Image
            alt="person"
						className="rounded-[1rem] object-cover transition-all duration-[200ms] ease-linear hover:scale-[1.02] "
						src={person}
            placeholder="blur"
					/>
					<Image
            alt="monsters"
						className="rounded-[1rem] object-cover transition-all duration-[200ms] ease-linear hover:scale-[1.02] "
						src={monsters}
            placeholder="blur"

					/>

					<Image
            alt="graves"
						className="rounded-[1rem] object-cover transition-all duration-[200ms] ease-linear hover:scale-[1.02] "
						src={graves}
            placeholder="blur"

					/>
					<Image
            alt="bones"
						className="rounded-[1rem] object-cover transition-all duration-[200ms] ease-linear hover:scale-[1.02] "
						src={bones}
            placeholder="blur"

					/>
				</div>

				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Artworks depicting bones, skeletons, and bodies are sometimes
					attributed to his life having survived and witnessed the tragedies of
					World War 2 however he himself claimed that even he did not know the
					meaning of his artworks and was uninterested in possible
					interpretations. Which brings us to another interesting point.
				</p>
				<br />

				<h3 className="pb-4 font-sans text-[1.1rem] font-semibold sm:text-[1.3rem]">
					None of his paintings are titled.
				</h3>

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Beksiński believed that his art should be looked at, not explained. To
					the extent that he saw no point in providing a title for any piece he
					paints.
				</p>
				<br />

				<p className="px-8 text-justify text-[1rem] font-medium sm:text-[1.2rem]">
					"Interpretation is imposed by others. Paintings are to be admired or
					contemplated. Admired without asking what it means. If I had something
					to say I would write it down or say it. I don't need painting for
					that"
				</p>

				<br />
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					And for someone like me who struggles with describing and explaining
					why I like certain art when I look at it, I can't help but appreciate
					his views regarding this matter. Art is to be viewed and felt, it
					doesn't always have to involve symbolism, deeper meanings, etc.
				</p>

				<br />

				<div className="grid grid-cols-1 justify-center gap-3 md:grid-cols-2 md:gap-6">
					<Image
            alt="soldier"
						className="rounded-[1rem] object-cover transition-all duration-[200ms] ease-linear hover:scale-[1.02] "
						src={soldier}
            placeholder="blur"

					/>
					<Image
            alt="beksinski"
						className="rounded-[1rem] object-cover transition-all duration-[200ms] ease-linear hover:scale-[1.02] "
						src={beksinski}
            placeholder="blur"
					/>
				</div>

				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					But in an effort to impose my own interpretation, I will say this;
					Beksiński's art is raw. It was not sugar coated for what people wanted
					to see at the time. It is what he wanted to paint and it is
					beautifully dark and twisted.
				</p>

				<br />

				<h3 className="pb-4 font-sans text-[1.1rem] font-semibold sm:text-[1.3rem]">
					Color
				</h3>

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					As you may have noticed, his use of vibrant color is pretty much non
					existent and he enjoys his toned down earthy colors.
				</p>

				<br />

				<p className="px-8 text-justify text-[1rem] font-medium sm:text-[1.2rem]">
					"Less intense earthy semitones result in greater number of colours
					because each of those dirty colors contains a whole range of other
					pure colors mixed together. So I feel that a painting is richer when
					the color is presented in a not so intrusive nor obvious way."
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Learning more about why artists used certain palettes is super
					interesting. Makes me realize certain things that I never would've
					noticed before and Beksiński's is a great example of that. A piece you
					might think is dull at first glance turns into this rich, detailed
					masterpiece the more you look at it.
				</p>

				<br />

				<div className="grid grid-cols-1 justify-center gap-3 md:grid-cols-2 md:gap-6">
					<Image
            alt="pillars"
						className="rounded-[1rem] object-cover transition-all duration-[200ms] ease-linear hover:scale-[1.02] "
						src={pillars}
            placeholder="blur"

					/>
					<Image
            alt="fuse"
						className="rounded-[1rem] object-cover transition-all duration-[200ms] ease-linear hover:scale-[1.02] "
						src={fuse}
            placeholder="blur"
					/>

					<Image
            alt="face"
						className="rounded-[1rem] object-cover transition-all duration-[200ms] ease-linear hover:scale-[1.02] "
						src={face}
            placeholder="blur"
					/>
					<Image
            alt="bones2"
						className="rounded-[1rem] object-cover transition-all duration-[200ms] ease-linear hover:scale-[1.02] "
						src={bones2}
            placeholder="blur"

					/>
				</div>

				<br />
				<br />

				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					Conclusion
				</h2>

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Excited to find out more about all of the other unique surrealism
					artists out there but Zdzisław Beksiński was definitely one of the
					best ones to get introduced to. You can check out more of this work{" "}
					<Link
						href="https://www.artnet.com/artists/zdzislaw-beksinski/?type=paintings"
						target="_blank"
						className="font-semibold"
					>
						here
					</Link>
					.
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
