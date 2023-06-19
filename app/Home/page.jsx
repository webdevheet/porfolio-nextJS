import React from "react";
import Image from "next/image";

const HomePage = () => {
    return (
        <main className="flex gap-5 mx-12">
            <section className="flex flex-col w-1/2 justify-center px-20">
                <p>Hola amigos</p>
                <span>Sum Software Developer</span>
                <p>
                    Welcome to my portfolio! I&apos;m a skilled software developer specializing in JavaScript, React.js,
                    and Next.js. With a passion for creating dynamic and user-friendly web applications, I strive to
                    deliver exceptional experiences through clean code and innovative solutions. Explore my projects to
                    see how I leverage my expertise in JSON, API development, AWS, and various software development
                    tools. Let&apos;s connect and discuss how I can contribute to your next software development
                    venture.
                </p>
            </section>

            <aside className="w-1/2">
                {/* <Image
                    src={"/main-illustration.jpg"}
                    alt="main-illustration"
                    className="z-0.5"
                    height={100}
                    width={800}
                /> */}
            </aside>
        </main>
    );
};

export default HomePage;
