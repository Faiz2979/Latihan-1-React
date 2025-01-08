import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="flex align-top justify-between items-center gap-10 rounded-md  p-4 bg-white text-blue-600">
            <h1 className="">My School</h1>
            <div className="links flex gap-10 text-2xl">
                <Link to="/">Home</Link>

                <Link to="/about">About</Link>
            </div>
        </nav>
    );
}

export default Navbar;