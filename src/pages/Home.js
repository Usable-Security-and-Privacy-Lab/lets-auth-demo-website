import useStore from '../store.js';
import { Link } from "react-router-dom";


function Home() {
    const loggedIn = useStore((state) => state.loggedIn);
    if (loggedIn())
        return (
            <div className="bg-black min-h-screen text-white pt-[100px] text-lg text-center">
                <div></div>
                <h1>
                    Welcome! You have logged in successfully!
                </h1>

                <p>Thank you for trying the Let's Authenticate system.</p>

            </div>
        );
    return (
        <div className="bg-black min-h-screen text-white pt-[100px] text-lg text-center">
            <div></div>
            <h1>
                Please <Link to='/register'>Register</Link> or <Link to='/sign-in'>Sign In</Link>
            </h1>
        </div>
    )
}

export default Home;

