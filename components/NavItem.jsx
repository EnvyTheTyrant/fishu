import Link from "next/link";

const NavItem = ({ text, href }) => {
  return (
    <Link
      href={href}
      className=" font dark:text-white text-gray-400 font-[NG-Light] inline-block text-xl relative cursor-pointer transition-all duration-200 before:content-[''] before:absolute before:-bottom-[11px] before:left-1/2 before:-translate-x-1/2 before:w-0 before:bg-gray-900 dark:before:bg-white before:h-[1px] before:rounded-full before:opacity-0 before:transition-all before:duration-200 hover:before:w-full hover:before:opacity-100 h-full"
    >
      {text}
    </Link>
  );
};
export default NavItem;
