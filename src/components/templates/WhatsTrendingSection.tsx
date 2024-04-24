import SectionContainer from "../SectionContainer";
import NewsletterSection from "./NewsletterSection";
import StayConnectedSection from "./StayConnectedSection";
import TrendingSection from "./TrendingSection";

function WhatsTrendingSection() {
  return (
    <SectionContainer
      className="grid grid-cols-1 gap-6 bg-y-100 text-sky-700
    sm:grid-cols-2
    lg:grid-cols-4 lg:grid-rows-[1fr_auto]
    xl:grid-rows-[auto_auto_auto]"
    >
      <TrendingSection
        className="
      col-span-full lg:col-start-1 lg:row-span-full
      xl:col-end-4"
      />
      <StayConnectedSection
        className="
      lg:col-start-1 lg:col-end-3
      xl:col-start-4 xl:col-end-5 xl:row-start-1 xl:row-end-2"
      />
      <NewsletterSection
        className="
        lg:col-start-3 lg:col-end-5
      xl:col-start-4 xl:col-end-5 xl:row-start-2 xl:row-end-3"
      />
    </SectionContainer>
  );
}

export default WhatsTrendingSection;
