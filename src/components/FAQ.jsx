import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    { question: "Is there a free trial available?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    { question: "Can I change my plan later?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    { question: "Do you offer international shipping?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    { question: "What payment methods do you accept?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    { question: "Can I change my order after placing it?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    { question: "How do I contact customer support?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  return (
    <>
    <div className="max-w-4xl mx-auto mt-10 p-5">
      
      <h1 className="text-3xl font-semibold text-center mb-5">Frequently Asked Questions</h1>
      <p className="text-center text-gray-600 mb-10 text-lg">Everything you need to know about the product and billing.</p>

    
      <div>
        {questions.map((item, index) => (
          <div key={index} className="border-b border-gray-300 py-6">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(index)}>
              <h3 className="font-medium text-lg">{item.question}</h3>
              <button className="text-gray-500">
                {activeIndex === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
            {activeIndex === index && (
              <p className="mt-3 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

    </div>
      <div className="bg-gray-50 rounded-lg p-6 mb-20 text-center max-w-7xl mx-auto">
        <img
          className=" mx-auto rounded-full mb-4"
          src="images\Avatar group.png"
          alt="Avatar"
        />
        <h4 className="text-xl font-semibold">Still have questions?</h4>
        <p className="text-gray-600 mt-2 mb-4">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        <button className="bg-[#7F56D9] text-white px-4 py-2 rounded-lg hover:bg-[#6d47c0]">
          Get in Touch
        </button>
      </div>
    <hr />
    </>
    
  );
};

export default FAQ;
