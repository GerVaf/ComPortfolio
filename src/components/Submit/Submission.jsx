import React, { useRef } from "react";

const Submission = () => {
  const fileInputRef = useRef(null);

  const handleTextClick = () => {
    // Open the file input when the text is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle file selection
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // You can perform any additional logic with the selected file
      console.log("Selected File:", selectedFile.name);
    }
  };

  return (
    <div className="h-[100vh] bg-black flex justify-center items-center">
      <div className="p-5 w-full lg:w-[50%] border rounded-md flex flex-col gap-8">
        <input className="inp" placeholder="Artist Name" type="text" />
        <input className="inp" placeholder="Phone Number" type="text" />
        <input className="inp" placeholder="Email Address" type="text" />
        <input className="inp" placeholder="Artist Profile Link" type="text" />

        {/* Hidden file input */}
        <div className="bg-white p-5 rounded-md" onClick={handleTextClick}>
          <input
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
            type="file"
          />
          <p className="border-2 border-dashed border-black rounded-md p-5 text-center cursor-pointer">
            Click here
          </p>
        </div>

        <div className="w-full flex justify-center">
          <button className="px-4 py-3 bg-white rounded-md">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Submission;
