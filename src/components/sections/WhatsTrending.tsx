import { BsTwitterX } from "react-icons/bs";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
} from "react-icons/io5";
import SectionContainer from "../SectionContainer";
import SectionHeading from "../SectionHeading";
import SubSectionContainer from "../SubSectionContainer";
import ViewAll from "../ViewAll";
import NewsletterForm from "../modules/NewsletterForm";
import TrendingInsightsList from "../modules/TrendingInsightsList";

function WhatsTrending() {
  const sns = [
    { name: "facebook", icon: <IoLogoFacebook />, followers: "571k" },
    { name: "pinterest", icon: <IoLogoPinterest />, followers: "157k" },
    {
      name: "twitter",
      icon: <BsTwitterX className="scale-90" />,
      followers: "665k",
    },
    { name: "instagram", icon: <IoLogoInstagram />, followers: "1.5m" },
  ];

  return (
    <SectionContainer className="bg-y-100 grid grid-cols-4 grid-rows-[auto_auto_auto] gap-4 text-sky-700">
      <section className="col-start-1 col-end-4 row-span-full">
        <SectionHeading className="flex justify-between">
          what&apos;s trending
          <ViewAll to={"/insights"} />
        </SectionHeading>
        <div className={`grid grid-cols-[2fr_1fr] `}>
          {/* @ts-expect-error Async Server Component */}
          <TrendingInsightsList />
        </div>
      </section>
      <SubSectionContainer
        className={`col-start-4 col-end-5 row-start-1 row-end-2`}
      >
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
      </SubSectionContainer>
      <SubSectionContainer className="col-start-4 col-end-5 row-start-2 row-end-3">
        <SectionHeading>Newsletter</SectionHeading>
        <NewsletterForm />
      </SubSectionContainer>
    </SectionContainer>
  );
}

export default WhatsTrending;
