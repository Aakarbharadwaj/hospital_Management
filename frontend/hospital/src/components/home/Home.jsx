import React from "react";
import Slider from "./Slider";
import { slides } from "../../data/slides";

function Home() {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center bg-gray-100 ">
                <Slider slides={slides} />
            </div>
            <div className="flex justify-between w-full min-h-screen pt-10 pb-10 border-2 ">
                <div className="w-1/3 m-5 relative border-2">
                    <img src="https://media.istockphoto.com/id/1319031310/photo/doctor-writing-a-medical-prescription.jpg?s=612x612&w=0&k=20&c=DWZGM8lBb5Bun7cbxhKT1ruVxRC_itvFzA9jxgoA0N8=" className="absolute inset-0 w-full h-full object-cover rounded-md" alt="Doctor writing a medical prescription" />
                    <p className="text-black w-1/2 absolute z-10 top-10 left-10 p-4 bg-white bg-opacity-75 rounded-md">We have the best Doctor's team jg arrihgpairh gihar;giha ;hrgifh har;hv;n irhan </p>

                    <button className="absolute z-10 bottom-10 left-10 p-3 bg-pink-500 bg-opacity-45 text-white hover:border-2 border-white rounded-lg duration-1000 ">click to know more</button>


                </div>
                <div className="flex flex-col justify-center items-center">
                    <button className="bg-blue-950 p-4 text-blue-50 rounded-md hover:bg-blue-400 transition duration-500">
                        Book Appointment
                    </button>
                    <button className="mt-20 bg-blue-950 p-4 text-blue-50 rounded-md hover:bg-blue-400 transition duration-500">
                        View Area of care
                    </button>

                </div>
                <div className="w-1/3 m-5 relative">
                    <img src="https://i.pinimg.com/originals/0e/3b/51/0e3b51393fb713a46edec861b7f5db70.jpg" className="absolute inset-0 w-full h-full object-cover rounded-md" alt="Doctor writing a medical prescription" />
                    <p className="text-white absolute bottom-0 left-0 p-4">Hello</p>
                </div>
            </div>

        </div>
    )
}

export default Home;

// <div className="w-1/3 m-5 bg-cover bg-center bg-no-repeat"
//                     style={{ "backgroundImage": 'url("https://i.pinimg.com/originals/0e/3b/51/0e3b51393fb713a46edec861b7f5db70.jpg")', "minHeight": "300px" }}>
//                     {/* Other content or components inside the div */}
//                 </div>