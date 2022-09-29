import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Footer from "../components/Footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="border-4  border-purple-600 w-full">
      <Component {...pageProps} />;
      <Footer />
    </div>
  );
};

export default MyApp;
