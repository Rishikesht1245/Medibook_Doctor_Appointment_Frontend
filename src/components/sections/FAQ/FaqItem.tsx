import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface FaqItemProps {
  faq: {
    question: string;
    answer: string;
  };
}

const FaqItem = ({ faq }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="p-3 lg:p-4 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer">
      <div
        className="flex items-center justify-between gap-5"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <h4 className="text-[16px] leading-5 lg:text-[20px] lg:leading-6 text-slate-900">
          {faq.question}
        </h4>
        <div
          className={`${
            isOpen && "bg-blue-700 text-white border-none"
          }w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141f21] rounded flex items-center justify-center p-1 sm:p-0`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      {/* answer */}
      {isOpen && (
        <div className="mt-4">
          <p className="text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-[400] text-slate-700">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
};
export default FaqItem;
