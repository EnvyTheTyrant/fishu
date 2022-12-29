import Head from "next/head";
import Header from "../sections/Header";

const Home = () => {
  return (
    <div className=" mx-auto max-w-full px-12 sm:px-24 lg:px-0 lg:max-w-[832px] xl:max-w-6xl ">
      <Head>
        <title>Fishu</title>
      </Head>
      <Header />
    </div>
  );
};

export default Home;
