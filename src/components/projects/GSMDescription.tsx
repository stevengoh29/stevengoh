import React from 'react'

const GSMDescription = () => {
    return (
        <div className='text-sm'>
            <p>This application helps users to digitalize their business processes (i.e. incoming or outgoing cashflow, terms and student management) and mainly enables the students' to pay their school fee via <b>BCA Virtual Account</b>. Other benefits the clients got are:</p>
            <ul className="list-inside list-disc">
                <li>Just one click, the income summary of Virtual Account payment is generated.</li>
                <li>It significantly reduces the time required to check whether the students' have paid or not.</li>
                <li>Generate school fees bills with consideration for scholarship discounts.</li>
                <li>Integrated systems to all users means an easier task to get a summary of cashflows and others needed reports</li>
            </ul>
            <br/>
            <p>Tech stacks:</p>
            <ul className="list-inside list-disc">
                <li>C# Window Forms for the users.</li>
                <li>Express (written in Typescript) for constructing API for BCA VA </li>
                <li>MySQL 8</li>
                <li>VPS CentOS 8 for hosting the database and API</li>
            </ul>
        </div>
    )
}

export default GSMDescription
