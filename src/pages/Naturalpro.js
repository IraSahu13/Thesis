import React, { useState } from 'react';
import Title from "../components/layouts/Title";
import Navbar from "../components/navbar/Navbar";
import { NPdata } from "../constants";
import Footer from "../components/footer/Footer";
import he from "../assets/images/logo.png";
import img from "../assets/images/index";
import "../index.css";
// const na1={img.i1;
function Naturalpro() {
    const [name,setName] =useState("")
    return (
        


        <div className="w-full h-auto bg-bodyColor text-lightText px-4">
            <Navbar />
            <div className="flex justify-center items-center text-center mt-4">
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="Natural Products Data"
                />
            </div>
            <div className="max-w-screen-xl mx-auto">
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full">
                                    <thead class="bg-white border-b">
                                        <tr>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                                            >
                                                S.No.
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                                            >
                                            structure
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                                            >
                                                InChI-Key
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                                            >
                                                pka
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                                            >
                                                Total Molweight
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                                            >
                                                cLogP
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                                            >
                                                cLogS
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                                            >
                                                H-Acceptors
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                                            >
                                                H-Donors
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                                            >
                                                Total Surface Area
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                                            >
                                                Druglikeness
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {NPdata.map((items, index) =>
                                            index % 2 === 0 ? (
                                                <tr class="bg-gray-100 border-b">
                                                    {items.map((item, index) => (
                                                        <>                                               
<td data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="px-3 py-4 whitespace-nowrap text-sm font-light text-gray-900" onClick={()=>{setName(items[1])}}>
  {item}
</td>

<div id="popup-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        {/* <img src={he}/> */}
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
                
            </button>
            <div class="p-6 text-center">
            <img src={he}/>
               <p>{name}</p>
            </div>
        </div>
    </div>
</div>
</>
                                                    ))}
                                                    
                                                </tr>
                                            ) : (
                                                <tr class="bg-gray-200 border-b">
                                                    {items.map((item, index) => (
                                                        <>                                               
<td data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="px-3 py-4 whitespace-nowrap text-sm font-light text-gray-900" onClick={()=>{setName(items[1])}}>
  {item}
</td>

<div id="popup-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        {/* <img src={he}/> */}
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
                
            </button>
            <div class="p-6 text-center">
            <img src={name}/>
            <p>{name}</p>
               
            </div>
        </div>
    </div>
</div>
</>
                                                    ))}
                                                    
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Naturalpro;
