import React from 'react'

const ResumePage = () => {
    const handleDownload = () => {
        const resumePath = "/MyResume.pdf";
        const link = document.createElement("a");
        link.href = resumePath;
        link.download = "Subhash_Satyarthi_Resume.pdf";
        link.click();
      };
  return (
    <div className="bg-[#222831] rounded-xl w-full my-10 text-white">
    <iframe
      src="/MyResume.pdf"
      className="w-full h-[100vh] rounded-lg"
      title="Resume"
    ></iframe>
    <div className="flex justify-center items-center  mt-4">
      <button
        onClick={handleDownload}
        className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600"
      >
        Download Resume
      </button>
    </div>
  </div>
  )
}

export default ResumePage