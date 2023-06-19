// import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import "./page.css";
import React from "react";

const Navbar = () => {
    return (
        <header className="bg-grey-100">
            <nav className="flex">
                <a href="/" className="mx-auto flex items-center">
                    <span className=" flex gap-4 items-center">
                        <FontAwesomeIcon icon={faDev} size="2xl" style={{ color: "green" }}></FontAwesomeIcon>
                        <span className="font-logo text-4xl">Sarthy</span>
                    </span>
                </a>
                <ul className="mx-auto flex items-center ">
                    <a href="/">
                        <li className="p-5 xl:p-8 active">Home</li>
                    </a>
                    <a href="/projects">
                        <li className="p-5 xl:p-8">Projects</li>
                    </a>
                    <a href="/about">
                        <li className="p-5 xl:p-8">About</li>
                    </a>
                    <a href="/contact">
                        <li className="p-5 xl:p-8">Contact</li>
                    </a>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
