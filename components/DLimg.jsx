export default function DLimg({ name, className }) {
  return (
    <div className="">
      <img
        src={`/img/ordered/dark/${name}.png`}
        className={`${className} w-full dark:hidden`}
        alt=""
      />
      <img
        src={`/img/ordered/dark/${name}.png`}
        className={`${className} w-full dark:flex hidden`}
        alt=""
      />
    </div>
  );
}
