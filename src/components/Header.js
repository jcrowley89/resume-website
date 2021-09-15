import React from "react";
import headshot from "../headshot.jpg";
import SocialLinks from "./SocialLinks";



const Header = () => {
  return (
    <header id="mainHeader" className="flex-center text-center">
      <div>
        <img id="headShot" src={headshot} className="shadow" alt="Headshot" />
        <h1 className="text-sans text-red text-upper text-spaced">John Crowley</h1>
        <h2 className="text-serif text-blue"><em>Full-Stack Developer &amp; Designer</em></h2>
        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;
