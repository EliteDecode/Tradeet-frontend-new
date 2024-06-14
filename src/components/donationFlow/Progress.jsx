import React, { useEffect, useState } from 'react'

const Progress = ({ currAmount, totalAmount }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const progress = Number((currAmount / totalAmount) * 100).toFixed();
    setProgressWidth(progress);
  }, [currAmount, totalAmount]);

  return (
    <div className="w-full h-2 bg-[#C7EFC7] rounded-lg ">
      <div
        style={{ width: `${progressWidth}%` }}
        className={`h-full bg-[#008000] rounded-lg`}
      ></div>
    </div>
  );
};

export default Progress
