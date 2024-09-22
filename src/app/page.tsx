import { FaLocationDot } from "react-icons/fa6"
import GradientText from "../components/GradientText";

export default function Home() {
  return (
    <main className="layout">
      <section className="lg:mx-28">
        <article className="flex flex-col gap-y-4">
          
          <h1 className="text-5xl font-extrabold">Hi, I&apos;m <GradientText>Hafiz</GradientText></h1>
          <h2 className="text-xl font-semibold">Software Engineer</h2>
          <p className="inline-flex items-center gap-x-2">
            <FaLocationDot className="h-5 w-5" />
            <GradientText className="text-xl">Jakarta</GradientText> 
          </p>
          <p className="text-xl">
            Lets not talk about software engineering, just straight take a look at my project showcase.
            <br />
            I love metal music and coffee by the way <span className="text-red-500"> &#10084;</span>
          </p>
          
        </article>
        
      </section>
    </main>
  );
}
