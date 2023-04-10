import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";
import Avatar from "../public/assets/avatar.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I specialize in all aspects of advanced web development, and my
            experience and expertise have made me a highly sought-after web
            developer. I am an experienced professional who is knowledgeable in
            user interface, testing, and debugging processes. I have a deep
            understanding of the design, installation, testing, and maintenance
            of web systems, and I bring forth a diverse and promising skill-set
            to every project I undertake.
          </p>
          <p className="py-2 text-gray-600">
            With proficiency in an assortment of technologies, including
            Node.js, Nest.js, TypeOrm, Docker, and MySQL, I am capable of
            building web systems that are tailored to meet the unique needs of
            my clients. My comprehensive understanding of web development
            ensures that I am equipped to handle any project, no matter how
            complex or challenging. Whether you need a new website built from
            scratch or an existing web system updated, I have the skills and
            experience necessary to deliver exceptional results that exceed your
            expectations.
          </p>
          <p className="py-2 text-gray-600">
            In short, I am a highly experienced and skilled web developer who
            specializes in advanced web development. With expertise in all
            stages of web development, a deep understanding of user interface,
            testing, and debugging processes, and a diverse skill-set that
            includes proficiency in a variety of technologies, I am the ideal
            choice for any web development project.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={Avatar} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
