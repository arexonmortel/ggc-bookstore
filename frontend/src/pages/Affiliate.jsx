import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Affiliate() {
    return (
<div className="flex flex-col min-h-screen">
  <Navigation />
  <div className="flex-grow"> {/* This div expands to fill remaining vertical space */}
  <p>Affiliate Page</p>
      
  </div>
  <Footer />
</div>
    );
  }
  
  export default Affiliate;
  