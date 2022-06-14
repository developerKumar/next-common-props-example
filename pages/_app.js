import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="nav">
        <Link href={"/"}>Home</Link>
        <Link href={"/test"}>Test</Link>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
