"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Book from "../components/Book/Book";
import Modal from "../components/Modal/Modal";

import darkmatter from "../../public/darkmatter.jpg";
import project from "../../public/project.jpg";
import road from "../../public/road.jpg";
import goneworld from "../../public/goneworld.jpg";
import rage from "../../public/rage.jpg";
import pines from "../../public/pines.jpg";

import discourses from "../../public/discourses.jpg";
import meditations from "../../public/meditations.jpg";
import night from "../../public/night.jpg";
import meaning from "../../public/meaning.jpg";

export default function () {
	useEffect(() => {
		document.title = "• Books";
	}, []);

	const [modalOpen, setModalOpen] = useState(false);
	const [currentBook, setCurrentBook] = useState(0);

	const close = () => {
		setModalOpen(false);
	};
	const open = (id) => {
		setCurrentBook(id);
		setModalOpen(true);
	};

	const books = {
		0: {
			title: "Dark Matter",
			author: "Blake Crouch",
			rating: 5,
			review: [
				"The *definition* of a page turner. Never seen science fiction done so well and with no distractions whatsoever. It is worth every chapter, every page, every word.",
				"The plot gets even better and even more mind-fuckingly awesome with every chapter. The story itself is extremely unique and filled with the most unexpected twists, atleast I thought so. I rarely give a 5 star rating so this was a good book.",
				"You're missing out big time if you don't give it a go.",
			],
			image: darkmatter,
		},
		1: {
			title: "Project Hail Mary",
			author: "Andy Weir",
			rating: 3,
			review: [
				"Incredible story, childish writing.",
				"Felt like a young teen novel tbh. Which made it a pretty easy read which was nice I guess and no where was the plot boring so I'll give him that.",
				'The writing tho. What is this. What are these dialogues. At times it felt like the author wanted to write a sci fi comedy, a pretty bad one. You are not funny. The way the character narrates his experiences is full of man child, "witty" and just obnoxious jokes. Really is a shame, was gonna check out The Martian but I love the movie and now don\'t wanna ruin it.',
				"At this point im wondering why I gave it 3 stars but the plot itself was pretty interesting and he mixed in the perfect amount of science into it. Some pretty emotional parts as well which were enjoyable. Ending didn't play out as I thought it would but it was pretty satisfying nonetheless.",
				"Guess this book will help me appreciate and actually detect good writing now.",
			],
			image: project,
		},
		2: {
			title: "The Gone World",
			author: "Tom Sweterlitsch",
			rating: 4,
			review: [
				'"every permutation of every choice I’ve ever made and ever will make existing in every moment, forever. ‘Merrily, merrily’—isn’t that what the truest sailors say? Nothing blinks out, nothing ends. Everything exists, always exists. Life is but a dream, Shannon. Self is the only illusion."',

				'A christopher nolan film in a book. The summary nails it with the "Inception meets True Detective" description. Sci fi, thriller, and mystery all in one. The book immediately pulled me in from the first couple pages as the character starts off not knowing where she is and sees tragic things she can\'t explain. The end of the world.',

				"Youre then taken on an incredible and emotional journey of time travel and investigation. The notion of infinite possibilities and futures is explored extensively. There's confusion, details that only make sense once you have the whole picture and plot twists that I didn't see coming.",

				'"merrily, merrily, life is but a dream."',
			],
			image: goneworld,
		},
		3: {
			title: "Rage",
			author: "Stephen King",
			rating: 1,
			review: [
				"Given how much praise I've seen this book get, I'm disappointed to say it was kind of a letdown for me.",

				'"Two years ago. To the best of my recollection, that was about the time I started to lose my mind."',

				"The story starts off at such a high point, quickly tension builds up which is soon dissipated when a certain event takes place. From this point on, the story, with my interest, plummeted. It was a group therapy session between the shooter and his classmates. Main character, the shooter, recalling traumatic incidents which I guess didn't strike a chord with me because I found the highlight of the incident, the part that caused the trauma, was being drawn out and got quite boring.  Sadly a big part of the book was this so there isn't much to say to that.",

				"However, the book starts to get a little more interesting in the end. (I hate that, I hate books that are only good in the last couple chapters). Main character recalling more gruesome incidents which were actually emotional to me this time so it was the first time I sympathised with him, classmates beginning to discuss their own traumas and thus gaining sympathy towards the killer because they realized they all relate to alot of the things that he discussed. This was good.",

				"Some say this book is a GREAT look into a psychopath's mind however I disagree. I thought it could've touched more on elements such as intrusive thoughts, manipulation, lack of remorse (he did kill two people in cold blood but that was part of the high point in the beginning), things that actually go through a psycho's mind.",

				"I feel this book is one that needs alot of analysis and thought to appreciate the subtleties however I'm not one for those kinds of books right now so it's a preference thing. I can see why people would enjoy it however its not for me. Needed a little more spice.",
			],
			image: rage,
		},
		4: {
			title: "The Road",
			author: "Cormac McCarthy",
			rating: 4,
			review: [
				"Incredibly emotional story. Something right up my alley when it comes to getting emotionally attached to characters. The Road is a book to read when you want to feel something (gut wrenching pain).",
			],
			image: road,
		},
		5: {
			title: "Wayward Pines Trilogy",
			author: "Blake Crouch",
			rating: 5,
			review: [
				"Sucks that I didn't write a review right after reading this trilogy however what I can say is, if you're gonna spend time on a trilogy, this is the one. Some of the best, most intense writing and storytelling. Emotional, scary, gripping, everything. I don't remember ever wanting to put any of the books down.",
				"I believe this trilogy was what solidified Blake Crouch as one of my favorite sci fi authors out there.",
			],
			image: pines,
		},
		6: {
			title: "Discourses",
			author: "Epictetus",
			rating: 3,
			review: [
				"Not very on brand of me to read a book that's 1900 years old but I've been interested in stoicism for a while and thought I'd actually do something about it for once. This was the best and worst book to start with at the same time. ",
				"Best because I did not want a book that was a modernized version of stoicism, I wanted to read something directly written (technically not written by Epictetus but it's a transcript of his words) by one of the first stoic philosophers as it's pretty interesting to read exactly how some of the core principles were taught. ",
				"Worst because this is a very dense book where most of the passages probably went over my head and I struggled for a while to get used to all the philosophical/stoic terms. However, I stuck through as I always seemed to find little gems of wisdom that didn't go over my head and were very insightful.",
				'"Well then, what have they made you accountable for? Only for what lies within your power, the right use of your impressions. Why do you charge yourself, then, with things for which you’re not accountable? You’re merely creating trouble for yourself."',
				"In this book, Epictetus focuses a lot on identifying and differentiating your externals from the things that lie within your sphere of judgment and choice. This comes in handy when learning to deal with stress and complaining. Basically learning that externals are things that are not in your control and thus it does not make sense for them to affect you. ",
				'"I must die; so must I die groaning too? I must be imprisoned; so must I grieve at that too? I must depart into exile; so can anyone prevent me from setting off with a smile, cheerfully and serenely?"',
				"If you find yourself distressed or complaining about anything, take a second to realize if said thing is within your sphere of choice or not. More likely than not, it's not and you're drowning in miserable emotions which are not justified. To realize this requires continual practice and self-reflection which is something I began to do more of.",
				"I did find it a little redundant though as the whole book provides hundreds of contexts when boiled down, will center around this theme/principle however he truly believed that you can achieve true virtue and happiness by implementing this. ",
				"Key thing here is practice, then again stoicism is a state of mind so it takes a lot of self-reflection. If you plan on reading for the stoics, put everything in practice, only then will your mindset will change.",
				'"But if someone reads up about these matters and frequents the philosophers merely because he wants to show off his knowledge of hypothetical arguments at a dinner, what else is he doing than simply trying to win the admiration of some senator who is sitting beside him at the table"',
				"Overall I quite enjoyed this and I realize it is not a book that's only read once. However I don't think I'll be rereading it any time soon, will be moving on to other stoic works. If you do not have the time to read the whole thing I recommend reading the handbook which offers a concise list of principles to live by and an overall good overview of Epictetus' mindset although its not as interesting as the content of the book itself.",
			],
			image: discourses,
		},
		7: {
			title: "Meditations",
			author: "Marcus Aerulius",
			rating: 3,
			review: [
				'"The things you think about determine the quality of your mind. Your soul takes on the color of your thoughts."',
				'"To be like the rock that the waves keep crashing over. It stands unmoved and the raging of the sea falls still around it"',
				'"The discipline of perception requires that we maintain absolute objectivity of thought: that we see things dispassionately for what they are." ',
				'"that the longest-lived and those who will die soonest lose the same thing. The present is all that they can give up, since that is all you have, and what you do not have, you cannot lose."',
				"While exploring popular stoic principles, Meditations also has a unique element I quite enjoyed and one which was actually the reason why I was excited to read this. It is the fact that this was never really intended to be published and it was just him jotting down his thoughts.",
				"Reading a Roman Emperor's thoughts and how he dealt with hardships and realizing that it wasn't much different from what a regular person would experience was very eye opening. ",
				"He was keen on living his life objectively and in the moment. As nothing else matters expect whats happening right now. Anything \"bad\" that happens isn't to be considered actually bad as it was all planned to happen and you have no control over it. Having read from Epictetus, I can definitely see Marcus' inspiration from him or more generally, his interest in stoic philosophy. ",
				"It was a pretty easy read, no long winded, boring sections. I liked the seperate journal entry style cuz it made it easier to consume each point he discussed. Although some of it was repetitive, I don't think you can blame him for that, sometimes you gotta remind yourself of important principles as to not let go of them, and that's what he was doing to himself. He never thought of you reading it so it didn't matter to him if he was repeating himself.",
			],
			image: meditations,
		},
		8: {
			title: "Man's Search For Meaning",
			author: "Viktor E. Frankl",
			rating: 4,
			review: [
				'"Suffering in and of itself is meaningless; we give our suffering meaning by the way in which we respond to it"',
				"This book was great....for the most part. The first part of the book was absolutely the most interesting and insightful as he went through his own thoughts during a real, tragic situation. Which really drives the whole point of the book home. If someone like Viktor, in the conditions that Viktor was put in, can be able to derive a meaning to life and not just give up like the thousands of others who either committed suicide or smoked their cigarettes instead of trading it for food, then I'd imagine any mundane person can too.",
				"That doesn't mean our suffering is undermined, that just means that man can always respond to his suffering in a way that fuels him to keep going regardless of how severe the conditions are.",
				"The second part of the book was more theoretical, as intended ofc, and there was a lot of riveting cases in there however in other cases it dragged on and felt like reading a psychoanalysis textbook. Some of the concepts such as paradoxical intention were compelling to read but some others were not.",
				"Would maybe reread the second part sometime in the future to see if there's something that was glossed over.",
			],
			image: meaning,
		},

		9: {
			title: "Night",
			author: "Elie Wiesel",
			rating: 4,
			review: [
				"A one of a kind. Elie goes through his life at concentration camps, witnessing the death of his father, dealing with the most difficult of circumstances. Stories like this show how strong a human's mind can be and it's why I like to read these books",
				"Incredibly sad but quite astonishing. Can't say much more than that, it's a very short read but extremely impactful, highly recommend.",
			],
			image: night,
		},
	};

	return (
		<div className="flex flex-col items-center justify-center pt-[7rem]">
			<header className="mx-4 mb-5 flex flex-col items-center justify-center gap-3 text-center font-serif sm:mx-0">
				<h1 className="text-[1.2rem] font-medium italic leading-snug  sm:text-[1.6rem]">
					"A reader lives a thousand lives before he dies. The man who never
					reads lives only one"
				</h1>
				<h2 className="w-[100%] text-base font-light sm:text-lg">
					George R.R Martin
				</h2>
			</header>
			<div className="flex max-w-[55rem] flex-col items-center justify-center px-4 sm:px-8">
				<h1 className="w-[100%] text-left font-sans text-[1rem] font-bold sm:text-[1.3rem]">
					Fiction
				</h1>
				<hr className="mb-4 w-[100%]" />

				<div className="mb-10 grid grid-cols-3 gap-4 md:grid-cols-5">
					<Book
						id={0}
						rating={5}
						img={darkmatter}
						handleClick={modalOpen ? close : open}
					/>
					<Book
						id={1}
						rating={3}
						img={project}
						handleClick={modalOpen ? close : open}
					/>
					<Book
						id={2}
						rating={4}
						img={goneworld}
						handleClick={modalOpen ? close : open}
					/>
					<Book
						id={3}
						rating={1}
						img={rage}
						handleClick={modalOpen ? close : open}
					/>
					<Book
						id={4}
						rating={4}
						img={road}
						handleClick={modalOpen ? close : open}
					/>
					<Book
						id={5}
						rating={5}
						img={pines}
						handleClick={modalOpen ? close : open}
					/>
				</div>
			</div>

			<div className="flex max-w-[55rem] flex-col items-center justify-center px-4 sm:px-8">
				<h1 className="w-[100%] text-left font-sans text-[1rem] font-bold sm:text-[1.3rem] ">
					Non Fiction
				</h1>
				<hr className="mb-4 w-[100%]" />

				<div className="mb-10 grid grid-cols-3 gap-4 md:grid-cols-5">
					<Book
						id={8}
						rating={3}
						img={meaning}
						handleClick={modalOpen ? close : open}
					/>
					<Book
						id={9}
						rating={4}
						img={night}
						handleClick={modalOpen ? close : open}
					/>
					<Book
						id={6}
						rating={3}
						img={discourses}
						handleClick={modalOpen ? close : open}
					/>
					<Book
						id={7}
						rating={3}
						img={meditations}
						handleClick={modalOpen ? close : open}
					/>
				</div>
			</div>
			<AnimatePresence initial={false}>
				{modalOpen && (
					<Modal
						key="modal"
						modalOpen={modalOpen}
						handleClose={close}
						className="overflow-hidden"
						book={books[currentBook]}
					/>
				)}
			</AnimatePresence>
		</div>
	);
}
