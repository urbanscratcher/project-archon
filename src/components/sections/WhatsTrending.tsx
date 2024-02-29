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
          <div className={`flex flex-col gap-4 border-r border-r-sky-700 pr-4`}>
            <div className="relative aspect-video overflow-hidden rounded-2xl p-5">
              <Image src="/test.webp" fill alt="" className={`object-cover`} />
            </div>
            <Tag tagName="narrative" />
            <h2 className="font-serif">
              Marvels Of Modern Architecture: Inspiring Structures Shaping Our
              Cities
            </h2>
            <p className="text-xl tracking-wide">
              In a world marked by fleeting trends and rapid transformations,
              one element stands as a testament to enduring artistry:
              architecture.
            </p>
            <div className="flex gap-1">
              <p>{`Nov 2, 2022`}</p>
              <p>·</p>
              <p>{`2 min read`}</p>
            </div>
            <div className={`flex items-center gap-2`}>
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-sky-700 object-cover">
                <Image src="/test.webp" fill alt="avatar" />
              </div>
              <p>Sophia Miller</p>
            </div>
          </div>

          <div className={`border-r border-r-sky-700`}>
            <ul>
              <li className="border-b-g-300 mx-4 flex gap-2 border-b py-4">
                <div className="flex w-1/2 flex-col gap-2">
                  <Tag tagName={"urban"} />
                  <h4 className="font-serif capitalize">
                    Architectural Innovations Shape Urban Renewal And Cityscapes
                  </h4>
                  <p className="text-g-700 capitalize tracking-wider">
                    By Sophia Miller
                  </p>
                </div>
                <div className="relative aspect-square w-1/2 overflow-hidden rounded-xl">
                  <Image
                    src="/test.webp"
                    alt=""
                    className="object-cover"
                    fill
                  />
                </div>
              </li>
              <li className="border-b-g-300 mx-4 flex gap-2 border-b py-4">
                <div className="flex w-1/2 flex-col gap-2">
                  <Tag tagName={"urban"} />
                  <h4 className="font-serif capitalize">
                    Architectural Innovations Shape Urban Renewal And Cityscapes
                  </h4>
                  <p className="text-g-700 capitalize tracking-wider">
                    By Sophia Miller
                  </p>
                </div>
                <div className="relative aspect-square w-1/2 overflow-hidden rounded-xl">
                  <Image
                    src="/test.webp"
                    alt=""
                    className="object-cover"
                    fill
                  />
                </div>
              </li>
              <li className="border-b-g-300 mx-4 flex gap-2 border-b py-4">
                <div className="flex w-1/2 flex-col gap-2">
                  <Tag tagName={"urban"} />
                  <h4 className="font-serif capitalize">
                    Architectural Innovations Shape Urban Renewal And Cityscapes
                  </h4>
                  <p className="text-g-700 capitalize tracking-wider">
                    By Sophia Miller
                  </p>
                </div>
                <div className="relative aspect-square w-1/2 overflow-hidden rounded-xl">
                  <Image
                    src="/test.webp"
                    alt=""
                    className="object-cover"
                    fill
                  />
                </div>
              </li>
              <li className=" mx-4 flex gap-2 py-4">
                <div className="flex w-1/2 flex-col gap-2">
                  <Tag tagName={"urban"} />
                  <h4 className="font-serif capitalize">
                    Architectural Innovations Shape Urban Renewal And Cityscapes
                  </h4>
                  <p className="text-g-700 capitalize tracking-wider">
                    By Sophia Miller
                  </p>
                </div>
                <div className="relative aspect-square w-1/2 overflow-hidden rounded-xl">
                  <Image
                    src="/test.webp"
                    alt=""
                    className="object-cover"
                    fill
                  />
                </div>
              </li>
            </ul>
          </div>
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
