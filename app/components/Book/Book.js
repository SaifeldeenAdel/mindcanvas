import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

export default function Book({ rating, img }) {
	return (
		<div className="duration-200 hover:scale-[1.04] hover:cursor-pointer">
			<Image src={img} className=" rounded-lg" placeholder="blur"/>
			<div className="mt-1 w-[100%]">
        <div className="flex flex-row">
          {Array(rating).fill(
            <AiFillStar className="text-yellow-400 text-[1rem] sm:text-[1.3rem]"/>
          )}
        </div>
			</div>
		</div>
	);
}
