import { motion } from "framer-motion";
import Image from "next/image";
import Backdrop from "./Backdrop";

import { AiFillStar } from "react-icons/ai";
import { RxEyeClosed } from "react-icons/rx";
import darkmatter from "../../../public/darkmatter.jpg";

export default function Modal({ handleClose, book }) {
	const dropIn = {
		hidden: {
			scale: 0,
			opacity: 0,
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				type: "spring",
				damping: 50,
				stiffness: 500,
			},
		},
		exit: {
			scale: 0,
			opacity: 0,
		},
	};
	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				className="relative mx-5 flex max-h-[75vh] sm:max-h-[60vh] min-h-[30vh] max-w-[50rem] flex-col gap-5 overflow-y-auto rounded-lg bg-slate-50 p-6 font-sans opacity-100 sm:flex-row "
				onClick={(e) => e.stopPropagation()}
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<div
					className="absolute top-0 right-0 py-3 px-5 hover:cursor-pointer"
					onClick={handleClose}
				>
					<RxEyeClosed className="text-[2rem] text-primary" />
				</div>
				<Image
					alt="book-cover"
					src={book.image}
					className="m-auto max-h-[13rem] max-w-[8rem] rounded-lg sm:fixed sm:m-0 sm:max-h-[15rem] sm:max-w-[10rem]"
				/>
				<div className="flex flex-col sm:ml-[12rem]">
					<h2 className="text-[1.7rem] font-bold sm:text-[2rem] leading-8">
						{book.title}
					</h2>
					<span className="mt-[0rem] text-[0.9rem] font-light sm:text-[1rem]">
						by {book.author}
					</span>
					<div className="my-2 flex flex-row">
						{[...Array(book.rating)].map((v, i) => (
							<AiFillStar
								key={i}
								className="text-[1rem] text-yellow-400 sm:text-[1.3rem]"
							/>
						))}
					</div>

					<h3 className="mb-2 text-[1.2rem] font-semibold">Review:</h3>
					<div className="mb-5 whitespace-pre-wrap text-justify text-[0.9rem] sm:m-0 sm:text-[1rem]">
						{book.review.map((item, i) => (
							<p key={i} className="mb-2">
								{item}
							</p>
						))}
					</div>
				</div>
			</motion.div>
		</Backdrop>
	);
}
