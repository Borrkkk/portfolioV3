import React from 'react';
import {useState, useEffect} from 'react'
import Photo from './Photo.tsx';
const cardHeight = 350;
const cardWidth = 250;
function Hero() {
    const [scrollY, setScrollY] = useState(0);
    
    const handleScroll = () => {
        //setSec1(document.getElementById('sec1')?.top);
        setScrollY(window.scrollY);
    }

    //will offset scrollY
    function getScale(delay: number = 0){
        return Math.max(1, Math.min(2, 2 - (scrollY - delay) / 1000));
    }
    function getOpacity(delay: number = 0){
        return Math.min(1, Math.max(0, (scrollY - delay) / 1000));
    }
    function getRotation(degree: number = 0){
        return Math.min((degree), Math.max(-(degree), Math.floor(scrollY / 100)));
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // Attach scroll listener
    
        return () => {
          window.removeEventListener('scroll', handleScroll); // Cleanup listener
        };
      }, []);
  return (
    <div className="App relative overflow-visible w-full h-fit flex-col center flex items-center justify-center">
        <div className="sticky top-0 size-full overflow-visible h-screen center flex items-center justify-center"
            style={{
                backgroundImage: "url('bg-tile.png')",
                backgroundSize: "2%"
            }}>
            <div className="flex flex-col center gap-5 w-fit h-fit">
                <p className="text-6xl nunito font-extrabold text-neutral-700 hover:italic">
                Hi, I'm Kurt
                </p>
                <p className="text-4xl hand text-neutral-500">
                a software developer and artist
                </p>
            </div>

            <div className="rotate-6 hover:rotate-0 transition-all" style={{
                position: "absolute",
                right: "60%",
                width: cardWidth,
                height: cardHeight,
                transform: `scale(${getScale(0)}) rotate(6deg)`,
                opacity: `${getOpacity(0)}`,
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                top:"10%",
            }}
            onMouseEnter={(e)=>{
                e.currentTarget.style.transform='rotate(0deg) scale(1.2)'
            }}
            onMouseLeave={(e)=>{
                e.currentTarget.style.transform='rotate(6deg)'
            }}
             ><Photo url="art1.png"/></div>
            <div className="-rotate-6 hover:rotate-0 transition-all" style={{
                position: "absolute",
                right: "60%",
                width: cardWidth,
                height: cardHeight,
                transform: `scale(${getScale(300)}) rotate(-6deg)`,
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                opacity: `${getOpacity(400)}`,
                bottom:"10%",
            }}
            onMouseEnter={(e)=>{
                e.currentTarget.style.transform='rotate(0deg) scale(1.2)'
            }}
            onMouseLeave={(e)=>{
                e.currentTarget.style.transform='rotate(-6deg)'
            }} ><Photo url="art2.png"/></div>
                <div className="" style={{
                position: "absolute",
                left: "60%",
                width: cardWidth,
                height: cardHeight,
                transform: `scale(${getScale(500)}) rotate(-3deg)`,
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                opacity: `${getOpacity(600)}`,
                top:"10%",
            }}
            onMouseEnter={(e)=>{
                e.currentTarget.style.transform='rotate(0deg) scale(1.2)'
            }}
            onMouseLeave={(e)=>{
                e.currentTarget.style.transform='rotate(-3deg)'
            }}
            ><Photo url="art3.png"/></div>
                <div className=" transition-all"  style={{
                position: "absolute",
                left: "60%",
                width: cardWidth,
                height: cardHeight,
                transform: `scale(${getScale(700)}) rotate(12deg)`,
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                opacity: `${getOpacity(800)}`,
                bottom:"10%",
            }}             
            onMouseEnter={(e)=>{
                e.currentTarget.style.transform='rotate(0deg) scale(1.2)'
            }}
            onMouseLeave={(e)=>{
                e.currentTarget.style.transform='rotate(12deg)'
            }}><Photo url="art4.png"/></div>

        </div>
        <div className="h-screen w-full flex flex-col">
        </div>        
        <div className="w-full flex flex-col" style={{height : "50vh"}}>
        </div>
    </div>
  );
}

export default Hero;
