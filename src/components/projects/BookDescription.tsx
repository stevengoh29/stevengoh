import React from 'react'

const BookDescription = () => {
    return (
        <div className='text-sm'>
            <p>Websites enabling students to purchase the books via online and payment through <b>BCA Virtual Account</b>. The data is integrated with the previous project (Global School Management). Hence, the orders and payment will also be seen by the school's staff.</p>
            <ul className="list-inside list-disc">
                <li>It will greatly reduces the number of queue in school's store.</li>
                <li>It is easier to recap the sales and stocks of the books since it is all recorded in the system.</li>
                <li>System will help to reduce the big mess (i.e. arrange the orders' queue) when there are a large number of orders.</li>
                <li>Just one click, users can see the summary of book sales' income</li>
            </ul>
            <br/>
            <p>Tech stacks:</p>
            <ul className="list-inside list-disc">
                <li>C# Window Forms for the school's staff.</li>
                <li>NextJS for the website frontend.</li>
                <li>Express (written in Typescript) for constructing BCA VA and websites API</li>
                <li>MySQL 8</li>
                <li>VPS CentOS 8 for hosting the database, website, and API</li>
            </ul>
        </div>
    )
}

export default BookDescription
