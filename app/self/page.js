
export default function() {
  return (
    <div className="content-container flex flex-col items-center">
      <h1 className="font-serif font-medium text-[1.6rem] italic text-center leading-snug mb-2">"The happiness of your life depends upon the quality of your thoughts."</h1>
      <h2 className="font-serif font-light text-lg">Marcus Aurelius</h2>

      <div className="grid-cols-3 grid gap-8 mt-12 mb-12">
        <Card title="Everyone wants to be productive" date="13 March, 2023" img="desk"/>
        <Card title="How do you self reflect?" date="15 March, 2023" img="reflect"/>
        <Card title="Who is Claude Monet" date="19 March, 2023" img="monet"/>


      </div>
    </div>
  );
}


function Card({title, date, img}) {
  return (
      <div className="h-[26rem] max-w-lg aspect-[0.937] flex items-end font-montserrat text-white ">
        <img className="w-[100%] h-[100%] rounded-[1rem] object-cover brightness-[0.75] hover:brightness-[0.9] transition-all duration:600 ease-linear" src={`/${img}.jpg`}/>
        <div className="absolute mb-8 mx-10 flex flex-col">
          <div className="text-sm font-light mb-2">{date}</div>
          <div className="text-[1.1rem] font-semibold">{title}</div>
        </div>
      </div>
  )
}