import {
    Outlet,
} from "react-router-dom";


import keyhole from './key-hole-medium.png';

function Layout() {
    return (
        <div>
            <div className="h-150 p-10 flex flex-col items-center">
                <div className="text-6xl font-logo text-white">Let's Authenticate</div>
                <img className="w-[60px]" alt="Let's Authenticate logo, a key hole" src={keyhole} />
            </div>
            <main className="flex flex-col items-center bg-black min-h-screen text-white pt-[50px]">
                <Outlet />
            </main>

        </div>
    );
}

export default Layout;

