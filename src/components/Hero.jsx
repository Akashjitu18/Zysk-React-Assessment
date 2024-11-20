import React from 'react';

const Hero = () => {
    return (
        <div className='flex flex-col items-center pt-20 px-4 md:px-8'>
            <div className='text-[#6941C6] text-xs font-semibold mb-6'>
                <button className='flex justify-center items-center gap-2 bg-[#f8f3ff] border-[#aea5c1] border rounded-full py-1 px-2'>
                    <span className='border rounded-full p-1 bg-white border-[#aea5c1]'>New feature</span>
                    <span>Check out the team dashboard</span>
                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.833336 6.00016H10.1667M10.1667 6.00016L5.5 1.3335M10.1667 6.00016L5.5 10.6668" stroke="#9E77ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>


            <p className='font-semibold text-4xl md:text-6xl text-center mb-4'>
                Beautiful analytics to grow smarter
            </p>


            <p className="my-4 text-base text-center text-slate-700 mx-auto max-w-3xl">
                Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
            </p>

            <div className="flex justify-center gap-5 mt-6 flex-col-reverse sm:flex-row w-full">
                <button className="flex gap-2 border justify-center items-center rounded-lg py-3 px-4 text-base font-semibold text-[#344054] hover:bg-gray-200 w-full sm:w-auto">
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 21C17.0228 21 21.5 16.5228 21.5 11C21.5 5.47715 17.0228 1 11.5 1C5.97715 1 1.5 5.47715 1.5 11C1.5 16.5228 5.97715 21 11.5 21Z" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M9 7.96533C9 7.48805 9 7.24941 9.09974 7.11618C9.18666 7.00007 9.31971 6.92744 9.46438 6.9171C9.63038 6.90525 9.83112 7.03429 10.2326 7.29239L14.9532 10.3271C15.3016 10.551 15.4758 10.663 15.5359 10.8054C15.5885 10.9298 15.5885 11.0702 15.5359 11.1946C15.4758 11.337 15.3016 11.449 14.9532 11.6729L10.2326 14.7076C9.83112 14.9657 9.63038 15.0948 9.46438 15.0829C9.31971 15.0726 9.18666 14.9999 9.09974 14.8838C9 14.7506 9 14.512 9 14.0347V7.96533Z" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>Demo</span>
                </button>
                <button className="inline-flex text-white bg-[#7F56D9] border-0 rounded-lg py-3 px-6 focus:outline-none hover:bg-[#6d47c0] text-base font-semibold w-full sm:w-auto justify-center">
                    Sign up
                </button>
            </div>

            <div className="mt-10">

                <img
                    className="border-x-8 border-t-8 border-black rounded-t-3xl w-full hidden sm:block"
                    src="src/assets/Screen mockup (REPLACE FILL).png"
                    alt="ss"
                />

                <img
                    className="border-4 border-black rounded-2xl w-full sm:hidden"
                    src="src/assets/Screen mockup (REPLACE FILL) (1).png"
                    alt="ss"
                />
            </div>

            <hr className="mt-6" />
        </div>
    );
};

export default Hero;
