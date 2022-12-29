import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Fishu Site</title>
      </Head>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
