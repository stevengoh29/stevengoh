const EcommerceDescription = () => {
    return (
        <div className='text-sm'>
            <p>Creating a dummy ecommerce app to show how I mainly structure my code on react/react native project. <b className="bg-yellow-200 text-black">Application is not done yet since I only work on this when I have freetime. A lot of modules are not implemented yet.</b> However, components are mostly going to be used througout my application in the future.</p>
            <ul className="list-inside list-disc">
                <li>Redux and redux-persist for global state management</li>
                <li>Axios and its interceptor for fetching API to backend</li>
                <li>React query - integrating the useQuery and useMutation</li>
                <li>React Hook Forms</li>
                <li>Using own reusable Pagination Hooks, Dialog Hooks and other hooks</li>
            </ul>
            <br />
            <p>Tech stacks:</p>
            <ul className="list-inside list-disc">
                <li>NextJS 14 App Router</li>
                <li>NestJS - using TypeORM</li>
                <li>MySQL 8</li>
            </ul>
            <br />
            <p>Links:</p>
            <ul className="list-inside list-disc">
                <li><a href="https://github.com/stevengoh29/ecommerce-project" className="text-underline text-blue-500 font-bold visited:text-purple-500">Repository Github</a></li>
                <li><a href="https://ecommerce-project-kappa-ashy.vercel.app" className="text-underline text-blue-500 font-bold visited:text-purple-500">Website Link</a></li>
            </ul>
        </div>
    )
}

export default EcommerceDescription