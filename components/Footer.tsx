import Link from "next/link";
import { Icons } from "./header/icons";

import {
  FaGithub,
  FaXTwitter,
  FaDiscord,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

export const Footer = () => {
  const followUS = [
    {
      name: "Github",
      link: "https://github.com/as-ga",
      icon: FaGithub,
    },
    {
      name: "Twitter",
      link: "https://x.com/_AshutoshGaurav",
      icon: FaXTwitter,
    },
    {
      name: "Discord",
      link: "https://discord.gg/ashutoshgaurav",
      icon: FaDiscord,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/ashutosh-li",
      icon: FaLinkedinIn,
    },
    {
      name: "Instagram",
      link: "https://instagram.com/ashutosh.gaurav_",
      icon: FaInstagram,
    },
  ];

  const links = [
    { title: "Home", href: "/" },
    { title: "Skills", href: "/skills" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
    { title: "Services", href: "/services" },
    { title: "Blog", href: "/blog" },
  ];

  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <Link
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <Icons.logo className="h-6 w-6" />
            Ashutosh Gaurav
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          {followUS.map((item) => (
            <div key={item.name} className="flex">
              <Link
                rel="noreferrer noopener"
                href={item.link}
                className="opacity-60 hover:opacity-100 flex items-center gap-2"
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Links</h3>

          {links.map((item) => (
            <div key={item.title}>
              <Link
                rel="noreferrer noopener"
                href={item.href}
                className="opacity-60 hover:opacity-100"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Pricing
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/as-ga"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Ashutosh Gaurav
          </a>
        </h3>
      </section>
    </footer>
  );
};
