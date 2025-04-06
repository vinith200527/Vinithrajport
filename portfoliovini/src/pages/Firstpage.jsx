import React from 'react'
import TrueFocus from '../componentes/TrueFocus'
import GooeyNav from '../componentes/GooeyNav'
import Aurora from '../componentes/Aurora';
import Ballpit from '../componentes/Ballpit';
import Hyperspeed from '../componentes/Hyperspeed';
import TiltedCard from '../componentes/TiltedCard';
import DecryptedText from '../componentes/DecryptedText';
import RotatingText from '../componentes/RotatingText';
import Ribbons from '../componentes/Ribbons';
import Secondpage from './secondpage.jsx';

const Firstpage = () => {
    const items = [
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        { label: "Projects", href: "#" },
        { label: "Contact", href: "#" },

    ];


    return (

        <div className="">
            <div className="bg-black border-b-2 border-white p-4 flex flex-row justify-between items-center border-solid  fixed top-0 left-0 right-0 z-50  
                md:align-center  " >




                <div className="    "   >
                    <TrueFocus
                        sentence="Vinith raj"
                        manualMode={false}
                        blurAmount={5}
                        borderColor="blue"
                        animationDuration={2}
                        pauseBetweenAnimations={1}
                    />
                </div>



                <div className='md:flex hidden  ' >
                    <GooeyNav
                        items={items}
                        animationTime={600}
                        pCount={15}
                        minDistance={20}
                        maxDistance={42}
                        maxRotate={75}
                        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                        timeVariance={300}
                    />
                </div>







                {/* <div className=" flex  gap-20 text-white text-2xl font-semibold   " >
                <p className='' >Home </p>
                <p>About Me</p>
                <p>Projects</p>
                <p>Contact</p>

            </div> */}




            </div>
            {/* 
            <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.26}
                amplitude={1.0}
                speed={2}
            /> */}

            <div className="      " >
       

<Secondpage   />
             

                {/* <div className="">

                    <RotatingText
                        texts={['React', 'Bits', 'Development', 'Vinith!']}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                </div> */}
            </div  >


            {/* <div className=" ">
                <Hyperspeed
                    effectOptions={{
                        onSpeedUp: () => { },
                        onSlowDown: () => { },
                        distortion: 'turbulentDistortion',
                        length: 400,
                        roadWidth: 10,
                        islandWidth: 2,
                        lanesPerRoad: 4,
                        fov: 90,
                        fovSpeedUp: 150,
                        speedUp: 2,
                        carLightsFade: 0.4,
                        totalSideLightSticks: 20,
                        lightPairsPerRoadWay: 40,
                        shoulderLinesWidthPercentage: 0.05,
                        brokenLinesWidthPercentage: 0.1,
                        brokenLinesLengthPercentage: 0.5,
                        lightStickWidth: [0.12, 0.5],
                        lightStickHeight: [1.3, 1.7],
                        movingAwaySpeed: [60, 80],
                        movingCloserSpeed: [-120, -160],
                        carLightsLength: [400 * 0.03, 400 * 0.2],
                        carLightsRadius: [0.05, 0.14],
                        carWidthPercentage: [0.3, 0.5],
                        carShiftX: [-0.8, 0.8],
                        carFloorSeparation: [0, 5],
                        colors: {
                            roadColor: 0x080808,
                            islandColor: 0x0a0a0a,
                            background: 0x000000,
                            shoulderLines: 0xFFFFFF,
                            brokenLines: 0xFFFFFF,
                            leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                            rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                            sticks: 0x03B3C3,
                        }
                    }}
                />
            </div> */}


            {/* <div className="absolute bottom-0  left-0 right-0  fixed  " >

                <div style={{ overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%', bottom: '0' }}>
                    <Ballpit
                        count={60

                        }
                        gravity={0.1}
                        friction={0.9870}
                        wallBounce={0.95}
                        // followCursor={false}
                    />
                </div>
            </div> */}
        </div >
    )
}

export default Firstpage
