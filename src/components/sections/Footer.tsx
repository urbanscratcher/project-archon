import { BsTwitterX } from "react-icons/bs";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
} from "react-icons/io5";
import SectionHeading from "../SectionHeading";
import Logo from "../modules/Logo";
import NewsletterForm from "../modules/NewsletterForm";

function Footer() {
  const menu = [
    { name: "insights", url: "/insights" },
    { name: "authors", url: "/authors" },
    { name: "bookmarks", url: "/bookmark" },
    { name: "settings", url: "/settings" },
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
    <footer className="border-t-g-300 mx-6 flex flex-col items-center gap-6 border-t py-16">
      <div className={`h-auto w-[200px] self-start`}>
        <Logo />
      </div>
      <div className="flex gap-6">
        <div className="flex basis-[30%] flex-col gap-4">
          <p
            className={`text-g-700 text-[17px] font-semibold leading-[1.263] tracking-[0.5px]`}
          >
            Welcome to ArchOn - Where Imagination Builds
          </p>
          <p
            className={`text-g-700 text-[15px] leading-[1.333] tracking-[0.25px]`}
          >
            We believe in the power of imagination to shape a better tomorrow.
            Our team of visionary writers, architects, and urban planners
            curates a diverse collection of articles, interviews, and visual
            journeys that delve into the minds of the brightest creatives in the
            field.
          </p>
        </div>
        <div className="flex basis-[20%] flex-col gap-3">
          <SectionHeading>information</SectionHeading>
          <address className="text-g-700">
            1234 Elm Street, Cityville, Stateville 56789, Architopia Land
          </address>
          <p className="text-g-700">support@archon.com</p>
          <p className="text-g-700">(555) 123 4567</p>
          <ul className="text-g-700 flex gap-4 text-[17px]">
            <li className="hover:text-g-950 transition-colors hover:cursor-pointer">
              <IoLogoFacebook />
            </li>
            <li className="hover:text-g-950 transition-colors hover:cursor-pointer">
              <IoLogoPinterest />
            </li>
            <li className="hover:text-g-950 scale-90 transition-colors hover:cursor-pointer">
              <BsTwitterX />
            </li>
            <li className="hover:text-g-950 transition-colors hover:cursor-pointer">
              <IoLogoInstagram />
            </li>
          </ul>
        </div>
        <div className="flex-grow">
          <SectionHeading>menu</SectionHeading>
          <ul className="flex flex-col gap-1">
            {menu.map((m, idx) => (
              <li key={m.name}>
                <button className="text-g-700 hover:text-g-950 uppercase transition-colors">
                  {m.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-grow">
          <SectionHeading>topics</SectionHeading>
          <ul className="flex flex-col gap-1">
            {allTopics.map((t, idx) => (
              <li key={t.name}>
                <button className="text-g-700 hover:text-g-950 capitalize transition-colors">
                  {t.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-1/5">
          <SectionHeading>newsletter</SectionHeading>
          <NewsletterForm isPrimary={false} />
        </div>
      </div>
      <p className="text-g-700 pt-10 text-[13px] tracking-[0.4px]">
        © 2024 Developed and Designed by Hyunjung Joun. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
