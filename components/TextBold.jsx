import HeroStyle from "../styles/hero.module.css";

export default function TextBold({ children, className }) {
  return (
    <div className={className}>
      <p className={`${HeroStyle.shadow} hidden dark:flex ${HeroStyle.text12}`}>
        {children}
      </p>
      <p
        className={`${HeroStyle.shadowdark} flex  dark:hidden ${HeroStyle.text12}`}
      >
        {children}
      </p>
    </div>
  );
}
