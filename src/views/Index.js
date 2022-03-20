/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import back from "../assets/img/back.jpeg"
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import back1 from "../assets/img/property (1).jpeg"
import back2 from "../assets/img/property (3).jpeg"
import back3 from "../assets/img/property (3).jpeg"
import back4 from "../assets/img/property (6).jpeg"
import bedroom from '../assets/img/bedroom.jpeg';
import package1 from '../assets/img/package1.jpeg'

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
              <p className="mt-4 text-lg leading-relaxed  text-white">
              Bloos Sky in Rishikesh is one of the top-notch Eco-Luxury resort in the river Ganga. Sheltered near ganga river and is a place with peace where you can spend time with your family or can connect with oneself, a perfect place to be “yourself,” to be precise. The serenity will help you heal the mayhem which is going in and around you, and when you are with us, you choose comfort and harmony, But this is definitely not the only reason we are inviting you.
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-white text-sm"
                  target="_blank"
                >
 
                </a>
              </p>
              <div className="mt-12">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Book Now
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
             <span className="font-bold"> HOLI FESTIVAL BOOKING 18 MARCH</span> <br/>
<span className="font-bold">RESORT : </span>The Bloos Sky<br/>
<span className="font-bold">NAME : </span>Nitin Negi<br/>
<span className="font-bold">PHONE : </span>7017952158<br/>
<span className="font-bold">RATE : </span>1800/- PP Triple Sharing<br/>
RATE :@2200/- PP Double Sharing.<br/>

<span className="font-bold">Notes :- </span>16 km Rafting = 650/- PP Extra.<br/>
<span className="font-bold">RESORT : </span>The Bloos Sky<br/>
( Rafting payment will be pay at Rafting office. ) <br/>
 </p>
          

              
             <a href="tel:+91-7017952158" className="bg-red-500 p-2  text-white border-white border-2 rounded-lg">Book Now</a>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <img src={package1}/>
            </div>
          </div>

          {/* <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Holi in Bloos Sky
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
             <span className="font-bold"> HOLI FESTIVAL BOOKING 18 MARCH</span> <br/>
<span className="font-bold">RESORT : </span>The Bloos Sky<br/>
<span className="font-bold">NAME : </span>Nitin Negi<br/>
<span className="font-bold">PHONE : </span>7017952158<br/>
<span className="font-bold">RATE : </span>@2200/- PP Double Sharing.<br/>
RATE :@2200/- PP Double Sharing.<br/>
<span className="font-bold">Holi special : : </span>Gujiya  + Colour  + DJ.<br/>
Three times Meals +  Evening Snacks. <br/>
<span className="font-bold">Notes :- </span>16 km Rafting = 650/- PP Extra.<br/>
<span className="font-bold">RESORT : </span>The Bloos Sky<br/>
( Rafting payment will be pay at Rafting office. ) <br/>
 </p>
             
 <a href="tel:+91-7017952158" className="bg-red-500 p-2  text-white border-white border-2 rounded-lg">Book Now</a>
             
             
            </div>
          </div> */}
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
                src={back4}
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Bloos Sky</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            Bloos Sky in Rishikesh is one of the top-notch Eco-Luxury resort in the river Ganga. Sheltered near ganga river and is a place with peace where you can spend time with your family or can connect with oneself, a perfect place to be “yourself,” to be precise. The serenity will help you heal the mayhem which is going in and around you, and when you are with us, you choose comfort and harmony, But this is definitely not the only reason we are inviting you.
            </p>
          </div>
        </div>
      </section>

      <section className=" relative z-1 ">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Bedroom
                  </h5>
                  <Link to="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={bedroom}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-6/12 px-4">
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

                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="  overflow-hidden back1 mt-10">
        <div className="container mx-auto pb-64 ">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-12/12 px-2 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Experience in Bloos Sky Rishikesh
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
              We have{" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-300"
                  target="_blank"
                >
                  successfully
                </a>{" "}
                  completed a decade in field of tour and travel. During this tenure we have served thousands of clients from across the globe. Through this experience we have developed a rich understanding of travelers mood. So we can better suggest and offer trips of your mood. Our team of well trained and certified guides would make your journey hassle free and memorable.

As we are here not for the sake of business only, we want to promote culture, tourism and rural entrepreneurship as well. At the same time protecting environment is our big concern. Whenever we take traveler for trip, we not just focus to reduce plastic waste generation, but also try to optimize the exploitation of natural resources.


              </p>
            
              <a
                href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Book Now
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
