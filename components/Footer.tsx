"use client";
import { useRouter } from "next/navigation";
import React from "react";
export default function Footer() {
  const router = useRouter();
  return (
    <footer className="text-white w-full py-8 px-1 lg:px-4 border-t border-[#4e4d4d] text-center mt-16  self-end ">
      <p className="text-xs font-light flex flex-col ">
        <span className="font-semibold">Disclaimer:</span>
        JAV4You.fun does not store any content on our servers. All content
        provided on this website such as image, video and audio&apos;s is hosted
        by non-affiliated third-party website and is publicly available on the
        internet. We do not upload, control, or manage any of the content and
        take no responsibility for its availability, legality, or accuracy. If
        you believe any content violates copyright or other regulations, please
        contact the respective hosting provider directly. By using this website,
        you acknowledge and agree to these terms.
      </p>

      <div className="flex gap-3 justify-center mt-2">
        <button
          className="underline"
          onClick={() =>
            router.push(`${process.env.NEXT_PUBLIC_URL}/privacy-and-policy`)
          }
        >
          Privacy and Policy.
        </button>

        <button
          className="underline"
          onClick={() => router.push(`${process.env.NEXT_PUBLIC_URL}/dmca`)}
        >
          DMCA
        </button>
      </div>
    </footer>
  );
}
