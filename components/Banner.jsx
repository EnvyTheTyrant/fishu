import Animation from "../styles/animation.module.css";
export default function Banner({ children, className, duration }) {
  return (
    <div className={`Banner ${className}`}>
      <div className={`mar`}>{children}</div>
      <div className={`mar2`}>{children}</div>
      <style jsx>{`
        .Banner {
          overflow: hidden;
          /* width: fit-content; */
          display: flex;
          position: relative;
        }

        .Banner .mar {
          transition: transform 1s;
          animation: mar linear infinite;
          animation-duration: ${duration};
        }
        .Banner .mar2 {
          transition: transform 1s;
          animation: mar2 linear infinite;
          animation-duration: ${duration};
          position: absolute;
        }

        @keyframes mar {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes mar2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
}
