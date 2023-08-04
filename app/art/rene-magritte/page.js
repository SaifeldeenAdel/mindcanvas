import {
	banquet,
	empireoflight,
	falsemirror,
	golconda,
	golconda2,
	horse,
	invention,
	mirror,
	pipe,
	sonofman,
} from "@/app/utils/imgImports";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

import { CiCalendar } from "react-icons/ci";

export const metadata = {
	title: "• He made ordinary objects surreal",
};

export default function () {
	return (
		<article className="mx-auto flex max-w-[60rem] flex-col px-4 pt-[7rem] pb-[5rem]">
			<header className="mx-6 text-left sm:mx-10">
				<div className="flex">
					<CiCalendar size="20" className="mr-2" />
					<small className="font-sans text-[0.8rem] font-light sm:text-[1rem]">
						3 August, 2023
					</small>
				</div>
				<h1 className="font-sans text-[1.8rem] font-bold tracking-[0.02rem] sm:text-[2rem] md:text-[2.8rem]">
					He made ordinary objects surreal
				</h1>
			</header>
			<Image
				alt="Golconda"
				src={golconda2}
				placeholder="blur"
				className="my-8 h-[8rem] w-[100%] rounded-lg object-cover sm:h-[10rem]"
			/>
			<div className="mx-4 font-nunito sm:mx-10">
				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					His name is Rene Magritte
				</h2>
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Rene Magritte, one of the most famous surrealism artists has caught my
					attention recently. Surrealists at the time liked to portray abnormal
					beings or objects in unusual environments. Magritte, however,
					challenged our senses by portraying very ordinary objects in strange
					ways, making us reimagine our perception of the world around us.
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					I'll be showcasing some of his work I enjoyed and attempt to provide
					some interpretation. Starting off with the piece that inspired me to
					write this post and one that does not seem very strange....atleast at
					face value.
				</p>
				<br />
				<br />

				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					1. The Treachary Of Images, 1929
				</h2>

				<div className="flex justify-center">
					<Image
						alt="The Treachary Of Images"
						className="rounded-xl duration-200 hover:scale-[1.01]"
						placeholder="blur"
						src={pipe}
					/>
				</div>
				<br />
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					This piece plays with our gap between language and meaning. The
					difference between representation and reality. Looking at this, your
					first thought undoubtedly was "that's a pipe". You then glance down
					and read the statement:
				</p>
				<br />

				<p className="text-center text-[1.2rem] font-bold sm:text-[1.3rem]">
					Ceci n'est pas une pipe.
				</p>
				<p className="text-center text-[1.2rem] font-bold sm:text-[1.3rem]">
					This is not a pipe.
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					You face a contradiction. Looking back at it you think "ok, its not a
					pipe, its an image of a pipe". Precisely. It is merely a
					representation of a pipe using oil painting over a canvas. You might
					think this is silly which I found to be a common thought with
					Magritte's work however this quickly changes once you give it a little
					more thought.
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					This painting challenges the direct chain of thought we have between
					words and images. He encourages us to do some alternative thinking.
					Obviously no one thinks it is an actual pipe however the way our
					brains jump to the abstract object in the image (pipe) and not the
					concrete (painting) is pretty interesting.
				</p>
				<br />

				<br />

				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					2. Not to be reproduced, 1937
				</h2>

				<div className="flex justify-center">
					<Image
						alt="TheMirror"
						className="rounded-xl duration-200 hover:scale-[1.01]"
						placeholder="blur"
						src={mirror}
					/>
				</div>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Here we see a man clearly standing infront of a mirror. What we expect
					is to see the man's reflection facing towards the observer but that
					doesn't happen. We are left with the reflection (or more of a
					reproduction) of his back and this wonder. What does the man look
					like? What kind of mirror is this? Magritte always tried to evoke the
					viewer's feelings, getting them to desire something they cannot have
					by concealing certain areas of the subject (we will see more of this).
				</p>

				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Perhaps what makes it more bizarre is the seemingly correct reflection
					of the book and the lighting on the shelf. I think this reinstates the
					intention to conceal the front of the man and to further confuse us.
				</p>

				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Given that this was a portrait for an Edward James, some say Magritte
					painted Edward from Magritte's perspective and then painted Edward
					looking at Magritte's painting of him thus the replication.
				</p>

				<br />
				<br />

				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					3. The Empire of Lights, 1940-1960
				</h2>

				<div className="flex justify-center">
					<Image
						alt="TheMirror"
						className="rounded-xl duration-200 hover:scale-[1.01]"
						placeholder="blur"
						src={empireoflight}
					/>
				</div>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					The Empire of Lights was a series of paintings all of a similar scene.
					At the bottom you find a street lamp illuminating a dark street at
					night with most windows closed off assuming people are going to sleep.
					However, at the top you're met with a bright blue afternoon sky and
					thats what makes it surreal.
				</p>

				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Those two scenes on their own would've made for pretty mundane
					paintings but the combination of the two is what makes this painting
					so unsettling and thought provoking. This is what Magritte had to say
					about it:
				</p>
				<br />

				<p className="px-8 text-justify text-[1rem] font-medium sm:text-[1.2rem]">
					"What is represented in a picture is what is visible to the eye, it is
					the thing or the things that had to be thought of. Thus. what is
					represented in the picture are the things I thought of, to be precise,
					a nocturnal landscape and a skyscape such as can be seen in broad
					daylight. The landscape suggests night and the skyscape day. This
					evocation of night and day seems to me to have the power to surprise
					and delight us. I call this power: poetry. "
				</p>
				<br />
				<br />

				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					4. The Son of Man
				</h2>

				<div className="flex justify-center">
					<Image
						alt="SonOfMan"
						width={580}
						className="rounded-xl duration-200 hover:scale-[1.01]"
						placeholder="blur"
						src={sonofman}
					/>
				</div>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					This might be Magritte's most famous and recognizable painting. Said
					to be a self portrait, you see a man standing dressed in formal attire
					with a bowler hat. But just like any Magritte painting, there is
					something very strange you notice right away. The apple. The man's
					face is hidden by a floating apple.
				</p>
				<br />

				<p className="px-8 text-justify text-[1rem] font-medium sm:text-[1.2rem]">
					“Everything we see hides another thing, we always want to see what is
					hidden by what we see, but it is impossible. Humans hide their secrets
					too well… There is an interest in that which is hidden and which the
					visible does not show us. This interest can take the form of a quite
					intense feeling, a sort of conflict, one might say, between the
					visible that is hidden and the visible that is present.”
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					As we saw earlier, Magritte enjoys to play with the idea of us wanting
					to see what is hidden. He calls it the conflict between the{" "}
					<b>visible that is hidden and the visible that is present.</b>{" "}
					Something that isn't invisible as it needs to be visible for us to
					care about it but it's not completely visible either. The man's face
					is the visible that is hidden and that's what creates the desire. But,
					more interestingly, what's behind the apple? Is it a face? It is not a
					face. Just like <b>this is not a pipe. This is not a face.</b> It is
					not even a painting of a face, it is blank canvas. The face isn't
					hidden, there is no face at all and yet our brain still believes
					there's something hidden.
				</p>
				<br />
				<br />

				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					5. False Mirror, 1929
				</h2>

				<div className="flex justify-center">
					<Image
						alt="FalseMirror"
						width={580}
						className="rounded-xl duration-200 hover:scale-[1.01]"
						placeholder="blur"
						src={falsemirror}
					/>
				</div>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					What does it feel like to be the observer and the observed? We see an
					iris with the reflection of a blue sky filled with clouds. Is the eye
					looking at us or at the sky? Is the eye even looking at anything or is
					the sky seen through an opening in the iris?
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Some talk about the contrast between the dead black of the pupil and
					the colourful sky in the iris and how that could describe how a
					prisoner of war might look at a day where he's set free (the painting
					was completed during the first World War).
				</p>
				<br />
				<br />

				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					6. Collective Invention, 1934
				</h2>

				<div className="flex justify-center">
					<Image
						alt="CollectiveInvention"
						width={580}
						className="rounded-xl duration-200 hover:scale-[1.01]"
						placeholder="blur"
						src={invention}
					/>
				</div>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					If I tell you to imagine a painting of a mermaid sitting at shore.
					Would it be strange at all? I don't think so. Now what if we reverse
					the halves that form a mermaid, why does this make it so strange?
					Magritte took this idea and created Collective Invention. Another
					instance of taking something very familiar and making them very
					serene.
				</p>
				<br />
				<br />

				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					Conclusion
				</h2>

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Magritte has so many {" "}
					<Link
						href="https://www.artnet.com/artists/zdzislaw-beksinski/?type=paintings"
						target="_blank"
						className="font-semibold underline underline-offset-4"
					>
						other works
					</Link>
					, all extremely thought-provoking and equally as strange. I'll leave
					you with a quote.
				</p>
				<br />

				<p className="px-8 text-justify text-[1rem] font-medium sm:text-[1.2rem]">
					“My painting is visible images which conceal nothing....they evoke
					mystery and indeed when one sees one of my pictures, one asks oneself
					this simple question 'What does that mean'? It does not mean anything,
					because mystery means nothing either, it is unknowable.” <br /> - Rene
					Magritte
				</p>
				<br />

				<br />
				<Link
					href="../art"
					className="flex w-[7rem] items-center gap-1 rounded-2xl bg-slate-100 p-2 text-[1rem] font-semibold duration-200 hover:bg-slate-200 sm:w-[8.5rem] sm:text-[1.2rem]"
				>
					<BsArrowLeftShort className="text-[1.5rem] sm:text-[1.7rem]" />
					<span>Go back</span>
				</Link>
			</div>
		</article>
	);
}
