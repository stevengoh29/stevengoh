import React from 'react'

const LedsmarthomeDescription = () => {
    return (
        <div className='text-sm'>
            <p>The web application to help the owner managing the online stores. Here are the overview of the application:</p>
            <ul className="list-inside list-disc">
                <li>Stock Management</li>
                <li>Purchase Management</li>
                <li>Sales Management</li>
                <li>Product Return Management</li>
                <li>Product Stock Adjustment</li>
                <li>Report and Dashboard</li>
            </ul>
            <br />
            <p>Tech stacks:</p>
            <ul className="list-inside list-disc">
                <li>NextJS</li>
                <li>Express (written in Typescript) for API</li>
                <li>MySQL 8</li>
                <li>VPS CentOS 8 for hosting application and database</li>
            </ul>
        </div>
    )
}

export default LedsmarthomeDescription
