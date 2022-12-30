export default function Banner({ children, className, duration }) {
  return (
    <div className={`Banner ${className}`}>
      <p className={`mar`}>{children}</p>
      <p className={`mar2 `}>{children}</p>
    </div>
  );
}
