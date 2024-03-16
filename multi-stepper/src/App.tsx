import { MouseEventHandler, useState } from "react";

const App = () => {
  const [currentStep ,setCurrentStep] = useState<number>(1)
  
  const handleNext: MouseEventHandler<HTMLButtonElement> = () => {
      setCurrentStep((prev) => prev + 1)
  };

  const handlePrev: MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentStep((prev) => prev - 1)
};
  return (
    <>
      <div className="flex align-center justify-center mt-20 relative">
      <div
        className={`h-[50px] w-[50px] bg-blue-500 rounded-[50%] text-center flex justify-center align-center  text-white relative`}
      >
        <p className={`absolute top-2 text-xl`}>1</p>
      </div>
      <div
        className={`w-[20%] bg-blue-500 h-[20px] mt-3  rounded`}
        style={{ marginLeft: "-5px" }}
      ></div>
      <div
        className={`h-[50px] w-[50px] ${currentStep >= 2 && "bg-blue-500"} rounded-[50%] text-center flex justify-center align-center border border-black  ${currentStep >= 2 ? "text-white" :" text-black"} relative`}
        style={{ marginLeft: "-5px" }}
      >
        <p className="absolute top-2 text-xl">2</p>
      </div>
      <div
        className={`w-[20%] ${currentStep >= 2 && "bg-blue-500"} border border-black h-[20px] mt-3 rounded-md`}
        style={{ marginLeft: "-7px" }}
      ></div>
      <div
        className={`h-[50px] w-[50px] ${currentStep === 3 && "bg-blue-500"} rounded-[50%] text-center flex justify-center align-center border border-black  ${currentStep === 3 ? "text-white" :" text-black"} relative`}
        style={{ marginLeft: "-15px" }}
      >
        <p className={`absolute top-2 text-xl`}>3</p>
      </div>
      <div
        className={`w-[20%] ${currentStep === 3 ? "bg-blue-500" : ""} border border-black h-[20px] mt-3 rounded-md`}
        style={{ marginLeft: "-15px" }}
      ></div>
    </div>

    {currentStep === 1 && (<div className="text-center mt-20">step 1 <button onClick={handleNext}>next</button></div>)}
    {currentStep === 2 && (<div className="text-center mt-20">step 2 <button onClick={handleNext}>Next</button> <button onClick={handlePrev}>Prev</button></div>)}
    {currentStep === 3 && (<div className="text-center mt-20">step 3  <button onClick={handlePrev}>Prev</button></div>)}
    </>
  );
};

export default App;
