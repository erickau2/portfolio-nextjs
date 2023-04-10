import Image from "next/image";
import React from "react";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import todoApp from "../public/assets/projects/todo-app.jpg";
const crypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={todoApp}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">React To-Do App</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The React to-do app is a simple yet powerful application that allows
            users to create, edit, and delete to-do list items. Built using the
            React framework and integrated with Firebase, this app provides a
            seamless user experience for managing tasks.
          </p>
          <br />
          <p>
            The app provides a user-friendly interface that allows users to
            create new tasks and add them to the to-do list. Users can also edit
            existing tasks and mark them as completed once they are done. The
            app also supports deleting tasks that are no longer needed.
          </p>
          <br />
          <p>
            The React to-do app is built using the React framework, which is a
            popular JavaScript library for building user interfaces. React
            provides a simple and efficient way to build reusable components
            that can be used across multiple pages of the application. This
            makes it easy to maintain and update the application as needed.
          </p>
          <br />
          <p>
            Overall, the React to-do app is a simple but powerful tool for
            managing tasks. With its intuitive user interface and integration
            with Firebase, it provides a seamless user experience for creating,
            editing, and deleting to-do list items. Whether you are managing a
            personal to-do list or collaborating with a team, this app is a
            great tool to help you stay organized and on top of your tasks.
          </p>

          <a
            href="https://github.com/erickau2/React-ToDo-Practice"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          {/* <a
            href="https://cryptobase-yt.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Routes
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

export default crypto;
