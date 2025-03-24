import React from "react";

const CV_Button = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Ramla Eman 2024.pdf";
    link.download = "Ramla Eman 2024.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <button onClick={downloadCV} className="text-gradient btn-link">Download CV</button>;
};

export default CV_Button;
