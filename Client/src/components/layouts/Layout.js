import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
        </Helmet>
        <Header />
        <main style={{ minHeight: "70vh" }}>
          <ToastContainer />
          {children}
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};
Layout.defaultProps = {
  title: "Newcastle AutoParts - shop now",
  description: "mern stack projecttttt",
  keywords: "mern,react,node,mongodb",
  author: "Samrat Mallaa",
};

export default Layout;
