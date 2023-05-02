import React from "react";
import Title from "../components/layouts/Title";
import Navbar from "../components/navbar/Navbar";
import { courses } from "../constants";
import Footer from "../components/footer/Footer";
function Courses() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="flex justify-center items-center text-center mt-4">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="Courses"
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
                        UG/PG
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                      >
                        Course Name
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                      >
                        Course Code
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                      >
                        UG/PG
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                      >
                        Course Name
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                      >
                        Course Code
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map((items, index) =>
                      index % 2 === 0 ? (
                        <tr class="bg-gray-100 border-b">
                          {items.map((item, index) => (
                            <td
                              class="px-3 py-4 whitespace-nowrap text-sm font-light text-gray-900"
                              key={index}
                            >
                              {item}
                            </td>
                          ))}
                        </tr>
                      ) : (
                        <tr class="bg-gray-200 border-b">
                          {items.map((item, index) => (
                            <td
                              class="px-3 py-4 whitespace-nowrap text-sm font-light text-gray-900"
                              key={index}
                            >
                              {item}
                            </td>
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

export default Courses;
