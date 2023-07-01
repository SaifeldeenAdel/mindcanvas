"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Book from "../components/Book/Book";
import Modal from "../components/Modal/Modal";
import books from "../utils/books";

import {
	darkmatter,
	project,
	road,
	goneworld,
	rage,
	pines,
	discourses,
	meditations,
	night,
	meaning,
} from "../utils/imgImports";

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
