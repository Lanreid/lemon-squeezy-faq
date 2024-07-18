"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "../lib/utils";

const Page = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleTitleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const variants: Variants = {
    open: { height: "100%" },
    closed: { height: 1 },
  };
  const paragraphVariant: Variants = {
    open: { opacity: 100, scale: 1 },
    closed: { opacity: 0, scale: 0.9 },
  };

  return (
    <div className="h-screen w-screen bg-white text-black flex flex-col font-custom items-center justify-center">
      <div className="flex flex-col max-w-[600px] h-[700px]">
        <div>
          {data.map((item, index) => (
            <motion.button
              layout
              key={index}
              className="w-full flex flex-col px-3 hover:bg-[#f8f8f8] overflow-hidden rounded-md"
              onClick={() => handleTitleClick(index)}
            >
              <div className="border-b w-full p-5 border-x-0 card">
                <motion.div className="flex items-center justify-between w-full">
                  <div className="flex items-center text-center gap-5">
                    <h3 className="text-[#5423e7] font-sm">0{index + 1}</h3>
                    <motion.h2 className="font-medium text-[25px] hover:text-[#5423e7]">
                      {item.title}
                    </motion.h2>
                  </div>

                  <div
                    className={cn(
                      `${
                        activeIndex === index
                          ? "opacity-100 translate-x-[0.3rem]"
                          : "opacity-0"
                      } w-5 h-5 rounded-[8px] items-center justify-center flex arrow`
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      stroke=""
                      fill="#5423e7"
                      width="50"
                      height="50"
                    >
                      <path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z" />
                    </svg>
                  </div>
                </motion.div>
                <motion.div
                  className="overflow-hidden h-0"
                  animate={activeIndex === index ? "open" : "closed"}
                  variants={variants}
                >
                  <motion.p
                    className="mt-4 text-left"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    animate={activeIndex === index ? "open" : "closed"}
                    variants={paragraphVariant}
                  >
                    {item.content}
                  </motion.p>
                </motion.div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

const data = [
  {
    title: "AI-Powered Risk Assessment",
    content:
      "Utilize cutting-edge AI algorithms to assess and manage investment risks. Our system analyzes market data",
  },
  {
    title: "Interactive Financial Dashboard",
    content:
      "Access a comprehensive dashboard that provides a holistic view of your financial status. Visualize your investments, track your progress towards financial goals, and analyze your spending habits with interactive charts and graphs. Customize your dashboard to focus on what matters most to you",
  },
  {
    title: "Fraud Detection and Alerts",
    content:
      "Protect your investments with our advanced fraud detection system. Our AI continuously monitors your accounts for unusual activity and potential security threats. Receive immediate alerts if suspicious transactions are detected, ensuring your financial assets remain secure",
  },
  {
    title: "Investment and Returns",
    content:
      "Our investment algorithm analyzes market data, financial indicators, and your personal risk profile to create a diversified portfolio tailored to your goals. It continuously monitors and adjusts your investments to optimize returns",
  },
  {
    title: "Fees and Charges",
    content:
      "We charge a management fee that is a percentage of your assets under management, as well as potential transaction fees for specific trades. Please refer to our fee schedule on our website for detailed information",
  },
  {
    title: "Support and Assistance",
    content:
      "You can get support by contacting our customer service team via email, phone, or live chat on our website. Our support team is available 24/7 to assist you with any issues or questions",
  },
];
