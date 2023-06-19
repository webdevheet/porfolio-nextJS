// import Image from "next/image";
import Navbar from "./Navbar/page";
import HomePage from "./Home/page";
export default function Home() {
    return (
        <div className="bg-gradient-to-t from-gray-700 via-gray-900 to-black">
            <Navbar />

            <HomePage />
        </div>
    );
}
