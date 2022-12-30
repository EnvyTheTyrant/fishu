import Head from "next/head";
import Banner from "../components/Banner";
import DLimg from "../components/DLimg";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Fishu Site</title>
      </Head>
      <div>
        <main className=" ">{children}</main>
        <div className=" w-[100vw] absolute top-[50vh] mx-auto overflow-hidden">
          <Banner className="w-max pointer-events-none" duration="300s">
            <div className="flex relative gap-6 px-6 opacity-60">
              <DLimg name="fish-1" className=" h-[40vh]" />
              <DLimg name="fish-2" className=" h-[40vh]" />
              <DLimg name="jellyfish-1" className=" h-[40vh]" />
              <DLimg name="octopus-2" className=" h-[40vh]" />
            </div>
          </Banner>
        </div>
      </div>
    </div>
  );
};

export default Layout;
