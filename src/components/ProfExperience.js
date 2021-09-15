import React from "react";
import WorkListing from "./WorkListing";

const ProfExperience = () => {
  return (
    <section>
      <div>
        <h2 className="text-sans text-blue text-upper text-spaced">
          Professional Experience
        </h2>
        <WorkListing
          company="Self-Employed"
          jobTitle="Software Developer"
          yearStart="2020"
          yearEnd="Present"
          city="Wilmington, NC"
        >
          Freelance web app developer with a focus on Javascript, both
          client-side and Node.
        </WorkListing>
        <WorkListing
          company="Self-Employed"
          jobTitle="Freelance Musician"
          yearStart="2007"
          yearEnd="2021"
          city="East Coast, US"
        >
          Freelance trumpeter and pianist working primarily in Eastern North and
          South Carolina. Throughout my career I played with numerous
          professional symphony orchestras, Broadway pit orchestras, and
          national touring acts including Grammy-winning pop artists.
        </WorkListing>
        <WorkListing
          company="BAU Print & Mail"
          jobTitle="Graphic Designer"
          yearStart="2017"
          yearEnd="2018"
          city="Wilmington, NC"
        >
          Graphic Designer for a direct-mail marketing company. In addition to
          designing mail pieces, my responsibilities also included pre-press
          work and maintaining the company's web presence. During my time at
          BAU, I learned Javascript, PHP, and MySQL and built an online
          reservation system which is still in use at the company today.
        </WorkListing>
        <WorkListing
          company="Action Printing & Graphics"
          jobTitle="Graphic Designer"
          yearStart="2015"
          yearEnd="2017"
          city="Wilmington, NC"
        >
          Graphic Designer for a commercial printing company servicing a wide
          variety of business clients including UNC Wilmington, Cape Fear
          Community College, IKA, Bayer Pharmaceuticals, and City of Wilmington
          Government.
        </WorkListing>
      </div>
    </section>
  );
};

export default ProfExperience;
