import "../styles/globals.css";
import Navbar from "./Navbar";
// import '../styles/style.css'


function MyApp({ Component, pageProps }) {
;
  // console.log("I m Next js")
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
