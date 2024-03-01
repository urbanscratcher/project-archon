import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
} from "react-icons/io5";
import SectionContainer from "../SectionContainer";
import SectionHeading from "../SectionHeading";
import Tag from "../Tag";
import ViewAll from "../ViewAll";
import TrendingInsightsList from "../modules/TrendingInsightsList";

function WhatsTrending() {
  const sns = [
    { name: "facebook", icon: <IoLogoFacebook />, followers: "571k" },
    { name: "pinterest", icon: <IoLogoPinterest />, followers: "157k" },
    { name: "twitter", icon: <BsTwitterX />, followers: "665k" },
    { name: "instagram", icon: <IoLogoInstagram />, followers: "1.5m" },
  ];

  return (
    <SectionContainer className="bg-y-100 grid grid-cols-4 grid-rows-[auto_auto_auto] gap-4 text-sky-700">
      <section className="col-start-1 col-end-4 row-span-full">
        <SectionHeading className="flex justify-between">
          whats trending
          <ViewAll />
        </SectionHeading>
        <div className={`grid grid-cols-[2fr_1fr] `}>
          <TrendingInsightsList />
        </div>
      </section>
      <section className="col-start-4 col-end-5 row-start-1 row-end-2 rounded-xl border border-sky-700 px-4 py-6">
        <SectionHeading>Stay Connected</SectionHeading>
        <ul className="flex flex-col gap-1">
          {sns.map((el) => (
            <li
              key={el.name}
              className="grid grid-cols-[min-content_min-content_auto_min-content] items-center gap-2"
            >
              {el.icon}
              <p className="capitalize">{el.name}</p>
              <p className="text-end uppercase">{el.followers}</p>
              <p>Followers</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="col-start-4 col-end-5 row-start-2 row-end-3 rounded-xl border border-sky-700 px-4 py-6">
        <SectionHeading>Newsletter</SectionHeading>
        <div className="flex flex-col gap-2">
          <p className="mb-2">
            Subscribe our newsletter to get the latest updates all about
            architecture
          </p>
          <input
            placeholder="Enter your full name"
            className="rounded-md border border-sky-700 bg-transparent px-2 py-1"
          />
          <input
            placeholder="Enter your email"
            className="rounded-md border border-sky-700 bg-transparent px-2 py-1"
          />
          <label className="my-3 text-sm">
            <input type="checkbox" />
            &nbsp; By signing up, you agree to our terms and privacy policy
          </label>
          <input
            type="submit"
            className="rounded-full bg-sky-700 py-3 text-[15px] font-medium uppercase tracking-[1.25px] text-white"
            value={"subscribe"}
          />
        </div>
      </section>
    </SectionContainer>
  );
}

export default WhatsTrending;
