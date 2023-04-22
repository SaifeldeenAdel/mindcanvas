import Link from "next/link";
import { CiCalendar } from "react-icons/ci";

export const metadata = {
	title: "• Everyone wants to be productive.",
};

export default function () {
	return (
		<article className="mx-auto flex max-w-[60rem] flex-col px-4 pt-[7rem] pb-[5rem]">
			<header className="mx-6 text-left sm:mx-10">
				<div className="flex">
					<CiCalendar size="20" className="mr-2" />
					<small className="font-sans text-[0.8rem] font-light sm:text-[1rem]">
						15 April, 2023
					</small>
				</div>
				<h1 className="font-sans text-[1.8rem] font-bold tracking-[0.02rem] sm:text-[2rem] md:text-[2.8rem]">
					Everyone wants to be productive.
				</h1>
			</header>
			<img
				alt="desk"
				src="/desk.jpg"
				className="my-8 h-[8rem] max-w-[100%] rounded-lg object-cover sm:h-[10rem]"
			/>
			<div className="mx-4 font-nunito sm:mx-10">
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Don't they? And if you don't, then you need to get yourself checked
					out. There are probably millions of articles about productivity
					already and way more extensive but I thought I'd share my two cents.
				</p>

				<br />
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Bottom line is, being productive is tough. Unless you achieve that
					momentum and you're in a flow state, most of the time you're going to
					be forcing yourself to be productive. So how do you get that momentum?
					Or atleast try your best to.
				</p>

				<br />
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					When it comes to being productive and avoiding procrastination, there
					are <span className="font-semibold">3 main things</span> I find you
					need to make sure to incorporate in your workflow.
				</p>

				<br />
				<h3 className="py-2 font-sans text-[1.1rem] font-semibold sm:text-[1.3rem]">
					1. Tasks and Deliverables
				</h3>
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Create a todo list. Yes, it's that simple sometimes. You won't believe
					it until you try it. Creating a list forces you to organize whatever
					you need to get done into concise, deliverable tasks. Then it forces
					you to work on these tasks one by one instead of multitasking and
					eventually being overwhelmed and never completely done with any of
					them.
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					So the only way to get done with your work is to have clear, short
					term goals written down. Additionally, the satisfaction that comes
					with achieving a task and ticking that checkbox is the fuel that helps
					create that momentum which leads to eagerness to complete more tasks.
				</p>

				<br />
				<h3 className="py-2 font-sans text-[1.1rem] font-semibold sm:text-[1.3rem]">
					2. Eliminate Distractions.
				</h3>
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					In a time where the whole world can be reached with a swipe, it can be
					very tough to get anything done. Productivity thrives when there are
					no distractions to stop it and your phone (specifically social media)
					is the biggest distraction there is. Don't just turn off your phone.
					Put it physically away from you.
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					We often reach for our phones not because we want a break, but because
					we're escaping work. Putting it away from you helps you become
					conscious of the amount of times you mindlessly grab it and trust me,
					it's not good. You'll get so much more done once there's nothing to
					grab.
				</p>

				<br />

				<h3 className="py-2 font-sans text-[1.1rem] font-semibold sm:text-[1.3rem]">
					3. Time Blocking
				</h3>
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Time blocking is dividing your day into 30-90 minute blocks, each
					assigned a certain task whether it's work or taking a break. It is a
					way to effectively break your day into bite size blocks and know
					exactly what you have to do so you're not overwhelmed by an open-ended
					todo list.
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					If you don't control your schedule, it will control you. Planning out
					your day in advance is very important to getting things done. It is
					also important for taking sufficient breaks as time blocking allows
					you to set longer, uninterrupted breaks.
				</p>

				<br />

				<h3 className="py-2 font-sans text-[1.1rem] font-semibold sm:text-[1.3rem]">
					Conclusion
				</h3>
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					I'm in a constant battle towards productivity. And when I notice that
					I'm losing that battle, it is always because I stopped implementing
					these tips into my workflow. So get off this blog if you were
					procrastinating by reading this and go work on your productivity.
				</p>
				<br />

				<br />
				<Link
					href="../self"
					className="text-[1rem] font-semibold sm:text-[1.2rem]"
				>
					{"-"} Go back
				</Link>
			</div>
		</article>
	);
}
