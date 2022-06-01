import React from 'react';
import Img2 from '../layout/assets/img3.jpg';

function EmailSubscribe() {
  return (
    // return  Background Container
    <div className="flex h-screen items-center justify-center bg-zinc-700">
      {/* {/* Card  */}
      <div className="mx-6 rounded-2xl bg-zinc-800 p-2">
        {/* {/* Flex Container  */}
        <div className="flex flex-col rounded-l-xl object-cover md:flex-row ">
          {/* {/* Image  */}
          <img
            src={Img2}
            alt=""
            className="h-80 transform rounded-xl object-cover duration-200 hover:scale-105 hover:rounded-xl md:h-64 md:rounded-l-xl md:rounded-r-none"
          />
          {/* {/* Content  */}
          <div className="p-6 md:p-12">
            <h2 className="text-center font-serif text-xl font-medium text-white md:text-left">
              Get diet and fitness tips in your inbox
            </h2>

            <p className="my-4 max-w-xs text-center text-xs leading-5 tracking-wide text-white md:text-left">
              Eat better and exercise better. Sign up for the Diet&Fitness newsletter.
            </p>

            <div className="mt-5 flex flex-col space-y-4 md:flex-row md:space-x-3 md:space-y-0">
              <input
                type="text"
                placeholder="Enter your email address"
                className="border border-zinc-600 bg-zinc-800 p-2 px-4 text-center text-white placeholder:text-center placeholder:text-xs focus:outline-none md:text-left placeholder:md:text-left"
              />

              <button className="rounded-md bg-lime-500 px-5 py-3 text-xs text-zinc-800 duration-500 hover:bg-lime-700 hover:text-white">
                Subcribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailSubscribe;
