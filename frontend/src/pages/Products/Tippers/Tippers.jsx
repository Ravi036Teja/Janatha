import React from 'react'
// import { FaFilePdf, FaImage } from "react-icons/fa6";
import h5 from '../../../pdf/4830.pdf'
const Tippers = () => {
  return (
     <div className="mt-16 mx-2 min-h-screen" id='tippers'>
          <h1 className="text-4xl font-semibold text-center text-blue-900 font-serif pb-2">Tippers</h1>
          <h1 className="text-3xl font-semibold  text-blue-900 font-serif pb-2">Heavy (28 - 48)</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
           <div className="border">
           <img src=  'https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/SIGNA-4830TK.jpg?VersionId=Trsf80rPEyce0poJCO5mgxuHI5BOtBli' alt="" />
            <h1 className="text-xl font-semibold text-center text-blue-950">TATA SIGNA 4830.TK. FBV</h1>
            <ul className="flex justify-between pt-4 px-2"> 
              <li className="text-sm">47500 Kg <br /> <span className="text-gray-500">Tonnage (GVW)</span></li>
              <li className="text-sm">365L HDPE <br /> (Plastic tank)L <br /> <span className="text-gray-500">Fuel tank capacity</span></li>
              <li className="text-sm">NA <br /><span className="text-gray-500">Gradeability %</span></li>
            </ul>
            <div className="flex gap-4 pt-2 px-2 my-2">
              <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white">Know More</button>
              <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white"><a href={h5}>Broucher</a></button>
              {/* <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300"><FaImage/></button> */}
            </div>
           </div>
           {/* col 2 */}
           <div className="border">
           <img src="https://trucks.tatamotors.com/assets/trucks/files/Products/2023-12/Prima%202830.K%20Scoop%20HRT%20New%20Fascia_Mer.png" alt="" />
            <h1 className="text-xl font-semibold text-center text-blue-950">TATA PRIMA 2830.K HRT</h1>
            <ul className="flex justify-between pt-4 px-2"> 
              <li className="text-sm">28000 Kg <br /> <span className="text-gray-500">Tonnage (GVW)</span></li>
              <li className="text-sm">300 L HDPE L <br /> <span className="text-gray-500">Fuel tank capacity</span></li>
              <li className="text-sm">79 <br /><span className="text-gray-500">Gradeability %</span></li>
            </ul>
            <div className="flex gap-4 pt-2 px-2 my-2">
              <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white">Know More</button>
               <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white"><a href={h5}>Broucher</a></button>
              {/* <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300"><FaImage/></button> */}
            </div>
           </div>
            {/* col 3 */}
            <div className="border">
           <img src="https://trucks.tatamotors.com/assets/trucks/files/Products/2023-12/Prima%202830.K%20Scoop%20HRT%20New%20Fascia_Mer.png" alt="" />
            <h1 className="text-xl font-semibold text-center text-blue-950">TATA PRIMA 2830.K SRT</h1>
            <ul className="flex justify-between pt-4 px-2"> 
              <li className="text-sm">28000 Kg <br /> <span className="text-gray-500">Tonnage (GVW)</span></li>
              <li className="text-sm">300 L <br /> <span className="text-gray-500">Fuel tank capacity</span></li>
              <li className="text-sm">79 <br /><span className="text-gray-500">Gradeability %</span></li>
            </ul>
            <div className="flex gap-4 pt-2 px-2 my-2">
              <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white">Know More</button>
              <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white"><a href={h5}>Broucher</a></button>
              {/* <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300"><FaImage/></button> */}
            </div>
           </div>
            {/* col 4 */}
            <div className="border">
           <img src="https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/prima%203530%20hrt.jpg?VersionId=5Kp3B68utHGCkuWHXt5TyPL0gAPLa.77" alt="" />
            <h1 className="text-xl font-semibold text-center text-blue-950">TATA PRIMA 3530.K HRT</h1>
            <ul className="flex justify-between pt-4 px-2"> 
              <li className="text-sm">35000 Kg <br /> <span className="text-gray-500">Tonnage (GVW)</span></li>
              <li className="text-sm">300L <br /> <span className="text-gray-500">Fuel tank capacity</span></li>
              <li className="text-sm">NA <br /><span className="text-gray-500">Gradeability %</span></li>
            </ul>
            <div className="flex gap-4 pt-2 px-2 my-2">
              <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white">Know More</button>
              <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white"><a href={h5}>Broucher</a></button>
              {/* <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300"><FaImage/></button> */}
            </div>
           </div>
            {/* col 5 */}
            <div className="border">
           <img src="https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/3530-k-srt_1.jpg?VersionId=owcunaKVumOyngMWPccRl15Wt_bsPtiX" alt="" />
            <h1 className="text-xl font-semibold text-center text-blue-950">TATA PRIMA 3530.K SRT</h1>
            <ul className="flex justify-between pt-4 px-2"> 
              <li className="text-sm">35000 Kg <br /> <span className="text-gray-500">Tonnage (GVW)</span></li>
              <li className="text-sm">300L <br /> <span className="text-gray-500">Fuel tank capacity</span></li>
              <li className="text-sm">NA <br /><span className="text-gray-500">Gradeability %</span></li>
            </ul>
            <div className="flex gap-4 pt-2 px-2 my-2">
              <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white">Know More</button>
              <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white"><a href={h5}>Broucher</a></button>
              {/* <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300"><FaImage/></button> */}
            </div>
           </div>
          </div>

          {/* RMC REPTO 26-35 */}

          <h1 className="text-4xl font-semibold text-center text-blue-900 font-serif pb-8 py-8">RMC REPTO (26-35)</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
           <div className="border mb-4">
           <img src=  'https://trucks.tatamotors.com/assets/trucks/files/Products/2024-08/LPK-2821.K.jpg?VersionId=bFGS979wsFQt4rj9uLScyBGv_D4hfW8f' alt="" />
            <h1 className="text-xl font-semibold text-center text-blue-950">TATA LPK 2821.K FE+ RMC</h1>
            <ul className="flex justify-between pt-4 px-2"> 
              <li className="text-sm">NA Kg <br /> <span className="text-gray-500">Tonnage (GVW)</span></li>
              <li className="text-sm">NA L <br /> <span className="text-gray-500">Fuel tank capacity</span></li>
              <li className="text-sm">33 <br /><span className="text-gray-500">Gradeability %</span></li>
            </ul>
            <div className="flex gap-4 pt-2 px-2 my-2">
              <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white">Know More</button>
              <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white"><a href={h5}>Broucher</a></button>
              {/* <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300"><FaImage/></button> */}
            </div>
           </div>
           {/* col 2 */}
           <div className="border mb-4">
           <img src="https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/SIGNA%202830.K.png?VersionId=DIQFKwuo2YTgUVwhR6FVt7nLADTuckFU" alt="" />
            <h1 className="text-xl font-semibold text-center text-blue-950">TATA SIGNA 2830.K 8 Cum REPTO RMC</h1>
            <ul className="flex justify-between pt-4 px-2"> 
              <li className="text-sm">28000 Kg <br /> <span className="text-gray-500">Tonnage (GVW)</span></li>
              <li className="text-sm">300L <br /> <span className="text-gray-500">Fuel tank capacity</span></li>
              <li className="text-sm">NA <br /><span className="text-gray-500">Gradeability %</span></li>
            </ul>
            <div className="flex gap-4 pt-2 px-2 my-2">
              <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white">Know More</button>
               <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white"><a href={h5}>Broucher</a></button>
              {/* <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300"><FaImage/></button> */}
            </div>
           </div>
            {/* col 3 */}
            <div className="border mb-4">
           <img src="https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/TATA%20Motors%202830.K-nameplates%2014.jpg?VersionId=_1pfy9c6SLFfszhg0XThpNrGfEqCDPMb" alt="" />
            <h1 className="text-xl font-semibold text-center text-blue-950">TATA PRIMA 2830.K REPTO</h1>
            <ul className="flex justify-between pt-4 px-2"> 
              <li className="text-sm">28000 Kg <br /> <span className="text-gray-500">Tonnage (GVW)</span></li>
              <li className="text-sm">300L <br /> <span className="text-gray-500">Fuel tank capacity</span></li>
              <li className="text-sm">79 <br /><span className="text-gray-500">Gradeability %</span></li>
            </ul>
            <div className="flex gap-4 pt-2 px-2 my-2">
              <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white">Know More</button>
              <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white"><a href={h5}>Broucher</a></button>
              {/* <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300"><FaImage/></button> */}
            </div>
           </div>
          </div>
        </div>
  )
}

export default Tippers
