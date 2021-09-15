import React from 'react'

const WorkListing = ({ company, jobTitle, yearStart, yearEnd, city, children }) => {
    return (
        <div className="work-listing">
            <h5 className="text-sans text-muted">{yearStart}{yearEnd ? `- ${yearEnd}` : null}</h5>
            <h3 className="text-sans text-upper">{company}</h3>
            <h4 className="text-muted">{jobTitle} | {city}</h4>
            <p>{children}</p>
        </div>
    )
}

export default WorkListing
