const Button = ({ children, className, onClick }) => {
  return (
    <button className={`text-5xl ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
