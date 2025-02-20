import React from 'react';
import AnimationBanner from '../../components/Home/AnimationBanner';
import { Helmet } from 'react-helmet';

// const learn =
//   'https://e7.pngegg.com/pngimages/276/285/png-clipart-source-code-computer-programming-web-development-digital-development-computer-computer-programming.png';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Leading Web Development Agency | Custom Software Solutions</title>
        <meta name="description" content="Expert web development agency specializing in AI, cloud computing, and custom software solutions. Transform your business with our cutting-edge development services." />
        <meta name="keywords" content="web development agency, custom software development, AI solutions, cloud computing, business technology" />
      </Helmet>

      <main className="w-full min-h-auto bg-gradient-to-b from-[#4c8dc2] to-[#fff] flex items-center">
        <div className="container mx-auto px-6 py-6 relative">
          <section className="flex flex-col lg:flex-row justify-between items-center gap-12">
            {/* Left-Side Content */}
            <article className="flex-1 text-center lg:text-left mb-20 max-lg:mb-6">
              <h1 className="text-lg lg:text-4xl font-bold uppercase mb-4 leading-snug">
                <span
                  className="block"
                  style={{
                    animation: "slideInLeft 2s ease-in-out 75s infinite",
                    display: "inline-block",
                  }}
                >
                  <span className="text-blue-600">WEB DEVELOPMENT</span> SERVICES
                  <br />
                  Custom Software Solutions
                </span>    
              </h1>
              <p
                className="text-md sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-8"
                style={{
                  animation: "fadeInText 2s ease-in-out 75s infinite",
                }}
              >
                Transform your digital presence with our expert web development services. 
                We specialize in AI integration, cloud solutions, and custom software 
                development to drive your business forward.
              </p>

              {/* Contact Button Section */}
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                style={{
                  animation: "fadeInText 2s ease-in-out 75s infinite",
                }}
              >
                <a
                  href="https://wa.me/919265128409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+919265128409"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  +91 9265128409
                </a>
                <a
                  href="skype:live:.cid.92f9844d186c48cb?chat"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#00AFF0] hover:bg-[#0095cc] text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.069 18.874c-4.023 0-5.82-1.979-5.82-3.464 0-.765.561-1.296 1.333-1.296 1.723 0 1.273 2.477 4.487 2.477 1.641 0 2.55-.895 2.55-1.811 0-.551-.269-1.16-1.354-1.429l-3.576-.895c-2.88-.724-3.403-2.286-3.403-3.751 0-3.047 2.861-4.191 5.549-4.191 2.471 0 5.393 1.373 5.393 3.199 0 .784-.688 1.24-1.453 1.24-1.469 0-1.198-2.037-4.164-2.037-1.469 0-2.292.664-2.292 1.617s1.153 1.258 2.157 1.487l2.637.587c2.891.649 3.624 2.346 3.624 3.944 0 2.476-1.902 4.324-5.722 4.324m11.084-4.882l-.029.135-.044-.24c.015.045.044.074.059.12.12-.675.181-1.363.181-2.052 0-1.529-.301-3.012-.898-4.42-.569-1.348-1.395-2.562-2.427-3.596-1.049-1.033-2.247-1.856-3.595-2.426-1.318-.631-2.801-.93-4.328-.93-.72 0-1.444.07-2.143.204l.119.06-.239-.033.119-.025C8.91 1.529 7.829 1.168 6.678 1.168c-1.195 0-2.326.466-3.177 1.316-.851.851-1.321 1.982-1.321 3.178 0 1.152.361 2.231.987 3.129l-.025-.119-.033.239.06-.119C3.099 9.92 3.014 10.643 3.014 11.373c0 1.527.301 3.01.898 4.42.569 1.348 1.394 2.562 2.427 3.596 1.05 1.033 2.247 1.856 3.595 2.426 1.318.631 2.801.93 4.328.93.66 0 1.334-.06 1.977-.179l-.119-.062.24.033-.135.029c.894.591 1.96.915 3.107.915 1.195 0 2.326-.466 3.177-1.316.851-.851 1.321-1.982 1.321-3.178 0-1.147-.324-2.217-.912-3.121zm-1.493 4.04c-.72.72-1.678 1.116-2.697 1.116-.971 0-1.892-.27-2.697-.764l-.149-.099-.466.033c-.561.045-1.123.066-1.673.066-1.297 0-2.549-.242-3.729-.721-1.14-.544-2.155-1.306-3.029-2.181-.875-.875-1.537-1.893-2.08-3.032-.479-1.037-.721-2.289-.721-3.729 0-.482.021-.981.06-1.482l.036-.466-.098-.148c-.527-.792-.805-1.72-.805-2.716 0-1.019.396-1.977 1.116-2.697.72-.72 1.678-1.116 2.697-1.116.93 0 1.817.271 2.597.765l.148.099.466-.033c.561-.045 1.123-.066 1.673-.066 1.297 0 2.549.242 3.729.721 1.14.544 2.155 1.306 3.029 2.181.875.875 1.537 1.893 2.08 3.032.479 1.037.721 2.289.721 3.729 0 .508-.021.995-.06 1.453l-.036.466.098.149c.527.792.805 1.72.805 2.716 0 1.019-.396 1.977-1.116 2.697"/>
                  </svg>
                  Chat on Skype
                </a>
              </div>

              {/* Keyframes for Animation */}
              <style>
                {`
                @keyframes slideInLeft {
                  0% {
                    transform: translateX(-100%);
                    opacity: 0;
                  }
                  10% {
                    transform: translateX(0%);
                    opacity: 1;
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
                  10% {
                    transform: translateX(0%);
                    opacity: 1;
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
                  10% {
                    opacity: 1;
                  }
                  100% {
                    opacity: 1;
                  }
                }
                `}
              </style>
            </article>
            
            {/* Right-Side Animated Image */}
            <aside>
              <AnimationBanner />
            </aside>
          </section>
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
      </main>
    </>
  );
};

export default Home;
