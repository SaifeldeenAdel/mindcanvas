import Image from "next/image";
import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import { BsArrowLeftShort } from "react-icons/bs";
import social from "../../../public/social.jpg";

export const metadata = {
	title: "• I spent 30 days with no social media.",
};

export default function () {
	return (
		<article className="mx-auto flex max-w-[60rem] flex-col px-4 pt-[7rem] pb-[5rem] ">
			<header className="mx-4 text-left sm:mx-10">
				<div className="flex">
					<CiCalendar size="20" className="mr-2" />
					<small className="font-sans text-[0.8rem] font-light sm:text-[1rem]">
						2 December, 2023
					</small>
				</div>
				<h1 className="font-sans text-[1.8rem] font-bold tracking-[0.02rem] sm:text-[2rem] md:text-[3rem]">
					I spent 30 days with no social media.
				</h1>
			</header>
			<Image
				alt="journal"
				src={social}
				placeholder="blur"
				className="my-8 h-[8rem] max-w-[100%] rounded-lg object-cover sm:h-[10rem]"
			/>
			<div className="mx-4 font-nunito sm:mx-10">
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					I uninstalled every social media app off my phone for 30 days and this
					is what happened.
				</p>
				<br />
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					The effect of social media and short form content specifically on so
					many aspects of my life has been grand, from things as big as my
					overall productivity to little things like choosing my form of
					entertainment when I'm taking a break. It's always been at the back of
					my mind how detrimental it is to me and a fuel to my procrastination
					but I never did something about it. So now I have. Honestly, I thought
					I'd be miserable and not actually be more productive however this
					would turn out to just be me lying to myself and I'll quickly realize
					that it's quite the opposite.{" "}
				</p>
				<br />
				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					Week 1
				</h2>

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					The first 7 days went by smoother than I expected. I began to notice
					how many times I reached for my phone during the day. I'd pick it up
					to get away from working, realize there's no short form entertainment
					to be had from it, and swiftly put it down and continue working. I was
					on a roll.{" "}
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Only having access to books and long form content made sure that even
					when I'm taking a break, I wouldn't be caught in the cycle of
					meaningless content melting away my attention span. So, I spent the
					first week reading a lot more however no noticeable change in the
					attention I usually have for reading. This will change in the coming
					weeks, though.{" "}
				</p>
				<br />
				<br />

				<h2 className="pb-4 font-sans text-[1.2rem] font-semibold sm:text-[1.5rem]">
					Week 2
				</h2>
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Beginning week 2 I was still doing great, didn't really care about
					what I'm missing out because realistically, it wasn't much. I also
					thought I'd take this challenge as an opportunity to work on new
					habits as well, which was successful and gave me something that will
					stay with me even after the challenge. This was crucial as I didn't
					want to forget this ever happened and go back to being who I was.
				</p>
				<br />
				<br />

				<h3 className="py-2 font-sans text-[1.1rem] font-semibold sm:text-[1.3rem]">
					Week 3
				</h3>
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					This was when I started to feel a little bit of FOMO. I just never
					went off everything for this long before and I felt like I needed to
					know what's going on. And given that I haven't talked to some of my
					friends in a while, it was getting hard.
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					However that only lasted for a day or two when I really thought about
					it and realized that I really wasn't missing much. And I was actually
					happy that I had these feelings and fought them off which meant my
					mindset was changing.
				</p>
				<br />

				<h3 className="py-2 font-sans text-[1.1rem] font-semibold sm:text-[1.3rem]">
					Week 4
				</h3>
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Not much to say for Week 4, I had a lot of stuff keeping me busy
					already so I never really felt the need to check social media in the
					first place. I was starting to read a lot more on average everyday
					which I enjoyed. However I never really know whether to attribute this
					consistency in reading to how good I'm finding the book I'm currently
					reading or to a growth in attention. Waiting to land on some mediocre
					books to test out this dilemma.
				</p>

				<br />
				<br />

				<h3 className="py-2 font-sans text-[1.1rem] font-semibold sm:text-[1.3rem]">
					Conclusion
				</h3>
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					This was super fun and I recommend anyone do it. The harder you think
					it is, the stronger the reason is for you to actually do it. I hope to
					keep my social media usage to an absolute minimum now given its so
					much easier to control it coming out of this challenge as opposed to
					before. So I'll make sure I keep it that way.
				</p>

				<br />
				<br />
				<Link
					href="../self"
					className="flex w-[7rem] items-center gap-1 rounded-2xl bg-slate-100 p-2 text-[1rem] font-semibold duration-200 hover:bg-slate-200 sm:w-[8.5rem] sm:text-[1.2rem]"
				>
					<BsArrowLeftShort className="text-[1.5rem] sm:text-[1.7rem]" />
					<span>Go back</span>
				</Link>
			</div>
		</article>
	);
}
