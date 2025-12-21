import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">

      {/* Logo Area */}
      <div className="flex-1 flex items-center justify-center px-4">
        <img
          src="/quickride_logo.png"
          alt="QuickRide Logo"
          className="
            w-full
            max-w-[320px]        /* iPhone SE */
            sm:max-w-[420px]     /* normal phones */
            md:max-w-[600px]     /* tablets */
            lg:max-w-[750px]     /* desktop */
            xl:max-w-[900px]     /* large screens */
            max-h-[65vh]
            object-contain
          "
        />
      </div>

      {/* Bottom Card */}
      <div className="bg-white px-5 py-6 rounded-t-3xl">
        <h2 className="text-2xl font-semibold text-center">
          Get Started with QuickRide
        </h2>

        <Link
          to="/login"
          className="mt-5 flex items-center justify-center w-full bg-black text-white py-3 rounded-lg text-lg"
        >
          Continue
        </Link>
      </div>

    </div>
  )
}

export default Start
