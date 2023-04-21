import Link from "next/link";
import { CiCalendar } from "react-icons/ci";

export const metadata = {
	title: "How do you self reflect?",
};

export default function () {
	return (
		<article className="mx-auto my-[8rem] flex max-w-[60rem] flex-col px-4 ">
			<header className="mx-4 text-left sm:mx-10">
				<div className="flex">
					<CiCalendar size="20" className="mr-2" />
					<small className="font-montserrat text-[0.8rem] font-light sm:text-[1rem]">
						13 March, 2023
					</small>
				</div>
				<h1 className="font-montserrat text-[1.8rem] font-bold tracking-[0.02rem] sm:text-[2rem] md:text-[3rem]">
					How do you self reflect?
				</h1>
			</header>
			<img
				alt="journal"
				src="/reflect.jpg"
				className="my-8 h-[8rem] max-w-[100%] rounded-lg object-cover sm:h-[10rem]"
			/>
			<div className="mx-4 font-nunito sm:mx-10">
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					First of all, what even is self-reflection and why do you need to do
					it?
				</p>
				<br />
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Self-reflection is taking the time to analyse and interpret your
					thoughts, emotions, actions, and many more things your "self" may
					experience on a daily basis. It is what builds self-awareness and
					self-awareness is what helps us avoid being on autopilot, experiencing
					life and its stresses the same way every-day.{" "}
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					The idea of sitting down with your thoughts may seem scary to most
					people and that’s what makes this practice even more necessary to do
					in my opinion, as constantly avoiding unpleasant thoughts will only
					lead to a miserable life.{" "}
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Putting in some effort to understand why these thoughts arise, and
					what lead to them in the first place will help you actually formulate
					ways to deal with them rather than miserably suppressing them all the
					time.
				</p>
				<br />
				<br />

				<h2 className="pb-4 font-montserrat text-[1.2rem] font-semibold sm:text-[1.5rem]">
					Alright how do you do it..
				</h2>
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					It is important to pick the right time so you can achieve a calm
					headspace before and during self-reflecting. Don’t start
					self-reflecting when you’ve got a report due tomorrow.{" "}
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					For me, there are 2 main ways one could go about self-reflecting:
				</p>
				<br />

				<h3 className="py-2 font-montserrat text-[1.1rem] font-semibold sm:text-[1.3rem]">
					Journalling
				</h3>
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Journalling can be a great way to get all of your thoughts and
					feelings out before analysing them. Whether you randomly jot down
					everything you felt that day or follow a specific writing exercise,
					journalling will help you empty your mind of all the pent-up emotions.
					Bonus is being able to look back at your entries and see how much your
					mindset and feelings have changed.
				</p>
				<br />

				<h3 className="py-2 font-montserrat text-[1.1rem] font-semibold sm:text-[1.3rem]">
					Meditation / Going for a walk
				</h3>
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Technically these are two different things however I found that a good
					walk can be just as meditative as a seated session, try it. This one
					is all about sitting/walking in silence and seeing where you mind
					wanders. Observe your thoughts.
				</p>
				<br />

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					For example, you stumble upon some anxious thoughts, label them,
					identify their source and what aspect in your life is causing them and
					think about the measures you can take to minimize them. A lot of the
					time you'll realize some of these thoughts are not actually justified
					by anything at that moment and were just lingering.
				</p>
				<br />
				<br />

				<h2 className="pb-4 font-montserrat text-[1.2rem] font-semibold sm:text-[1.5rem]">
					Key Questions to ask yourself:
				</h2>

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					If you’re still lost and need some direct examples of things to
					ponder, here are some questions to ask yourself:
				</p>
				<br />
				<ol className="ml-5 list-decimal text-[1.1rem] font-light sm:text-[1.3rem]">
					<li>What worries me most right now?</li>
					<li>What worries me most about the future?</li>
					<li>Am I letting matters out of my control stress me out?</li>
					<li>
						Am I living on autopilot or am I constantly reviewing and updating
						my tasks and goals?
					</li>
					<li>
						Where was I on this day last year? How much has changed? For
						better or worse?
					</li>
				</ol>
				<br />
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					A lot of these are open ended as to encourage you to let your mind
					wander and discover new things to question and think about.
				</p>
				<br />
				<br />
				<h2 className="pb-4 font-montserrat text-[1.2rem] font-semibold sm:text-[1.5rem]">
					Conclusion
				</h2>
				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Self-reflection might seem silly at first, however it’s a necessary
					and an extremely helpful practice to incorporate in your life.
				</p>

				<p className="text-justify text-[1.1rem] font-light sm:text-[1.3rem]">
					Hope you enjoyed this and good luck self-reflecting!
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
