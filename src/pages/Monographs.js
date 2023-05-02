import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Title from "../components/layouts/Title";
import { monographs } from "../constants";
import { useParams } from "react-router-dom";

function Monographs() {
  const { id } = useParams();
  console.log(id);
  const monographData = monographs.find((obj) => {
    // return obj._id === id;
    if (id === obj._id) return obj;
  });
  console.log(monographData.title);
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="flex justify-center items-center text-center mt-4">
        <Title
          // title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des={monographData.title}
        />
      </div>
      <h2 className="text-4xl ml-20">
        <span className="font-bold">Botanical name: </span>
        <span className="mr-20">{monographData.botanicalName}</span>
        <span className="font-bold ml-20">Family:</span> {monographData.family}
      </h2>
      <h2 className="text-4xl font-bold ml-20 mt-10">Introduction:</h2>
      <div className="max-w-screen-xl mx-auto">
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-8">
          {monographData.introduction}
        </p>
      </div>
      <h2 className="text-4xl font-bold ml-20 mt-10">Vernacular Names:</h2>
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
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Language
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Language
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {monographData.vernacularNames.map((items, index) =>
                      index % 2 === 0 ? (
                        <tr class="bg-gray-100 border-b">
                          {items.map((item, index) => (
                            <td
                              class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900"
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
                              class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900"
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
      {monographData.morphology && (
        <>
          <h2 className="text-4xl font-bold ml-20 mt-10">Morphology:</h2>
          <div className="max-w-screen-xl mx-auto">
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <tbody>
                        {monographData.morphology.map((items, index) =>
                          index % 2 === 0 ? (
                            <tr class="bg-gray-100 border-b">
                              {items.map((item, index) => (
                                <td
                                  class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900"
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
                                  class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900"
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
        </>
      )}
      <h2 className="text-4xl font-bold ml-20 mt-10">Literature survey</h2>
      <h4 className="text-1xl font-bold ml-20 mt-10">
        Clinical trial reports with reference to Clinicaltrial.gov
      </h4>
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
                        SL. no.
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                      >
                        Condition/Disease
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                      >
                        Intervention
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                      >
                        Phases
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                      >
                        Party responsible
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                      >
                        Study design
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                      >
                        Identifier
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {monographData.literature.map((items, index) =>
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
      {monographData.preclinical && (
        <>
          <h2 className="text-4xl font-bold ml-20 mt-10">
            Preclinical and animal studies:
          </h2>
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
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            SL. No.
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Pharmacological action
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Intervention
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Study model/design
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Reference
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {monographData.preclinical.map((items, index) =>
                          index % 2 === 0 ? (
                            <tr class="bg-gray-100 border-b">
                              {items.map((item, index) => (
                                <td
                                  class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900"
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
                                  class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900"
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
        </>
      )}
      <Footer />
    </div>
  );
}

export default Monographs;
