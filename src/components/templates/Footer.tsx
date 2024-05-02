import { BsTwitterX } from "react-icons/bs";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
} from "react-icons/io5";
import SectionHead from "../SectionHead";
import Logo from "../organisms/Logo";
import NewsletterForm from "../organisms/NewsletterForm";
import Link from "next/link";

function Footer() {
  const menu = [
    { name: "insights", url: "/insights" },
    { name: "authors", url: "/authors" },
    { name: "bookmarks", url: "/bookmarks" },
    { name: "setting", url: "/settings" },
  ];

  const allTopics = [
    {
      idx: 1,
      name: "residential",
    },
    { idx: 2, name: "landscape" },
    { idx: 3, name: "narrative" },
    { idx: 4, name: "commercial" },
    { idx: 5, name: "interior" },
  ];

  return (
    <footer className="mx-4 flex flex-col items-center gap-6 border-t border-t-g-300 py-16 sm:mx-6">
      <div className={`h-auto w-[200px] self-start`}>
        <Logo />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-5 lg:grid-cols-[3fr_2fr_1fr_1fr_3fr]">
        <div className="flex flex-col gap-4 sm:col-span-full lg:col-span-1">
          <p
            className={`text-[17px] font-semibold leading-[1.263] tracking-[0.5px] text-g-700`}
          >
            Welcome to ArchOn - Where Imagination Builds
          </p>
          <p
            className={`text-[15px] leading-[1.333] tracking-[0.25px] text-g-700`}
          >
            We believe in the power of imagination to shape a better tomorrow.
            Our team of visionary writers, architects, and urban planners
            curates a diverse collection of articles, interviews, and visual
            journeys that delve into the minds of the brightest creatives in the
            field.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:col-span-full lg:col-span-1">
          <SectionHead>information</SectionHead>
          <address className="text-g-700">
            1234 Elm Street, Cityville, Stateville 56789, Architopia Land
          </address>
          <p className="text-g-700">support@archon.com</p>
          <p className="text-g-700">(555) 123 4567</p>
          <ul className="flex gap-4 text-[17px] text-g-700">
            <li className="transition-colors hover:cursor-pointer hover:text-g-950">
              <IoLogoFacebook />
            </li>
            <li className="transition-colors hover:cursor-pointer hover:text-g-950">
              <IoLogoPinterest />
            </li>
            <li className="scale-90 transition-colors hover:cursor-pointer hover:text-g-950">
              <BsTwitterX />
            </li>
            <li className="transition-colors hover:cursor-pointer hover:text-g-950">
              <IoLogoInstagram />
            </li>
          </ul>
        </div>
        <div className="">
          <SectionHead>menu</SectionHead>
          <ul className="flex flex-col gap-1">
            {menu.map((m) => (
              <li key={m.name}>
                <Link
                  href={m.url}
                  className="uppercase text-g-700 transition-colors hover:text-g-950"
                >
                  {m.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <SectionHead>topics</SectionHead>
          <ul className="flex flex-col gap-1">
            {allTopics.map((t) => (
              <li key={t.name}>
                <Link
                  href={`/insights?topics=${t.name.toLowerCase()}`}
                  className="capitalize text-g-700 transition-colors hover:text-g-950"
                >
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:col-span-3 lg:col-span-1">
          <SectionHead>newsletter</SectionHead>
          <NewsletterForm primary={false} />
        </div>
      </div>
      <p className="pt-10 text-[13px] tracking-[0.4px] text-g-700">
        © 2024 Developed and Designed by Hyunjung Joun. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
