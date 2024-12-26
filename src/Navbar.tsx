import React from 'react';
import './index.css'
function Navbar() {
  return (
    <div className="relative overflow-visible h-fit gap-5 w-fit p-5 border-1 border-black center flex flex-row items-center justify-center rounded-xxl bg-white
    shadow-4xl">
        <div className="relative group">

        <div className="size-20 p-2 rounded-xl bg-white border-1 border-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-full" viewBox="0 -960 960 960"  fill="#000000"><path d="M236-196h162v-236h164v236h162v-366L480-747.33 236-562.22V-196Zm-24 24v-402l268-203 268 203v402H538v-236H422v236H212Zm268-299.67Z"/></svg>
        </div>
            <p className="absolute w-full rounded-xl nunito -top-20 group-hover:bg-white group-hover:border-black group-hover:border-1 p-2 group-hover:transform group-hover:text-black text-transparent transition duration-300">
                Home
            </p>
        </div>

        
        <div className="relative group">
        <div className="size-20 p-2 rounded-xl bg-white border-1 border-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-full" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M360-390q-21 0-35.5-14.5T310-440q0-21 14.5-35.5T360-490q21 0 35.5 14.5T410-440q0 21-14.5 35.5T360-390Zm240 0q-21 0-35.5-14.5T550-440q0-21 14.5-35.5T600-490q21 0 35.5 14.5T650-440q0 21-14.5 35.5T600-390ZM480-160q134 0 227-93t93-227q0-24-3-46.5T786-570q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-708q-32 78-91.5 135.5T160-486v6q0 134 93 227t227 93Zm.17 28q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM377-785q51 106 145.5 151.5T700-588q20 0 39.5-2t38.5-7q-37-95-119.5-149T480-800q-30 0-54.5 3.5T377-785ZM162-517q65-27 136-94.5T377-785q-89 31-146 102.5T162-517Zm215-268Zm0 0Z"/></svg>
        </div>
        <p className="absolute w-full rounded-xl nunito -top-20 group-hover:bg-white group-hover:border-black group-hover:border-1 p-2 group-hover:transform group-hover:text-black text-transparent transition duration-300">
                About
            </p>
        </div>
        
        <div className="relative group"> 
        <div className="size-20 p-2 rounded-xl bg-white border-1 border-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-full" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M344-373 237-480l107-107 19 20-87 87 87 87-19 20Zm272 0-19-20 87-87-87-87 19-20 107 107-107 107ZM232-172q-26 0-43-17t-17-43v-128h28v128q0 12 10 22t22 10h128v28H232Zm368 0v-28h128q12 0 22-10t10-22v-128h28v128q0 26-17 43t-43 17H600ZM172-600v-128q0-26 17-43t43-17h128v28H232q-12 0-22 10t-10 22v128h-28Zm588 0v-128q0-12-10-22t-22-10H600v-28h128q26 0 43 17t17 43v128h-28Z"/></svg>
        </div>
        <p className="absolute w-full rounded-xl nunito -top-20 group-hover:bg-white group-hover:border-black group-hover:border-1 p-2 group-hover:transform group-hover:text-black text-transparent transition duration-300">
                Projects
            </p>
        </div>

        <div className="relative group">
        <div className="size-20 p-2 rounded-xl bg-white border-1 border-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-full" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M478-132q-71 0-134-27.5T234-234q-47-47-74.5-110.5T132-480q0-73 28-136.5T236.5-727q48.5-47 114-74T490-828q67 0 128 22.5T725.5-743q46.5 40 74.5 95.5T828-526q0 86-48.5 140T640-332h-70q-30 0-51 21t-21 51q0 29 15 45t15 37q0 23-13 34.5T478-132Zm2-348Zm-220 14q14 0 24-10t10-24q0-14-10-24t-24-10q-14 0-24 10t-10 24q0 14 10 24t24 10Zm120-160q14 0 24-10t10-24q0-14-10-24t-24-10q-14 0-24 10t-10 24q0 14 10 24t24 10Zm200 0q14 0 24-10t10-24q0-14-10-24t-24-10q-14 0-24 10t-10 24q0 14 10 24t24 10Zm120 160q14 0 24-10t10-24q0-14-10-24t-24-10q-14 0-24 10t-10 24q0 14 10 24t24 10ZM478-160q11 0 16.5-4.5T500-178q0-14-15-29t-15-51q0-44 29-73t71-29h70q78 0 119-46t41-120q0-122-94-198t-216-76q-139 0-234.5 93T160-480q0 133 93.5 226.5T478-160Z"/></svg>
        </div> 
        <p className="absolute w-full rounded-xl nunito -top-20 group-hover:bg-white group-hover:border-black group-hover:border-1 p-2 group-hover:transform group-hover:text-black text-transparent transition duration-300">
                Art
            </p>
        </div>

    </div>
  );
}

export default Navbar;
