import { motion } from "framer-motion";
import Image from "next/image";
import Backdrop from "./Backdrop";

import { AiFillStar } from "react-icons/ai";
import darkmatter from "../../../public/darkmatter.jpg";

export default function Modal({ handleClose, text }) {
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
				className="mx-5 flex max-h-[60vh] max-w-[50rem] flex-col sm:flex-row gap-5 rounded-lg bg-slate-50 p-5 opacity-100 font-sans "
				onClick={(e) => e.stopPropagation()}
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<Image src={darkmatter} className="max-w-[10rem] max-h-[15rem] rounded-lg sm:m-0 m-auto" />
				<div className="flex flex-col">
					<h2 className="text-[2rem] font-bold">Dark Matter </h2>
					<span className="mt-[-0.5rem] text-[1rem] font-light">
						by Blake Crouch
					</span>
					<div className="flex flex-row my-2">
						<AiFillStar className="text-[1rem] text-yellow-400 sm:text-[1.3rem]" />
						<AiFillStar className="text-[1rem] text-yellow-400 sm:text-[1.3rem]" />
					</div>

					<h3 className="text-[1rem] font-medium overflow-y-auto">Review:</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure ducimus iste incidunt debitis non sequi doloremque dolore repellat natus fugit placeat aliquam ex rem, veritatis ut laborum, illum aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consectetur odit obcaecati, incidunt iure ipsum placeat perspiciatis impedit beatae in eius adipisci consequatur quis magni deleniti. Officia ullam repudiandae fuga! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci id iusto, explicabo, pariatur laboriosam minus corporis nihil culpa neque ut, quam soluta error reiciendis fuga quasi perferendis iure tempore officia!</p>
				</div>
			</motion.div>
		</Backdrop>
	);
}
