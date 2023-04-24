import React from "react";
import { useState } from "react";
import Footer from "../components/footer/Footer";
import Title from "../components/layouts/Title";
import Navbar from "../components/navbar/Navbar";
import {
  researchData2017,
  researchData2018,
  researchData2019,
  researchData2020,
  researchData2021,
  researchData2022,
  researchData2023,
} from "../constants";

function Research() {
  const [show2023, setShow2023] = useState(true);
  const [show2022, setShow2022] = useState(false);
  const [show2021, setShow2021] = useState(false);
  const [show2020, setShow2020] = useState(false);
  const [show2019, setShow2019] = useState(false);
  const [show2018, setShow2018] = useState(false);
  const [show2017, setShow2017] = useState(false);
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="flex justify-center items-center text-center mt-4">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="Research Articles"
        />
      </div>

      <ul>
        <li>
          <h2
            className="text-4xl font-bold ml-20"
            onClick={() => setShow2023(!show2023)}
          >
            Year 2023
          </h2>
        </li>
        <div className="max-w-screen-xl mx-auto">
          {show2023 &&
            researchData2023.map(({ _id, data }) => (
              <p
                className="text-base font-bodyFont leading-6 tracking-wide mt-8"
                key={_id}
              >
                {data}
              </p>
            ))}
        </div>
        <li className="mt-8">
          <h2
            className="text-4xl font-bold ml-20"
            onClick={() => setShow2022(!show2022)}
          >
            Year 2022
          </h2>
        </li>
        <div className="max-w-screen-xl mx-auto">
          {show2022 &&
            researchData2022.map(({ _id, data }) => (
              <p
                className="text-base font-bodyFont leading-6 tracking-wide mt-8"
                key={_id}
              >
                {data}
              </p>
            ))}
        </div>
        <li className="mt-8">
          <h2
            className="text-4xl font-bold ml-20"
            onClick={() => setShow2021(!show2021)}
          >
            Year 2021
          </h2>
        </li>
        <div className="max-w-screen-xl mx-auto">
          {show2021 &&
            researchData2021.map(({ _id, data }) => (
              <p
                className="text-base font-bodyFont leading-6 tracking-wide mt-8"
                key={_id}
              >
                {data}
              </p>
            ))}
        </div>
        <li className="mt-8">
          <h2
            className="text-4xl font-bold ml-20"
            onClick={() => setShow2020(!show2020)}
          >
            Year 2020
          </h2>
        </li>
        <div className="max-w-screen-xl mx-auto">
          {show2020 &&
            researchData2020.map(({ _id, data }) => (
              <p
                className="text-base font-bodyFont leading-6 tracking-wide mt-8"
                key={_id}
              >
                {data}
              </p>
            ))}
        </div>
        <li className="mt-8">
          <h2
            className="text-4xl font-bold ml-20"
            onClick={() => setShow2019(!show2019)}
          >
            Year 2019
          </h2>
        </li>
        <div className="max-w-screen-xl mx-auto">
          {show2019 &&
            researchData2019.map(({ _id, data }) => (
              <p
                className="text-base font-bodyFont leading-6 tracking-wide mt-8"
                key={_id}
              >
                {data}
              </p>
            ))}
        </div>
        <li className="mt-8">
          <h2
            className="text-4xl font-bold ml-20"
            onClick={() => setShow2018(!show2018)}
          >
            Year 2018
          </h2>
        </li>
        <div className="max-w-screen-xl mx-auto">
          {show2018 &&
            researchData2018.map(({ _id, data }) => (
              <p
                className="text-base font-bodyFont leading-6 tracking-wide mt-8"
                key={_id}
              >
                {data}
              </p>
            ))}
        </div>
        <li className="mt-8">
          <h2
            className="text-4xl font-bold ml-20"
            onClick={() => setShow2017(!show2017)}
          >
            Year 2017 and Before
          </h2>
        </li>
        <div className="max-w-screen-xl mx-auto">
          {show2017 &&
            researchData2017.map(({ _id, data }) => (
              <p
                className="text-base font-bodyFont leading-6 tracking-wide mt-8"
                key={_id}
              >
                {data}
              </p>
            ))}
        </div>
      </ul>

      <Footer />
    </div>
  );
}

export default Research;
