import Link from "next/link"

export default function Card({page, title, date, img}) {
  return (
      <Link href={`/self/${page}`} className="max-w-[25rem] hover:scale-[1.02] transition-all duration-300  aspect-[0.937] flex items-end font-montserrat text-white ">
        <img className="w-[100%] h-[100%] rounded-[1rem] object-cover brightness-[0.75] hover:brightness-[0.9] transition-all duration-[200ms] ease-linear" src={`/${img}.jpg`}/>
        <div className="absolute max-w-[25rem] pb-6 px-6 md:pb-8 md:px-10 flex flex-col">
          <div className="text-sm font-light mb-2">{date}</div>
          <div className="text-[1.1rem] font-semibold">{title}</div>
        </div>
      </Link>
  )
}