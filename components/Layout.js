import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="min-w-[370px]">
      <Head>
        <title>Aribnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
