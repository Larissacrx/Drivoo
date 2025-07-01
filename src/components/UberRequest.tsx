import React from "react";

const UberRequest: React.FC = () => {
  return (
    <div className="bg-black text-white p-4 sm:p-6 md:p-8 max-w-4xl mx-auto font-sans">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: '"Uber Move", sans-serif' }}>
        Go anywhere with Drivoo
      </h1>
      <p className="mb-4 sm:mb-6 text-xs sm:text-sm md:text-base font-normal">
        Request a ride, hop in, and go.
      </p>

      <form className="space-y-3 max-w-full sm:max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter location"
            className="w-full rounded-md bg-gray-100 text-gray-700 placeholder-gray-500 py-2 sm:py-3 pr-10 sm:pr-12 pl-8 sm:pl-10 focus:outline-none text-sm sm:text-base"
          />
          <span className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-black text-lg sm:text-xl">◉</span>
          <span className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-black text-lg sm:text-xl">➤</span>
          <span className="absolute left-6 sm:left-6 top-1/2 -translate-y-1/2 h-8 sm:h-10 border-l border-gray-300"></span>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Enter destination"
            className="w-full rounded-md bg-gray-100 text-gray-700 placeholder-gray-500 py-2 sm:py-3 pl-8 sm:pl-10 focus:outline-none text-sm sm:text-base"
          />
          <span className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-black text-lg sm:text-xl">■</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <button
            type="submit"
            className="bg-white text-black font-semibold rounded-md px-5 py-2 mb-3 sm:mb-0 w-full sm:w-auto text-center"
          >
            See prices
          </button>
          <a
            href="#"
            className="text-white underline text-xs sm:text-sm font-normal text-center"
          >
            Log in to see your recent activity
          </a>
        </div>
      </form>

      <img
        src="https://storage.googleapis.com/a1aa/image/4bbb1fb6-367d-44f2-8968-8df56966908f.jpg"
        alt="Illustration of a woman getting into a blue car"
        className="mt-6 rounded-md w-full max-w-4xl"
        width={600}
        height={400}
      />
    </div>
  );
};

export default UberRequest;
