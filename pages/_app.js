import Footer from "@/components/Footer";
import Menubar from "@/components/Menubar";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Search />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
