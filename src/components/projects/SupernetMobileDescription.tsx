import React from 'react'

const SupernetMobileDescription = () => {
    return (
        <div className='text-sm'>
            <p>This application are meant for the company's member to show informations about their downline and performance. Here are the overview of the application:</p>
            <ul className="list-inside list-disc">
                <li>Check the monthly point (based on purchase/downline performance) and rewards</li>
                <li>Check the members' downline</li>
                <li>Register a new member by application</li>
                <li>Online order for products</li>
                <li>Update profile data</li>
            </ul>
            <br />
            <p>Tech stacks:</p>
            <ul className="list-inside list-disc">
                <li>React Native</li>
                <li>Express (written in Typescript) for API</li>
                <li>Microsoft SQL Server</li>
                <li>Firebase Authentication</li>
            </ul>
        </div>
    )
}

export default SupernetMobileDescription
