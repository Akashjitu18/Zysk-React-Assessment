import React from 'react'

const CTA = () => {
    return (
        <div className='bg-gray-100 py-16 px-5'>

            <p className='font-semibold text-3xl md:text-4xl text-center mb-4'>
                Start your free trial
            </p>


            <p className="my-4 text-lg text-center text-slate-700 mx-auto max-w-3xl">
            Join over 4,000+ startups already growing with Untitled.
            </p>

            <div className="flex justify-center gap-5 mt-6 flex-col-reverse sm:flex-row w-full">
                <button className=" border justify-center items-center rounded-lg py-3 px-4 text-base font-semibold bg-white text-[#344054] hover:bg-gray-200 w-full sm:w-auto">
                    
                  Learn more
                </button>
                <button className="inline-flex text-white bg-[#7F56D9] border-0 rounded-lg py-3 px-6 focus:outline-none hover:bg-[#6d47c0] text-base font-semibold w-full sm:w-auto justify-center">
                   Get started
                </button>
            </div>

        </div>
    )
}

export default CTA
