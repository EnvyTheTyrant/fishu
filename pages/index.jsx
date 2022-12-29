import { useTheme } from "next-themes";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "../sections/Header";
import Button from "../components/Button";

const Home = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // const fishColor
  useEffect(() => setMounted(true));

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <Button onClick={() => setTheme("light")}>light theme</Button>;
    } else {
      return <Button onClick={() => setTheme("dark")}>dark theme</Button>;
    }
  };
  return (
    <div className=" mx-auto max-w-6xl dark1:bg-gray-900 min-h-screen ">
      <Head>
        <title>Fishu</title>
      </Head>
      {renderThemeChanger()}
      <Header />
      <img src={`/img/fish-1-dark.png`} alt="fish" className="dark:hidden" />
      <img
        src={`/img/fish-1-light.png`}
        alt="fish"
        className=" hidden dark:flex"
      />
    </div>
  );
};

export default Home;
