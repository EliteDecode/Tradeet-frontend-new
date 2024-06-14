import React, { useEffect, useState } from "react";
import Accordion from "../../components/Accordion";
const faqs = [
  {
    id: 0,
    question: "How does the personalized marketplace work?",
    answer:
      "They provide opportunities for beginners to work on real-world projects or participate in coding challenges",
  },
  {
    id: 1,
    question: "How do I create an account on Tradeet?",
    answer:
      "They provide opportunities for beginners to work on real-world projects or participate in coding challenges",
  },
  {
    id: 2,
    question: "How do I get my personalized profile link?",
    answer:
      "They provide opportunities for beginners to work on real-world projects or participate in coding challenges",
  },
  {
    id: 3,
    question: "How can I sell items on Tradeet?",
    answer:
      "They provide opportunities for beginners to work on real-world projects or participate in coding challenges",
  },
  {
    id: 4,
    question: "What items can I sell on Tradeet?",
    answer:
      "They provide opportunities for beginners to work on real-world projects or participate in coding challenges",
  },
  {
    id: 5,
    question: "Can I donate items on Tradeet?",
    answer:
      "They provide opportunities for beginners to work on real-world projects or participate in coding challenges",
  },
  {
    id: 6,
    question: "What happens after I donate an item?",
    answer:
      "They provide opportunities for beginners to work on real-world projects or participate in coding challenges",
  },
  {
    id: 7,
    question: "How do I track my sales and donations?",
    answer:
      "They provide opportunities for beginners to work on real-world projects or participate in coding challenges",
  },
  {
    id: 8,
    question: "Can I track my orders after purchase?",
    answer:
      "They provide opportunities for beginners to work on real-world projects or participate in coding challenges",
  },
  {
    id: 9,
    question: "Can I buy items from other users?",
    answer:
      "They provide opportunities for beginners to work on real-world projects or participate in coding challenges",
  },
];

const Faqs = () => {
  const [seeMore, setSeeMore] = useState(true);
  const [faqNum, setFaqNum] = useState(5);
  const handleChange = () => {
    setSeeMore(!seeMore)
    setFaqNum(faqs.length)
  }
  return (
    <div className="md:px-24 px-6 md:my-[60px] my-10">
      <div className="flex flex-col justify-center items-center ">
        <p className="md:text-base text-sm text-[#12362A]">FAQs</p>
        <h2 className="md:text-[40px] text-[22px] text-[#2D2D2D] mt-2 font-semibold">
          Frequently asked questions
        </h2>
      </div>

      <div className="">
        {faqs.slice(0, faqNum).map((val, i) => (
          <div key={i}>
            <Accordion question={val.question} answer={val.answer} />
          </div>
        ))}
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={handleChange}
            className={`${
              seeMore
                ? "center w-[122px] h-[55px] text-white bg-[#12362A] rounded-lg"
                : "hidden overflow-hidden"
            }`}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
