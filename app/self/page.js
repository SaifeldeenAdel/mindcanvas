import Card from "../components/Card/Card";


export default function() {
  return (
    <div className="content-container ">
      <h1 className="font-serif font-medium px-4 text-[1.2rem] sm:text-[1.6rem] italic text-center leading-snug mb-2">"The happiness of your life depends upon the quality of your thoughts."</h1>
      <h2 className="font-serif font-light text-lg">Marcus Aurelius</h2>

      <div className="lg:grid-cols-3 grid gap-8 mt-12 mb-12 sm:grid-cols-2 grid-cols-1 mx-8">
        <Card page="reflect" title="How do you self reflect?" date="15 March, 2023" img="reflect"/>
        <Card page="productive" title="Everyone wants to be productive" date="13 March, 2023" img="desk"/>
        <Card page="monet" title="Who is Claude Monet" date="19 March, 2023" img="monet"/>
        {/* <Card title="The Mind of Zdzisław Beksiński" date="19 March, 2023" img="beksinski"/> */}


      </div>
    </div>
  );
}


