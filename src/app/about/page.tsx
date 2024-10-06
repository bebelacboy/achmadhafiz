import GradientText from "@/components/GradientText";
import ImageLightbox from "@/components/Image/ImageLightbox";
import Subtitle from "@/components/Subtitle";
import TechStackIcons from "@/components/TechStackIcons";
import UnstyledLink from "@/components/Link/UnstyledLink";

export default function About() {
  const techStacks = ["react", "nextjs", "express", "tailwindcss", "spring", "django", "flutter"];

  return (
    <main className="layout">
      <section className="fade-in">
        <h1 className="text-5xl font-extrabold mb-6">Achmad <GradientText>Hafiz</GradientText></h1>
        <ImageLightbox className="ms-5 mb-2 float-right w-1/2 md:w-2/5 lg:w-1/5" imageClassName="rounded-2xl mx-auto"
              width={700} height={100} src="/images/about/me.jpg" alt="far from 'formal'" />
        <article>
          <p className="mb-6 text-justify">
            Born in Medan, raised in Balikpapan, and currrently live in Bekasi, 
            I have experienced a diverse range of cultures and environments. Well, I just
            gave you some private information but I don&apos;t care bro. 
            <br /><br />
            Software engineering has been
            my interest since I was a sophomore. At that time, I feel it&apos;s awesome to create 
            something &quot;<b>digital</b>&quot;, it&apos;s like
            as if you need to craft some art that demands both extensive knowledge and 
            precise technical expertise. From that moment, I started to learn from fundamental concept 
            and keep learning to grow my knowledge and skills until now.
            <br /><br />
            On daily basis, I primarily work in the TypeScript/JavaScript environment, but I&apos;m open to 
            working with other technologies like Python, Java, or even learn something entirely new to me!
          </p>
          <Subtitle>Main Tech Stack</Subtitle>

          <TechStackIcons className="mb-6 w-4/5 md:w-2/5" colorful={true} techs={techStacks}/>
          <Subtitle>Experience</Subtitle>
          <p className="mb-6 text-justify"> 
            Most of my works are mainly more in developing backend services instead the frontend application.
            However, I did some user interface throughout my works and learning process and this profile web
            also a part of it.
            Here&apos;s are the highlight of my experience:  
          </p>
          <ul className="list-disc ms-5 mb-6">
            <li>
              <p> <span className="font-semibold">UI BRI Work Startup Center - Backend Engineer</span> &#40;August 2024 - October 2024&#41;</p>
            </li>
            <li>
              <p>  <span className="font-semibold">M-Knows Consulting Internship - Backend Engineer</span> &#40;August 2023 - December 2023&#41;</p>
            </li>
            <li>
              <p> <span className="font-semibold"> PT Petaling Jaya Indonesia Trucking Management System Project - Fullstack Engineer </span>&#40;March 2023 - June 2023&#41;
              </p>
            </li>
          </ul>
          <p className="mb-6">
        
            For more detailed information check it out straight to my&nbsp;
              <UnstyledLink className="underline hover:text-theme-cyan" 
                openNewTab={true} 
                href={"https://docs.google.com/document/d/1wIJCyBqk0TE-zTfixbUNiRyUo-jP5LrwMSSIExVHW-g/edit?usp=sharing"}>
                  resume</UnstyledLink>&nbsp;
            or to the&nbsp;
            <UnstyledLink className="underline hover:text-theme-cyan"
              openNewTab={false}
              href="/projects">
              projects
            </UnstyledLink>&nbsp; 
            page which includes the fun works!
                  
        </p>
          <Subtitle>Reach Me Out</Subtitle>
          <p className="mb-6">Scroll down to <a className="underline hover:text-theme-cyan" href="#footer">footer</a> for my contacts!
          I&apos;ll be very happy for any discussion related to software engineering or maybe a collaboration!</p>
        </article>
      </section>
    </main>
  )
}