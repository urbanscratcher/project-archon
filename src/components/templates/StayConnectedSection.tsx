import { BsTwitterX } from "react-icons/bs";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
} from "react-icons/io5";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import { type ReactElement } from "react";

type SnsType = {
  name: string;
  icon: ReactElement;
  followers: string;
};

const sns: SnsType[] = [
  { name: "facebook", icon: <IoLogoFacebook />, followers: "571k" },
  { name: "pinterest", icon: <IoLogoPinterest />, followers: "157k" },
  {
    name: "twitter",
    icon: <BsTwitterX className="scale-90" />,
    followers: "665k",
  },
  { name: "instagram", icon: <IoLogoInstagram />, followers: "1.5m" },
];

function StayConnectedSection({ className }: { className?: string }) {
  return (
    <SectionContainer border whitespace="sub" className={`${className || ""}`}>
      <SectionHead>Stay Connected</SectionHead>
      <ul className="flex flex-col gap-1">
        {sns.map((sns: SnsType) => (
          <li
            key={sns.name}
            className="grid grid-cols-[min-content_min-content_auto_min-content] items-center gap-2"
          >
            {sns.icon}
            <p className="capitalize">{sns.name}</p>
            <p className="text-end uppercase">{sns.followers}</p>
            <p>Followers</p>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}

export default StayConnectedSection;
