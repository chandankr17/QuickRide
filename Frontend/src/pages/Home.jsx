import React from 'react'

const Home = () => {
    return (
        <div>
            <div className='h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
                <img className='w-15 ml-8' src="https://www.zopoyo.in/assets/stores/1564745295_quickride_jul.jpg" alt="QuickRide Logo"></img>
                <div className='bg-white'>
                    <h2>Ride with QuickRide</h2>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Home
