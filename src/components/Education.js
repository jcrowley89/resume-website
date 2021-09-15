import React from "react";
import SchoolListing from "./SchoolListing";

const Education = () => {
  return (
    <section>
      <div>
        <h2 className="text-sans text-blue text-upper text-spaced">
          Education
        </h2>
        <SchoolListing
          school="Empower Software Bootcamp"
          major="Full-Stack Software Development"
          city="Winston-Salem, NC"
          dateStart="2021"
        >
          <p>Selected as one of 23 from over 500 applicants to this full-stack training program.</p>
        </SchoolListing>
        <SchoolListing
          school="University of North Carolina at Wilmington"
          major="Classical Music Performance - Trumpet"
          city="Wilmington, NC"
          dateStart="2009"
          dateEnd="2013"
        >
          <p>
            Recipient: Cape Fear Jazz Society Scholarship, Verizon Wireless VZW
            Scholarship
          </p>
          <p>Winner: 2012 Richard R. Deas Concerto Competition</p>
        </SchoolListing>
        <SchoolListing
          school="North Carolina School of the Arts"
          major="Classical Music Performance - Trumpet"
          city="Winston-Salem, NC"
          dateStart="2005"
          dateEnd="2007"
        >
          <p>Recipient: Chancellor’s Scholarship, WSS Scholarship</p>
        </SchoolListing>
        <SchoolListing
          school="North Carolina School of the Arts (High School)"
          major="Classical Music Performance - Trumpet"
          city="Winston-Salem, NC"
          dateStart="2005"
          dateEnd="2007"
        >
          <p>Attended on full scholarship for tuition, room, and board.</p>
        </SchoolListing>
      </div>
    </section>
  );
};

export default Education;
