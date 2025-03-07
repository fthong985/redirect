import Image from "next/image";
import { ReactNode } from "react";

export default function RootInfo() {
  return (
    <div className=" w-full text-gray-300 flex flex-col gap-6 sm:gap-8">
      <div className="flex flex-col gap-1">
        {/* mini logo  */}
        <Image
          src={"/jav4you_logo_v2.png"}
          alt="Jav4u mini logo"
          width={100}
          height={52}
          className="mx-auto mb-1"
        />

        <Paragraph>
          Jav4You is a free online platform that allows users to watch and
          download JAV videos directly from the internet. The website acts as a
          search engine for video, Once you find the JAV code you want, Jav4You
          will provides the video and option to download in different quality.
        </Paragraph>
      </div>

      {/* How Does Jav4You Work  */}
      <div className="flex flex-col gap-1">
        <Title>How Does Jav4You Work?</Title>
        <Paragraph>
          Jav4You works by searching the JAV code, Actress ,Genre etc... and it
          will automatically serve the video for you. Here&apos;s how it works
          step-by-step:
        </Paragraph>

        <ul className="mt-2 list-decimal px-8 flex flex-col gap-2">
          <List>
            Enter any JAV Video ,Code, Actress ,Genre etc... you are looking
            for. <br />
            example: MIAA-230 <br />
            example: Yua Mikami <br />
            example: Pretty Girl etc...
          </List>

          <List>Click the search icon or hit Enter.</List>
          <List>
            Jav4You will search your query and display the result in if found.
          </List>
        </ul>
      </div>

      {/* How to download  */}
      <div className="flex flex-col gap-1">
        <Title>How to Download a Video?</Title>
        <Paragraph>
          You can download JAV videos easily, after searching the video,
          download button will appear automatically.
        </Paragraph>

        <ul className="mt-2 list-decimal px-8 flex flex-col gap-2">
          <List>
            Click the download button and modal will appear right after, Click
            proceed and you will be redirected to a third party website where
            you can download the video faster, just click the &apos;start&apos;
            button to start the download .
          </List>

          <List>
            Choose a video quality, and click start, wait for the server to
            parse the video. Parsing video will not consume your data.
          </List>

          <List>
            Click the Download button and it should start to download.
          </List>
        </ul>
      </div>
    </div>
  );
}

export function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm leading-tight sm:text-base sm:leading-[1.2]">
      {children}
    </p>
  );
}

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-base font-bold  tracking-wide sm:text-xl">
      {children}
    </h2>
  );
}

export function List({ children }: { children: ReactNode }) {
  return <li className="text-xs sm:text-sm">{children}</li>;
}
