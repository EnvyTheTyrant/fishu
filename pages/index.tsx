import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
      <div className="flex my-16 items-center">
        <div className="text-5xl sm:text-6xl w-1/2 leading-[1] mx-auto sm:ml-16 mt-16 font-[Bosman-Stripes]">
          <h1>
            BETTER SITE
            <br />
            BETTER PRESENCE
          </h1>
          <p className="text-2xl leading-[4] font-[Bosman-Black]">
            Get a website!
          </p>
        </div>
        <Image
          src="/../public/img/fish2-dark@4x.png"
          alt="whale"
          className=" h-auto w-1/2"
          width={400}
          height={400}
        />
      </div>

      {/* Hero Section Light End */}
      {/* <Image
        src="/../public/img/white-octopus-bgno.png"
        alt="Octopus"
        width={500}
        height={500}
      /> */}
    </div>
  );
};

export default Home;
