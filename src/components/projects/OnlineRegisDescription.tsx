import React from 'react'

const OnlineRegisDescription = () => {
  return (
    <div className='text-sm'>
      <p>This application has successfully registered 800-1000 new students on this 2024's academic term. This projects will let new students to register via online and payment through <b>BCA Virtual Account</b>. The data is integrated with the desktop app (Global School Management). Hence, the orders and payment will also be seen by the school's staff.</p>
      <ul className="list-inside list-disc">
        <li>New students don't have to come to school for registration anymore. Via online is enough</li>
        <li>System will automatically handles all the new students's process to be included to the next academic terms</li>
        <li>Integration of registration reports to desktop app (Global School Management)</li>
      </ul>
      <br />
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

export default OnlineRegisDescription
