import React, { useState } from "react";

const OTPBox = ({ length }) => {
  const [otp, setOTP] = useState(new Array(length).fill(""));

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (value !== "" && index < length - 1) {
        // Automatically move focus to the next input field
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyUp = (index, event) => {
    if (event.keyCode === 8 && index > 0 && otp[index] === "") {
      // Automatically move focus to the previous input field on backspace
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  return (
    <div>
      {otp.map((value, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(index, e)}
          onKeyUp={(e) => handleKeyUp(index, e)}
          style={{ width: "30px", marginRight: "5px" }}
        />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Enter OTP</h1>
      <OTPBox length={6} />
    </div>
  );
};

export default App;
