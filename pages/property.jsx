import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import onlineBotArt from "../public/assets/projects/online-bot-art.png";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={onlineBotArt}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Online Shopping Automation Bot System</h2>
          <h3>Nest.JS/puppeteer/node.js</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The Online Shopping Automation System is an innovative project that
            leverages modern web technologies to create a seamless shopping
            experience for customers. Built using Node.js, Typescript, Nest.js,
            and React, this system provides a cutting-edge solution for online
            shopping automation.
          </p>
          <br />
          <p>
            Node.js is a powerful server-side runtime environment that allows
            developers to build scalable and high-performance applications. Its
            event-driven architecture makes it an ideal choice for building
            real-time applications such as online shopping platforms. Typescript
            is a superset of JavaScript that provides developers with additional
            features such as static typing, class-based object-oriented
            programming, and interfaces. This allows for better code
            organization, improved code quality, and enhanced tooling support.
          </p>
          <br />
          <p>
            Nest.js is a progressive Node.js framework that is built with
            TypeScript and leverages modern design patterns such as MVC
            (Model-View-Controller) and DI (Dependency Injection). It provides a
            robust architecture for building scalable and maintainable
            applications. React is a popular front-end library that is used for
            building user interfaces. It allows developers to build reusable
            components and provides a virtual DOM for efficient rendering of
            changes. The Online Shopping Automation System leverages these
            technologies to provide customers with an automated shopping
            experience. The system allows users to browse products, add items to
            their cart, and checkout seamlessly. It also provides features such
            as order tracking, payment integration.
          </p>
          {/* <a
            href="https://github.com/fireclint/property-finder"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a> */}
          {/* <a
            href="https://property-finder-development.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Nest.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redis
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MySQL
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
