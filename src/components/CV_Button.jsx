import React from "react";
import CV from '../assets/Ramla Eman 2025.pdf'

const CV_Button = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Ramla Eman 2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <button onClick={downloadCV} className="text-gradient btn-link">Download CV</button>;
};

export default CV_Button;
