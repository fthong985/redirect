// import { Logo } from "@/app/page";
import { Paragraph } from "@/components/RootInfo";
import { ReactNode } from "react";

export default function FAQ() {
  return (
    <div className="px-3 text-gray-300 flex flex-col gap-3">
      <div className="mb-5">{/* <Logo /> */}</div>

      <Title>Frequently Asked Question.</Title>

      <Title>Q1. Why am I getting no results for my search query?</Title>
      <Paragraph>
        <span className="italic">Answer: </span>
        It looks like you&apos;ve entered a code, actress or genre that
        doesn&apos;t exist or may be incorrect. Please double-check your query
        and try again.
      </Paragraph>

      <div className="border border-[#4e4d4d] my-2"></div>

      <Title>
        Q2. I&apos;m redirected to another page when I click download or play
        the video.
      </Title>
      <Paragraph>
        <span className="italic">Answer: </span>
        This is normal. Jav4You uses ads to cover the costs of running the site.
        Simply return to the Jav4You tab, and you can continue watching or
        downloading your video without losing progress.
      </Paragraph>

      <div className="border border-[#4e4d4d] my-2"></div>

      <Title>Q3. Why it takes time to load or its just loading?</Title>
      <Paragraph>
        <span className="italic">Answer: </span>
        There might be an issue with the server, which could be causing the
        delay in loading. Please try again later, and if the problem persists,
        consider checking your internet connection.
      </Paragraph>
    </div>
  );
}

function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-base font-bold tracking-wide sm:text-xl">{children}</h2>
  );
}
