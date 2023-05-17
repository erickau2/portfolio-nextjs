import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";

const resume = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/pdfs/resume.pdf";
    link.download = "Erick_Resume.pdf";
    link.click();
  };

  return (
    <>
      <Head>
        <title>Erick | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h1 className="p-2">Feel free to download my resume!</h1>

        <button
          className="flex items-center space-x-2 p-4 "
          onClick={downloadResume}
        >
          <FaDownload /> <span>Download My Resume</span>
        </button>
      </div>
    </>
  );
};

export default resume;
