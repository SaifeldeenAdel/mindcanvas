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
		console.log(id);
		setCurrentBook(id);
		setModalOpen(true);
		console.log(books[0]);
	};

	const handleChoose = (id) => {
		setCurrentBook(id);
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
      image: darkmatter
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
      image: project
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
					<Book rating={1} img={rage} />
					<Book rating={4} img={road} />
					<Book rating={5} img={pines} />
				</div>
			</div>

			<div className="flex max-w-[55rem] flex-col items-center justify-center px-4 sm:px-8">
				<h1 className="w-[100%] text-left font-sans text-[1rem] font-bold sm:text-[1.3rem] ">
					Non Fiction
				</h1>
				<hr className="mb-4 w-[100%]" />

				<div className="mb-10 grid grid-cols-3 gap-4 md:grid-cols-5">
					<Book rating={5} img={meaning} />
					<Book img={night} />
					<Book img={discourses} />
					<Book img={meditations} />
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
