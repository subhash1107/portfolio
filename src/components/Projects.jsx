import React from "react";

const Projects = () => (
  <div className="md:flex justify-start">
    <div className="sm:w-1/2">
      <h3 className="text-xl font-semibold">Deployed</h3>
      <ul className="list-disc mt-4">
        {[
          { name: "Connecto", link: "https://connecto-xi.vercel.app/" },
          { name: "Devtinder", link: "https://dev-tinder-f.vercel.app/" },
          { name: "ImageSearch Gallery", link: "https://image-search-gallary-five.vercel.app/" },
          { name: "Docsync", link: "https://docsync-chi.vercel.app/" },
          { name: "Simon Game", link: "https://subhash1107.github.io/simongame/" },
          { name: "Swiggy Clone", link: "https://swiggyclone-seven.vercel.app/" },
          { name: "Kling Clone", link: "https://kling-clone.vercel.app/" },
          { name: "Calendar", link: "https://calendar-phi-nine.vercel.app/" },
        ].map((project) => (
          <li key={project.name}>
            <a
              href={project.link}
              target="_blank"
              className="hover:text-yellow-600 hover:cursor-pointer"
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold">Not-Deployed</h3>
      <ul className="list-disc mt-4">
        {[
          { name: "Todo Backend", link: "https://github.com/subhash1107/todo-backend" },
          { name: "Biobiz", link: "https://github.com/subhash1107/biobiznew" },
          { name: "Prime React Table", link: "https://github.com/subhash1107/primetabledemo" },
        ].map((project) => (
          <li key={project.name}>
            <a
              href={project.link}
              target="_blank"
              className="hover:text-yellow-600 hover:cursor-pointer"
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-4">Backend Repo</h3>
      <ul className="list-disc mt-4">
        {[
          { name: "Connecto (Private)", link: "https://github.com/subhash1107/connectoB" },
          { name: "Doc Sync", link: "https://github.com/subhash1107/docSyncS" },
          { name: "Devtinder", link: "https://github.com/subhash1107/learningnnode" },
        ].map((project) => (
          <li key={project.name}>
            <a
              href={project.link}
              target="_blank"
              className="hover:text-yellow-600 hover:cursor-pointer"
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Projects;
