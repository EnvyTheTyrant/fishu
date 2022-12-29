import NavItem from "./NavItem";

const Navbar = ({ flex }) => {
  return (
    <div className={`h-full flex flex-${flex} items-center gap-4`}>
      <NavItem text="About" href="/who-am-i" />
      <NavItem text="Projects" href="/stuff-i-did" />
      {/* <NavItem text="About" href="/about" /> */}
      <NavItem text="Contact" href="/call-me" />
    </div>
  );
};
export default Navbar;
