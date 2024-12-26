import React from 'react';
function About() {
  return (
    <div className="relative overflow-visible h-fit center flex flex-col items-center justify-center"
    style={{
      backgroundImage: "url('bg-tile.png')",
      backgroundSize: "2%"
    }}>
      <div className="flex flex-col gap-10 h-screen items-center ">
        <div className="flex flex-col">
          <p className="text-6xl nunito font-extrabold text-neutral-500">
              About
            </p>
        </div>
        <div className="w-full h-full  flex flex-row">

          
          <div className="flex flex-col items-end content-end size-full">
            <div className=" h-full w-400 ">
              <div className='w-full flex flex-col align-center items-center'>
                <div className="size-40 rounded-full bg-gray-300">

                </div>
                  <p className="nunito pt-5 text-2xl font-bold tracking-widest">
                    KURT CYRUS CUIZON
                  </p>
                  <p className="nunito text-2xl font-bold tracking-wider text-blue-400">
                    Fullstack Developer
                  </p>
                  <p className="nunito text-xl font-semibold text-gray-500">
                  I'm currently a software development student with a deep passion for art
                  </p>
              </div>
            </div>            
          </div>          


          <div className="flex flex-col size-full">
            <div className="bg-slate-600 h-full w-400 bg-gray-400 ">
                
            </div>  
          </div>  
        </div>
      </div>

    </div>
  );
}

export default About;
