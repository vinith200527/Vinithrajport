import React from 'react'
import TiltedCard from '../componentes/TiltedCard'
import BlurText from '../componentes/BlurText'
import DecryptedText from '../componentes/DecryptedText';
import SplashCursor from '../componentes/SplashCursor';

const SecondPage = () => {


    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };


    return (
        <div className=" gap-30  p-20  pt-50  flex flex-row justify-evenly " >

            
                <TiltedCard
                    imageSrc="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyxV9J2qfTnJq4C2vbgiyuQF1kE4OsQ93CyM4k8dJ13F8r4DmDCZTLXvhTBsL2mYABwMDcIm9iC9cnvHBkQlvM9uqsTkGzNiNgfWJ3e9jYft-ju88inKWZgbNyTzLbMvz2A_sCANegP2RVdamKwIPnp9qg8GhlEXVVoVboyQR9f3n79TXUjnt9CekrFQid/s3935/IMG-20240801-WA0026.jpg"
                    altText="Kendrick Lamar - GNX Album Cover"
                    captionText="R.Vinithraj"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="500px"
                    imageWidth="400px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text  p-4">
                            @vinithraj
                        </p>
                    }
                />

          


            <div className="">


                <div className="text-white sm:display-none">

                    <BlurText
                        text="Hello, It's me "
                        delay={190}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-3xl mb-4   font-bold  font-serif   text-blue-500"
                    />


                </div>
                <div className="text-5xl font-semibold font-serif  mt-7   text-blue-500 " >

                    {/* Example 1: Default */}
                    <DecryptedText text=" " />

                    {/* Example 2: Customized speed and characters */}
                    <DecryptedText
                        text="Vinithraj"
                        speed={1000000}
                        maxIterations={20}
                        characters="ABCD1234!?"
                        className="revealed"
                        parentClassName="all-letters"
                        encryptedClassName="encrypted"
                    />

                    {/* Example 3: Animate on view (runs once) */}
                    <div style={{ marginTop: '4rem' }}>
                        <DecryptedText
                            text=""
                            animateOn="view"
                            revealDirection="center"
                        />
                    </div></div>



                <div className="text-white sm:display-none mt-[-100px]">

                    <BlurText
                        text="And I am a "
                        delay={190}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-4xl mb-4   font-bold  font-serif   text-blue-500"
                    />


                </div>
                <div className="text-xl font-semibold font-serif    text-blue-500 mt-[-30px]" >

                    {/* Example 1: Default */}
                    <DecryptedText text=" " />

                    {/* Example 2: Customized speed and characters */}
                    <DecryptedText
                        text=" Engineering Student + Web Developer + Designer+Digital Marketing + Meta Ads + SEO..."
                        speed={1000000}
                        maxIterations={20}
                        characters="ABCD1234!?"
                        className="revealed"
                        parentClassName="all-letters"
                        encryptedClassName="encrypted"
                    />

                    {/* Example 3: Animate on view (runs once) */}
                    <div style={{ marginTop: '1rem' }}>
                        <DecryptedText
                            text="Vel Tech Multitech Dr.Rangarajan Dr.Sakunthala Engineering College"
                            animateOn="view"
                            revealDirection="center"
                        />
                    </div>
                    </div>



            </div>

        </div>
    )
}

export default SecondPage
