import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <div className="mb-16">
        <h1 className="font-montserrat font-thin xl:text-[3em] sm:text-[2.5em] text-primary ">
          Welcome to my "Blog"
        </h1>
        <h2 className="font-montserrat font-medium xl:text-[1em] sm:text-sm text-primary text-center mb-16 mt-2">
          I talk about things I find interesting 
        </h2>
        <div className="flex w-[100%]">
          <input type="email" className="py-4 px-4 bg-slate-100 outline-none font-sans mx-auto w-[100%] placeholder:font-light rounded-l-lg" placeholder="Get an email whenever I post!" />
          <button className="font-sans text-light bg-primary text-white w-[25%] rounded-r-lg">Sign up!</button>
        </div>


      </div>
    

    </div>
  );
}