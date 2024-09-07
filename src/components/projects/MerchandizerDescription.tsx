import React from 'react'

const MerchandizerDescription = () => {
    return (
        <div className='text-sm'>
            <p>
                This application has an average of 600-800 merchandizers that will work on various outlet/store in whole Malaysia. We helped our client, Jump Retail - one of the biggest retail field force management in Malaysia, to manage all projects better with its various task assigned to their hundreds of merchandizers.
            </p>
            <br />
            <p>Main Feature of application:</p>
            <ul className="list-inside list-disc">
                <li>Application is meant for the merchandizer who will work based on their assignments</li>
                <li>Besides of some methods, the application modules can run on offline mode</li>
                <li>Automatic sync data with the backend every certain time and when checkout from outlet</li>
                <li>Implemented expo sentry to help monitoring on real time application's health</li>
            </ul>
            <br />
            <p>Tech stacks:</p>
            <ul className="list-inside list-disc">
                <li>React Native</li>
                <li>Redux</li>
                <li>SQLite</li>
            </ul>
        </div>
    )
}

export default MerchandizerDescription
