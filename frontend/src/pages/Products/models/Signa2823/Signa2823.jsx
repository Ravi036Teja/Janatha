import React from 'react'
import Carousel from './Slider'

const Signa2823 = () => {
  return (
    <div className='min-h-screen mt-28 mx-20'>
       <div  className='grid grid-cols-1 md:grid-cols-2'>
        {/* col 1 */}
        <div className='pt-16'>
            <h1 className='text-center lg:text-left text-3xl md:text-5xl font-bold '>TATA SIGNA 2823.T</h1>
            <p className='prl-8 text-gray-500 text-xl pt-8 lg:pr-8'>The Tata Signa 2823.T is a heavy-duty cargo truck designed for long-distance haulage, featuring a 5.6L Cummins engine, a 6x2 axle configuration, and a gross vehicle weight of 28,000 kilograms, providing substantial power and payload capacity while aiming for good fuel efficiency with advanced engine technologies like load-based speed control and gear down protection; it is known for its reliability and durability in demanding transportation scenarios. </p>
            <ul className='flex justify-between pt-8'>
                <li>28000 Kg <br /> <span className='text-gray-500'>GVW</span></li>
                <li>169 kW @ 2300 r/min <br /> <span className='text-gray-500'>Power</span></li>
                <li>Cummins 5.6L <br /> <span className='text-gray-500'>Engine</span></li>
                <li>NA <br /> <span className='text-gray-500'>Deck Length</span></li>
            </ul>
        </div>
        {/* col 2 */}
        <div className=''>
            <img src="https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/SIGNA-2823T.jpg?VersionId=bcGOF0T2Y8E0IiaJF6pkH1FoAglE6xhk" alt="" />
        </div>
       </div>

       {/* second content */}
       {/* specification */}
       <div className='py-4'>
        <div>
            <h1 className='text-3xl md:text-5xl font-bold text-center'>Specification</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 pt-16'>
            <div className='pr-4 pb-12'>
                <Carousel className='shadow-lg'/>
                {/* <img src="https://truckcdn.cardekho.com/in/tata/signa-2823-t/tata-signa-2823-t.jpg?imwidth=360&impolicy=resize" alt="img" className='border p-2 rounded-lg shadow-lg bg-gray-100'  /> */}
                {/* <img src="https://trucks.tatamotors.com/assets/trucks/files/Signa%203125T-Back.jpg" alt="" className='mx-32 border' /> */}
            </div>
            <div>
            <ul className='grid grid-cols-2 border-b pb-2'>
                <li>Max Power</li>
                <li>169 KW @2300 RPM</li>
            </ul>
            <ul className='grid grid-cols-2  border-b pb-2'>
                <li>Max Torque</li>
                <li>925 Nm @1000-1600 RPM</li>
            </ul>
            <ul className='grid grid-cols-2 border-b pb-2'>
                <li>Emission Norms</li>
                <li>BS6 OBD II</li>
            </ul>
            <ul className='grid grid-cols-2 border-b pb-2'>
                <li>Engine Type</li>
                <li>Cummins 5.6L</li>
            </ul>
            <ul className='grid grid-cols-2 border-b pb-2'>
                <li>Engine Cylinders</li>
                <li>6 Cylinders</li>
            </ul>
            <ul className='grid grid-cols-2   border-b pb-2'>
                <li>Gradeability (%)</li>
                <li>NA</li>
            </ul>
            <ul className='grid grid-cols-2  border-b pb-2'>
                <li>Fuel Tank Capacity (Litres)</li>
                <li>365 Litres</li>
            </ul>
            <ul className='grid grid-cols-2  border-b pb-2'>
                <li>Fuel Type</li>
                <li>Diesel</li>
            </ul>
            <ul className='grid grid-cols-2  border-b pb-2'>
                <li>Clutch Type</li>
                <li>Dry,Single Plate</li>
            </ul>
            <ul className='grid grid-cols-2 border-b pb-2'>
                <li>Gearbox</li>
                <li>SDL G950 6S & LDL G750 6S</li>
            </ul>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Signa2823