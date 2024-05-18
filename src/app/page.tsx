import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card'
import { BackgroundBeams } from '@/components/global/background-beams';
import { HeroParallax } from "@/components/global/connect-parallax";
import { ContainerScroll } from "@/components/global/container-scroll";
import { FlipWords } from '@/components/global/flip-words';
import Footer from '@/components/global/footer';
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampComponent } from '@/components/global/lamp';
import { Navbar } from "@/components/global/navbar";
import { TypewriterEffectSmooth } from '@/components/global/typewriter-effect';
import { CreateProfileGridCard } from '@/components/profile-grid';
// import { BentoGridThirdDemo } from '@/components/grid';
import { SkeletonOne,SkeletonTwo, SkeletonThree } from '@/components/grid';
import { BentoGridSecondDemo } from '@/components/resume-grid';
import { Button } from "@/components/ui/button";
import { StepCard } from '@/components/ui/step-card';
import { clients, products } from "@/lib/constants";
import { ArrowRight, CheckIcon } from 'lucide-react';
import Image from "next/image";
import { StickyScrollRevealDemo } from '@/components/admin';
export default function Home() {
  const words = [
    {
      text: "Find",
    },
    {
      text: "your",
    },
    {
      text: "dream",
    },
    {
      text: "job",
    },
    {
      text: "with",
    },
    {
      text: "MyAiJobs.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const resumeWords = ["better", "executive", "reactive", "modern"];
  return (
    <main >
      <Navbar/>
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <Button
                  size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-auto sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Find your jobs recommended by AI
                </h1>
              </div>
            }
            
          ><Image
          src={`/temp-banner.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-fit h-full object-left-top"
          draggable={false}
        /></ContainerScroll>
          {/* <InfiniteMovingCards
          className="md:mt-[18rem] mt-[-100px]"
          items={clients}
          direction="right"
          speed="slow"
        /> */}
        </div>
      </section>
        <section>
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section>
        <div className='flex flex-col justify-center items-center'>
          <TypewriterEffectSmooth words={words} />
         
        </div>
      <div className=" w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      {/* <BentoGridThirdDemo/> */}
      <div className='flex gap-5 p-5 md:flex-row flex-col'>
      <CreateProfileGridCard title="Step - 1" skeleton={SkeletonOne} desc='Create Your Profile and add your details.'/>
      <CreateProfileGridCard title="Step - 2" skeleton={SkeletonTwo} desc='Explore Personalized Job Recommendations.'/>
      <CreateProfileGridCard title="Step - 3" skeleton={SkeletonThree} desc='Apply with Ease using our smart recommendation.'/>
      </div>

      <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6  text-white inline-block mt-4">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2.5 px-4 ring-1 ring-white/10 ">
          <span>{`Create your profile`}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
      </div>
      </section>
      <section className='pt-24'>
        {/* <div className="max-w-2xl mx-auto p-4 flex justify-center flex-col items-center">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Want to hire?
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-justify relative z-10">
          Welcome to MyAiJobs and start your journey with us, where finding the right talent for your team is easier than ever. Our job recommendation system utilizes cutting-edge technology to match your company with top-tier candidates perfectly suited to your needs. Post your job openings today and let our platform streamline your hiring process, saving you time and resources while ensuring you find the best-fit professionals for your organization's success.
          covered.
        </p>
        <Button className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"'> Start posting jobs</Button>
      </div>
      <BackgroundBeams /> */}
      <div className='flex flex-col items-center '>

       <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Want to hire?
        </h1>
      <StickyScrollRevealDemo/>
      <Button className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"'> Create your Own Jobs <ArrowRight className='ml-2'/></Button>
      </div>
      </section>
      <section className='m-8'>
        <div className="h-[10rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build<FlipWords words={resumeWords} />
        resumes with <span>MyAiJobs</span>
      </div>
    </div>
        <BentoGridSecondDemo/>
      </section>
      <section className="">
        <LampComponent />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Employer plan
                <h2 className="text-6xl ">$0</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Free Resume maker
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Upto 100 Applications 
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Free job filtering
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Pro Plan
                <h2 className="text-6xl ">$29</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />Unlimited Job Applications 
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Unlimited Profile filtering
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Enterprise Plan
                <h2 className="text-6xl ">$99</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />Unlimited Profile filterings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Unlimited Job Applications
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
     
        <footer>

        <div className="h-[20rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
          <Footer/>
      
    </div>
      </footer>
   
     
    </main>
  );
}
