import Image from "next/image";
import Link from "next/link";
// import reflect from "../../../public/reflect.jpg";

export default function Card({ section, page, title, date, img }) {
	return (
		<Link
			href={`/${section}/${page}`}
			className="flex aspect-[2] max-w-[25rem]  items-end text-white transition-all duration-300 hover:scale-[1.01] sm:aspect-[0.937] "
		>
			<Image
				className="h-[100%] w-[100%] rounded-[1rem] object-cover brightness-[0.75] transition-all duration-[200ms] ease-linear  hover:brightness-[0.9]"
				src={img}
        placeholder="blur"
			/>
			<div className="absolute flex max-w-[25rem] flex-col px-6 pb-6 font-sans sm:px-10 sm:pb-8">
				<div className=" mb-2 text-sm font-light">{date}</div>
				<div className="text-[1rem] font-semibold sm:text-[1.1rem]">{title}</div>
			</div>
		</Link>
	);
}
