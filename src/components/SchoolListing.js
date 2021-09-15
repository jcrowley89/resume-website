import React from 'react'

const SchoolListing = ({ school, major, city, dateStart, dateEnd, children }) => {
    return (
        <div className="school-listing">
            <h5 className="text-sans text-muted">{dateStart}{dateEnd ? `- ${dateEnd}` : null}</h5>
            <h3 className="text-sans text-upper">{school}</h3>
            <h4 className="text-muted">{major} | {city}</h4> 
            {children}
        </div>
    )
}

export default SchoolListing
