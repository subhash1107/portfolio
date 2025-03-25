import React from "react";

const Projects = () => {
  return (
    <div className="md:flex justify-start">
      <div className="sm:w-1/2">
        <h3 className="text-xl font-semibold">Deployed</h3>
        <ul className="list-disc mt-4">
          <a href="https://connecto-xi.vercel.app/" target="_blank">
            <li className="hover:text-yellow-600 hover:cursor-pointer">
              Connecto
            </li>
          </a>
          <a href="https://dev-tinder-f.vercel.app/" target="_blank">
            <li className="hover:text-yellow-600 hover:cursor-pointer">
              Devtinder
            </li>
          </a>
          <a
            href="https://image-search-gallary-five.vercel.app/"
            target="_blank"
          >
            <li className="hover:text-yellow-600 hover:cursor-pointer">
              ImageSearch Gallary
            </li>
          </a>
          <a href="https://docsync-chi.vercel.app/" target="_blank">
            <li className="hover:text-yellow-600 hover:cursor-pointer">
              Docsync
            </li>
          </a>
          <a href="https://subhash1107.github.io/simongame/" target="_blank">
            <li className="hover:text-yellow-600 hover:cursor-pointer">
              Simon Game
            </li>
          </a>
          <a href="https://swiggyclone-seven.vercel.app/" target="_blank">
            <li className="hover:text-yellow-600 hover:cursor-pointer">
              Swiggy Clone
            </li>
          </a>
          <a href="https://kling-clone.vercel.app/" target="_blank">
            <li className="hover:text-yellow-600 hover:cursor-pointer">
              Kling Clone
            </li>
          </a>
          <a href="https://calendar-phi-nine.vercel.app/" target="_blank">
            <li className="hover:text-yellow-600 hover:cursor-pointer">
              Calender
            </li>
          </a>
        </ul><br/>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Not-Deployed</h3>
        <ul className="list-disc mt-4">
          <a href="https://github.com/subhash1107/todo-backend" target="_blank">
            <li className="hover:text-yellow-600 hover:cursor-pointer">
              Todo Backend
            </li>
          </a>
          <a href="https://github.com/subhash1107/biobiznew" target="_blank">
            <li className="hover:text-yellow-600 hover:cursor-pointer">
              Biobiz
            </li>
          </a>
          <a
            href="https://github.com/subhash1107/primetabledemo"
            target="_blank"
          >
            <li className="hover:text-yellow-600 hover:cursor-pointer">
              Prime React Table
            </li>
          </a>
        </ul>
        <br />
        <h3 className="text-xl font-semibold">Backend Repo</h3>
        <ul className="list-disc mt-4">
          <a href="https://github.com/subhash1107/connectoB" target="_blank">
            <li className="hover:text-yellow-600 hover:cursor-pointer">
              Connecto (Private)
            </li>
          </a>
          <a href="https://github.com/subhash1107/docSyncS" target="_blank">
            <li className="hover:text-yellow-600 hover:cursor-pointer">
              Doc Sync
            </li>
          </a>
          <a
            href="https://github.com/subhash1107/learningnnode"
            target="_blank"
          >
            <li className="hover:text-yellow-600 hover:cursor-pointer">
              Devtinder
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
