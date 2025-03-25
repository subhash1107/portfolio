import React from 'react';

const AboutSection = ({ setSection }) => {
  return (
    <div className="about-section">
      <p>
        I am a <strong>Full Stack Developer</strong> with <strong>2+ years</strong> of experience building scalable web
        applications using technologies like Next.js, React.js, Node.js, and MongoDB. I specialize in delivering efficient end-to-end
        solutions, optimizing performance, and mentoring junior developers.
      </p>
      <br />
      <p>
        Passionate about clean code and continuous learning, I’ve contributed to e-commerce and e-learning platforms, integrating
        tools like Docker, RabbitMQ, and Razorpay. Currently exploring Kafka and microservices, I strive to build robust,
        high-performing systems.
      </p>
      <br />
      
      <h3 className="text-xl font-semibold">Programming Languages</h3>
      <div className="flex gap-4 mt-4 justify-center">
        <div className="bg-[#31363F] h-[50px] w-[50px] rounded-full flex items-center justify-center overflow-hidden">
          <img src="js.svg" alt="JavaScript" />
        </div>
        <div className="bg-[#31363F] h-[50px] w-[50px] rounded-full flex items-center justify-center">
          <img src="python.svg" alt="Python" />
        </div>
        <div className="bg-[#31363F] h-[50px] w-[50px] p-1 rounded-full flex items-center justify-center">
          <img src="ts.svg" alt="TypeScript" />
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-6">Projects</h3>
      <ul className="list-disc mt-4">
        <a href="https://connecto-xi.vercel.app/" target="_blank" rel="noopener noreferrer">
          <li className="hover:text-yellow-600 hover:cursor-pointer">Connecto</li>
        </a>
        <a href="https://dev-tinder-f.vercel.app/" target="_blank" rel="noopener noreferrer">
          <li className="hover:text-yellow-600 hover:cursor-pointer">Devtinder</li>
        </a>
        <a href="https://image-search-gallary-five.vercel.app/" target="_blank" rel="noopener noreferrer">
          <li className="hover:text-yellow-600 hover:cursor-pointer">ImageSearch Gallary</li>
        </a>
        <a href="https://docsync-chi.vercel.app/" target="_blank" rel="noopener noreferrer">
          <li className="hover:text-yellow-600 hover:cursor-pointer">Docsync</li>
        </a>
        <a href="https://subhash1107.github.io/simongame/" target="_blank" rel="noopener noreferrer">
          <li className="hover:text-yellow-600 hover:cursor-pointer">Simon Game</li>
        </a>
      </ul>
      <p
        className="text-blue-500 text-right hover:cursor-pointer"
        onClick={() => setSection("Project")}
      >
        view more...
      </p>

      <h3 className="text-xl font-semibold mt-6">Achievements</h3>
      <ul className="list-disc mt-4">
        <li>
          <strong>Skill India: </strong>
          <a
            href="https://drive.google.com/file/d/1FMwsHmQmwlf62OtN3v4pbMrSNVRkZLdJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className='hover:text-yellow-600 hover:cursor-pointer'
          >
            Front-end Web Development
          </a>
        </li>
        <li>
          <strong>Infosys Springboard: </strong>
          <a
            href="https://drive.google.com/file/d/1SAc5rYh_Olr9dfzF3SsCVCKJOtsCZUUw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className='hover:text-yellow-600 hover:cursor-pointer'
          >
            Advanced MERN Development
          </a>
        </li>
      </ul><br/>
      <hr className='border-1 text-yellow-600'/>
      <div className='flex justify-center items-center mt-4 gap-2'>
      <div className='w-[80px] h-[80px] rounded-full bg-[#31363F]'>
        <img src='profilea.png' alt='profile' className='w-full h-full object-cover rounded-full'/>
        </div>
        <div>
          <h4 className='text-lg font-semibold'>Thanks for visiting!!</h4>
          <p className='text-xs  text-gray-300 tracking-tighter'>Feel free to connect for feedback or collaboration.</p>
      </div></div>
    </div>
  );
};

export default AboutSection;
