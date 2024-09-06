import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { Typewriter } from "@/components/Typewriter";

export default function Home() {
  const Links = [
    {
      tittle: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/ashutosh-li",
    },
    {
      tittle: "Github",
      icon: FaGithub,
      href: "https://www.github.com/as-ga",
    },
    {
      tittle: "Twitter",
      icon: FaXTwitter,
      href: "https://www.twitter.com/_AshutoshGaurav",
    },
  ];
  return (
    <section className="relative w-full min-h-screen grid grid-cols-[0.2fr_1fr] md:grid-cols-[0.2fr_1fr_1fr] items-center gap-4 md:-mt-5 mt-2">
      <div className="flex flex-col items-center">
        {Links.map((item) => (
          <Link
            key={item.tittle}
            target="_blank"
            href={item.href}
            className="mb-4 transition-transform duration-300 ease-in-out hover:scale-150"
          >
            <item.icon className="h-5 w-5 " />
          </Link>
        ))}
      </div>

      <div className="md:order-1">
        <Image
          src="/assets/main.png"
          width={500}
          height={500}
          alt="Ashutosh Gaurav"
          className="rounded-[40px_0px] shadow-[8px_8px_7px_#ffffff73,_2px_2px_5px_rgba(94,104,121,0.288)]"
        />
      </div>

      <div className="col-span-2 md:col-span-1 pl-5">
        <span className="text-[var(--medium-font)] font-medium">
          Hello, I'm
        </span>
        <h1 className="text-5xl font-bold">Ashutosh Gaurav</h1>
        <Typewriter />
        <p className="font-normal my-[0.7rem_0_1rem] text-justify p-2">
          Building digital connections one line of code at a time, because in
          the world of React and Python, I'm the developer your website has been
          looking for!
        </p>

        <Button className="m-2 w-auto md:w-[20%]">
          <a href="#contact">Contact</a>
        </Button>
      </div>
    </section>
  );
}
