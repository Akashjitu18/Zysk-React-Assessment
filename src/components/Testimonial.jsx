import React from 'react';

const Testimonial = () => {
  return (
    <div className="bg-[#F9FAFB] flex flex-col items-center p-6 md:p-20">
      
      <img className="m-5 max-w-[150px]" src="images\Fictional company logo (6).png" alt="Company Logo" />

     
      <p className="font-semibold text-2xl md:text-4xl text-center px-6 md:px-32">
        We’ve been using Untitled to kick start every new project and can’t imagine working without it.
      </p>

      
      <div className="mt-10 flex flex-col items-center gap-2">
        <img src="images\Avatar.png" alt="User Avatar"  />
        <p className="font-semibold text-lg md:text-xl">Candice Wu</p>
        <p className="text-gray-500 text-sm md:text-base">Product Manager, Sisyphus</p>
      </div>
    </div>
  );
};

export default Testimonial;

