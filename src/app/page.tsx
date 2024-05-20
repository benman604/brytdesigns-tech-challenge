"use client";

import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useState, useRef } from "react";

import Account from "./form-pages/account";
import Address from "./form-pages/address";
import Preferences from "./form-pages/preferences";

export default function Home() {
  const [page, setPage] = useState("Account");

  const savedData = useRef<Record<string, Record<string, string>>>({
    Account: {},
    Address: {},
    Preferences: {}
  });

  const nextPage = (data: Record<string, string>) => {
    savedData.current[page] = data;
    if (page === "Account") {
      setPage("Address");
    } else if (page === "Address") {
      setPage("Preferences");
    }
  };

  const prevoiusPage = (data: Record<string, string>) => {
    savedData.current[page] = data;
    if (page === "Address") {
      setPage("Account");
    } else {
      setPage("Address");
    }
  }

  const pages: Record<string, ReactElement> = {
    Account: <Account onNext={nextPage} savedData={savedData.current.Account} />,
    Address: <Address onNext={nextPage} onPrevious={prevoiusPage} savedData={savedData.current.Address} />,
    Preferences: <Preferences onNext={nextPage} onPrevious={prevoiusPage} savedData={savedData.current.Preferences} />,
  }

  return (
    <main>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-6">{page}</h1>
          <div className="w-100 p-6 bg-white shadow-md rounded-lg">
            {pages[page]}
          </div>
        </div>
      </div>
      {/* <h1 className="text-6xl">Hello {name} and good luck 😄!</h1>
      <h3 className="text-3xl font-semibold">
        For this one, please stick to React, Zod, CSS and tailwindcss! 💃
      </h3>
      <p>
        This template also has font awesome icon library installed as well. Feel
        free to use these icons{" "}
        <a
          className="text-blue-500 border-b-2 border-current w-[max-content] inline-flex gap-2 items-center"
          href="https://fontawesome.com/search?m=free&s=solid%2Cbrands%2Cregular"
          target="_blank"
          rel="noopener noreferrer"
        >
          Font Awesome
          <FontAwesomeIcon icon={faFontAwesome} />
        </a>{" "}
        or whatever icon library you want to use :3
      </p>
      <form>
        <input
          className="border-2 border-yellow-500 rounded p-4 text-2xl w-full dark:bg-black dark:text-gray-300 dark:placeholder:text-gray-400"
          name="name"
          placeholder="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </form> */}
    </main>
  );
}
