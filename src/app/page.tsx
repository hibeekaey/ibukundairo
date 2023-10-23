import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-16 p-10">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/ibukun-dairo-ceo-cuesoft.jpeg"
          alt="Ibukun Dairo, Founder and CEO, Cuesoft Inc."
          width={300}
          height={300}
          priority
        />
      </div>

      {/* <div className="relative flex place-items-center mt-5">
        <Image
          className="relative"
          src="/ibukun-dairo-ceo-cuesoft.jpeg"
          alt="Ibukun Dairo, Founder and CEO, Cuesoft Inc."
          width={20}
          height={20}
          priority
        />
      </div> */}

      <div className="lg:max-w-5xl lg:w-full mt-20 lg:mb-0">
        <h3 className="font-black text-2xl font-mono tracking-tight mb-8">
          hello there,
        </h3>
        <p className="font-light font-sans tracking-wide mb-4">
          I am Ibukun Dairo, the Founder and CEO of Cuesoft, a pioneering
          software company that excels in software engineering and talent
          management. Through our revolutionary DevLabs initiative, we champion
          open-source innovation and showcase the expertise of our top-tier
          talent on the global stage. My vision for Cuesoft is to provide both
          innovative software and global talent to businesses of all scales,
          positioning us as the premier provider of software solutions and
          talent worldwide.
        </p>
        <p className="font-light font-sans tracking-wide mb-4">
          Education has always been a cornerstone of my journey. I hold a BSc in
          Computer Science and am currently working towards an MBA in
          International Business from Nexford University. Prior to that, I
          attended the University of Ibadan, where I pursued an MBA in
          Entrepreneurship and Operations Management. Additionally, I&rsquo;ve
          earned a Nanodegree in AI Programming with Python from Udacity. When
          it comes to business, I&rsquo;ve invested $100,000 in Cuesoft and
          successfully raised over $250,000 through startup programs from
          powerhouses like Amazon and Google. This has led Cuesoft to be
          spotlighted as one of Nigeria&rsquo;s rapidly ascending software
          engineering startups, underscoring my blend of business and technical
          acumen. My hard work was recognized when I was honored with the
          &ldquo;CEO of the Year&rdquo; award in Nigeria by CEO Review magazine
          in 2022.
        </p>
        <p className="font-light font-sans tracking-wide">
          Before the inception of Cuesoft, I amassed a wealth of experience
          across various tech sectors, including a stint as a contractor for
          companies in the United States. My diverse career trajectory includes
          impactful roles such as a Senior Software Engineer at HackerBay and a
          Software Engineering Consultant at Traive Finance. In every role,
          I&rsquo;ve aimed to make a lasting impact through my contributions to
          software engineering and DevOps. My career, spanning multiple
          countries and industries, has equipped me with the ability to navigate
          intricate challenges and devise bespoke solutions in teams of varied
          cultures and backgrounds. I&rsquo;m also privileged to have shared my
          expertise at numerous tech conferences, further solidifying my stance
          as a thought leader in the industry.
        </p>
      </div>
    </main>
  );
}
