import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-6xl dark1:bg-gray-900 min-h-screen ">
      <Head>
        <title>Fishu</title>
      </Head>
      <Header />

      {/* Hero Section Light Begin */}
      <div className="text-5xl flex  items-center sm:text-6xl leading-[1] mx-auto sm:ml-16 mt-16 w-fit font-[Bosman-Stripes]">
        <div className="w-1/2 pt-16">
          <h1>
            BETTER SITE
            <br />
            BETTER PRESENCE
          </h1>
          <p className="text-2xl leading-[4] font-[Bosman-Black]">
            Get a website!
          </p>
        </div>

        <img src="/img/fish2-dark@4x.png" alt="asd" className="h-auto w-1/2" />
      </div>
      {/* Hero Section Light End */}
    </div>
  );
};

export default Home;
