/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import back from "../assets/img/back.jpeg"
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import back1 from "../assets/img/property (1).jpeg"
import back2 from "../assets/img/property (11).jpeg"
import back3 from "../assets/img/property (3).jpeg"
import back4 from "../assets/img/property (6).jpeg"



export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px back">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-white">
              The Bloos Sky - Rishikesh
              </h2>
              <p className="mt-4 text-sm leading-relaxed  text-white">
              Holi packages in Rishikesh are starting from Rs 1299/person. We are offer best tour packages for Holi Festival Saturday, 18 March 2022 in Rishikesh. {" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-white text-sm"
                  target="_blank"
                >
 
                </a>
                Holi Celebrations River Rafting, Body Surfing, Cliff Jumping, Waterfall/Jungle Trekking, Bird Watching, Bonefire, Volleyball Adventure Spots. All meals Breakfast, Lunch, Snacks and Dinner. 
              </p>
              <div className="mt-12">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Call Now
                </a>
              
              </div>
            </div>
          </div>
        </div>

       
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src={back}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                  About Holiday Hike
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                  We are most recommended Dehradun based tour and travel company of Uttarakhand. We provide all kind of tour and travel services. We cater need of every type of traveler, either you are a backpacker, a leisure traveler, a honeymooner or a budget traveler, travelling with family, friends, couples, solo travelers and even groups. Since holidays are more about personal choices and interests, we also bring to you the option to customize your tour packages as well.

We are providing assistance from flights booking to accommodation, local transport to delicious food, pilgrimages to adventurous activities and cultural events.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Tour Package
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Tour Packages to all over India, Especially targeted Uttarakhand Tourism.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                       Taxi Booking
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Taxi Booking services all over the India.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Helicopter Booking</h6>
                      <p className="mb-4 text-blueGray-500">
                        Helicopter Booking service in Uttarakhand, Kedarnath.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Hotel Booking
                      </h6>
                      <p className="mb-4 text-blueGray-500">
Hotel Booking service in Uttarakhand, India                     </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
             
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
              The Bloos Sky- Cottage
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              🏵️HOLI FESTIVAL BOOKING 18 MARCH 🏵️<br/>

RESORT :  The Bloos Sky🎊<br/>
NAME :  NITIN Negi <br/>
PHONE : 7017952158 .📱<br/>
RATE : 🏕️🏡<br/>
@ 1800/- PP Triple Sharing<br/>
Three times Meals + 🍱 Evening Snacks. 🍟☕<br/>

Holi special :-  Gujiya 🧇 + Colour 🎨 + DJ. 🎼🎤<br/>

Notes :-  16 km Rafting = 650/- PP Extra. 🚣🏻‍♂️<br/>
( Rafting payment will be pay at Rafting office. ) 🛎️<br/>
                </p>
              
             <button className="bg-red-500 p-2  text-white border-white border-2 rounded-lg">Book Now</button>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={back}         className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
                />
                <img
                  alt="..."
                  src={back}                  className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                />
                <img
                  alt="..."
                  src={back}               className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                />
                <img
                  alt="..."
                  src={back}            className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src={back}          className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src={back}              className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  
                    
                      <img
                        alt="..."
                        className="shadow-md  max-w-full w-full mx-auto  bg-white"
                        src={back}                />
                     <br/>
                
                 
                      <img
                        alt="..."
                        className="shadow-md  max-w-full w-full mx-auto p-2 bg-white"
                        src={back}               />
                     <br/>
                   
                 <img
                        alt="..."
                        className="shadow-md  max-w-full w-full mx-auto p-2 bg-white"
                        src={back}                />
                     <br/>
                   
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <img
                        alt="..."
                        className="shadow-md  max-w-full w-full mx-auto p-2 bg-white"
                        src={back}            />
                     <br/>
                   
                   <img
                        alt="..."
                        className="shadow-md  max-w-full w-full mx-auto p-2 bg-white"
                        src={back}                 />
                     <br/>
                
                   <img
                        alt="..."
                        className="shadow-md  max-w-full w-full mx-auto p-2 bg-white"
                        src={back}             />
                     <br/>
                   
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Holi in Bloos Sky
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              🏵️HOLI FESTIVAL BOOKING 18 MARCH 🏵️<br/>

RESORT :  The Bloos Sky🎊<br/>
NAME :  NITIN Negi <br/>
PHONE : 7017952158 .📱<br/>
RATE : 🏕️🏡<br/>
@2200/- PP Double Sharing.<br/>
Three times Meals + 🍱 Evening Snacks. 🍟☕<br/>

Holi special :-  Gujiya 🧇 + Colour 🎨 + DJ. 🎼🎤<br/>

Notes :-  16 km Rafting = 650/- PP Extra. 🚣🏻‍♂️<br/>
( Rafting payment will be pay at Rafting office. ) 🛎️<br/> </p>
             
              <button className="bg-red-500 p-2  text-white border-white border-2 rounded-lg">Know More</button>
             
             
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-10 pt-10">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                
                <h3 className="text-2xl font-semibold">
                Why you should choose Bloos Sky                </h3>
                <p className="mt-4 text-sm leading-relaxed text-blueGray-500">
                <p className="text-lg font-bold">24- Hours check-in</p> 

We here at Bloos Sky are available 24*7 for your service and can check in anytime you feel like.
<br/>
<p className="text-lg font-bold">
Free breakfast</p>
We always try to make our customers happy and satisfied with the facilities keeping their requirements in mind we serve complimentary breakfast to all customers.
<br/>

<p className="text-lg font-bold">Security</p>
“your security is our priority” proving this phrase right we have ensured everything for you to feel secure.
 to develop an eco-friendly system we provide bicycles on rent if someone wants to travel to nearby places and enjoying to their fullest.

                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
    Bonfire Session
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        Barbeque Session                         </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                    
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={back2}
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Bloos Sky</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            Badrinath Hotels and Accommodation have Sanitized Rooms, Trained Staff, Sterilize Indoor with Guest and Staff Temperature Check. Best Hotel in Badrinath Narmada Bhavan, Hotel Acharya Sadan, Also Have Hotel Similar Ashram in Badrinath is Jalaram Ashram, Sheshnetra Ashram, Bharat Sevashram Sangha.
            </p>
          </div>
        </div>
      </section>

      <section className=" relative z-1 ">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Bedroom
                  </h5>
                  <Link to="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={back1}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Balcony
                  </h5>
                  <Link to="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={back4}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Washroom
                  </h5>
                  <Link to="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={back2}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="  overflow-hidden back1 mt-10">
        <div className="container mx-auto pb-64 ">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Kedarnath Darshan
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Since{" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-300"
                  target="_blank"
                >
                  Tailwind CSS
                </a>{" "}
                is an open source project we wanted to continue this movement
                too. You can give this version a try to feel the design and also
                test the quality of the code!
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                Get it free on Github and please help us spread the news with a
                Star!
              </p>
              <a
                href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Github Star
              </a>
            </div>

            
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto ">
          <div className="flex flex-wrap call justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center  lg:w-8/12">
            
              <h3 className="font-semibold text-3xl">
                Want to Join the Holi party? 
              </h3>
              <p className="text-gray-900 text-lg leading-relaxed mt-4 mb-4">
              A wonderful serenity has taken possession of my entire soul, like these sweet mornings.
              </p>
              <div className="sm:block flex  flex-col mt-10">
                <a
                  href="tel:+91-7017952158"
             
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-red-600 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Call Now
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}