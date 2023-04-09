import Link from "next/link";

export default function Card({ page, title, date, img }) {
	return (
		<Link
			href={`/self/${page}`}
			className="flex aspect-[0.937] max-w-[25rem] items-end  font-montserrat text-white transition-all duration-300 hover:scale-[1.02] "
		>
			<img
				className="h-[100%] w-[100%] rounded-[1rem] object-cover brightness-[0.75] transition-all duration-[200ms] ease-linear hover:brightness-[0.9]"
				src={`/${img}.jpg`}
			/>
			<div className="absolute flex max-w-[25rem] flex-col px-6 pb-6 sm:px-10 sm:pb-8">
				<div className="mb-2 text-sm font-light">{date}</div>
				<div className="text-[1.1rem] font-semibold">{title}</div>
			</div>
		</Link>
	);
}
