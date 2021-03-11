import React from "react";
import { render } from "react-dom";
import NavigationWeb from "./NavigationWeb";
import "bootstrap/dist/css/bootstrap.min.css";
import SectionWeb from "./SectionWeb";
import Creator from "./Creator";
import Feature from "./Feature";
import Testimoni from "./Testimoni";
import Footer from "./Footer";

const App = () => {
  return (
    <React.StrictMode>
      <div className="primary-color m0 p0">
        <NavigationWeb />
        <SectionWeb />
      </div>
      <div className="creator m0 p0">
        <Creator />
      </div>
      <div className="feature m0 p0">
        <Feature />
      </div>
      <div className="testimoni m0 p0">
          <Testimoni />
      </div>
      <div className="footer m0 p0">
          <Footer />
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
