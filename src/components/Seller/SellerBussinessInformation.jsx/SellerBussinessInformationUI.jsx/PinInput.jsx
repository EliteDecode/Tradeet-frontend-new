import { useState, useRef } from "react";

function PinInput() {
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
    if (value !== "" && index < pin.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && pin[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-between gap-1">
      {pin.map((digit, index) => (
        <input
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-10 h-10 text-center border border-gray-300 rounded-md"
        />
      ))}
    </div>
  );
}

export default PinInput;
