import React from 'react';
import AnimationBanner from '../../components/Home/AnimationBanner';

// const learn =
//   'https://e7.pngegg.com/pngimages/276/285/png-clipart-source-code-computer-programming-web-development-digital-development-computer-computer-programming.png';

const Home = () => {
  return (
    <div className="w-full min-h-auto  bg-gradient-to-b from-[#c0ccd6] to-[#fff] flex items-center">
      <div className="container mx-auto px-6 py-6 relative">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left-Side Text */}
          <div className="flex-1 text-center lg:text-left mb-20 max-lg:mb-6">
            <h1 className="text-lg lg:text-4xl font-bold uppercase mb-4 leading-snug">
              <span
                className="block"
                style={{
                  animation: "slideInLeft 6s ease-in-out infinite",
                  animationDelay: "1s",
                  display: "inline-block",
                }}
              >
                Revolutionizing Technology
                <br />
                Empowering Businesses
              </span>    
            </h1>
            <p
              className="text-md sm:text-lg lg:text-xl text-gray-600 leading-relaxed"
              style={{
                animation: "fadeInText 6s ease-in-out infinite",
                animationDelay: "1s",
              }}
            >
              Unleashing the power of AI, cloud computing,
              and next-gen software to drive innovation, efficiency, and growth.
              Future-proof your business with cutting-edge technology.
            </p>

            {/* Keyframes for Animation */}
            <style>
              {`
              @keyframes slideInLeft {
                0% {
                  transform: translateX(-100%);
                  opacity: 0;
                }
                100% {
                  transform: translateX(0%);
                  opacity: 1;
                }
              }
    
              @keyframes slideInRight {
                0% {
                  transform: translateX(100%);
                  opacity: 0;
                }
                100% {
                  transform: translateX(0%);
                  opacity: 1;
                }
              }
    
              @keyframes fadeInText {
                0% {
                  opacity: 0;
                }
                100% {
                  opacity: 1;
                }
              }
            `}
            </style>
          </div>
          {/* Right-Side Animated Image */}
          <AnimationBanner />
        </div>
      </div>

      {/* Keyframe Animations */}
      <style>
        {`
          /* Fade In for Text */
          @keyframes fadeInText {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Reveal Animation for Each Text Block */
          @keyframes revealText {
            0% {
              opacity: 0;
              transform: translateX(-30px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Enhanced Floating Animation for Image */
          @keyframes floatImage {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-25px) rotate(0deg);

            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
