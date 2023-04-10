import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";
import onlineBotImg from "../public/assets/projects/online-bot-art.png";
import todoApp from "../public/assets/projects/todo-app.jpg";
import scarpingArt from "../public/assets/projects/scraping.jpg";
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Online Shopping Automation Bot System"
            backgroundImg={onlineBotImg}
            projectUrl="/online-bot"
            tech="Nest.JS/Puppeteer/Node.js"
          />
          <ProjectItem
            title="React To-Do App"
            backgroundImg={todoApp}
            projectUrl="/todo-app"
            tech="React.JS"
          />
          <ProjectItem
            title="Web-Scraping Tools"
            backgroundImg={scarpingArt}
            projectUrl="/netflix"
            tech="Python/Beautifulsoup"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
