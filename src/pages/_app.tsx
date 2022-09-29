import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Navbar from "../components/Navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="bg-stone-900 w-full h-[100vh]">
      <Navbar />
      <Component {...pageProps} />;
    </div>
  );
};

export default MyApp;
