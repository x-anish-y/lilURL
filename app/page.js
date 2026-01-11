"use client";
import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-BoldItalic.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {

  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        seturl("")
        setshorturl("")
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        console.log(result)
        alert(result.message);
      })
        .catch((error) => console.error(error));
  }

  return (
    <div className={`container mx-auto ${poppins.className}`}>
      <div className="absolute bg-[#f3f3f3] w-[35vw] h-[34vh] ml-[22.5vw] mt-[44vh] z-4">
        <img
          src="https://adespresso.com/wp-content/uploads/2022/06/url-shortener.jpg"
          alt=""
          width={273}
          className="mx-auto rounded-lg mt-1"
        />

        <div className="flex flex-col items-center justify-center mt-5 space-y-4">
          <input
            type="text"
            value={url}
            onChange={(e) => seturl(e.target.value)}
            className="w-[20vw] h-10 rounded-md pl-3 bg-[#e1ddff]"
            placeholder="Enter URL here"
          />

          <input
            type="text"
            value={shorturl}
            onChange={(e) => setshorturl(e.target.value)}
            className="w-[20vw] h-10 rounded-md pl-3 bg-[#e1ddff]"
            placeholder="Enter shortURL here"
          />

          <button onClick={generate} className="w-[20vw] inline-flex h-12 items-center justify-center rounded-md border bg-gradient-to-t from-[#8678f9] to-[#c7d2fe] px-6 font-medium text-white">
            Submit
          </button>
        </div>
      </div>

      <div className="flex justify-center mx-auto">
        <img src="./Hero.png" width={1200} alt="" />
      </div>

      {generated && <code className="text-left ml-[16vw] mt-4 block text-lg">
        <h1 className="text-2xl font-bold">Your Links:</h1>
        <Link target="_blank" href={generated}>{generated}</Link>
        </code>}
    </div>
  );
}
