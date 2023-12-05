import React, { useRef, useState } from "react";

const Submission = () => {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    artistName: "",
    phoneNumber: "",
    emailAddress: "",
    artistProfileLink: "",
    selectedFile: null,
  });

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
      setFormData((prevData) => ({ ...prevData, selectedFile }));
    }
  };

  const handleInputChange = (e, fieldName) => {
    // Handle input changes
    const value = e.target.value;
    setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  const handleSubmit = () => {
    // Handle form submission with collected data
    console.log("Form Data:", formData);
    // You can send the formData to your backend or perform further actions here
  };

  return (
    <div className="h-[100vh] bg-black flex justify-center items-center">
      <div className="p-5 w-full lg:w-[50%] border rounded-md flex flex-col gap-8">
        <input
          className="inp"
          placeholder="Artist Name"
          type="text"
          onChange={(e) => handleInputChange(e, "artistName")}
        />
        <input
          className="inp"
          placeholder="Phone Number"
          type="text"
          onChange={(e) => handleInputChange(e, "phoneNumber")}
        />
        <input
          className="inp"
          placeholder="Email Address"
          type="text"
          onChange={(e) => handleInputChange(e, "emailAddress")}
        />
        <input
          className="inp"
          placeholder="Artist Profile Link"
          type="text"
          onChange={(e) => handleInputChange(e, "artistProfileLink")}
        />

        {/* Hidden file input */}
        <div className="bg-white p-5 rounded-md" onClick={handleTextClick}>
          <input
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
            type="file"
          />
          <p className="border-2 border-dashed border-black rounded-md p-5 py-10 text-center cursor-pointer">
            Drop your demo here
          </p>
        </div>

        {/* <div className="w-full flex justify-center"> */}
        <button
          className="px-4 py-3 bg-white rounded-md hover:text-white hover:bg-zinc-600 transition duration-150"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Submission;
