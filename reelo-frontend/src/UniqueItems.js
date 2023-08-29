import { PlanetData } from "./PlanetData";

// const PlanetData = [
//   {
//     planet_name: "PSR B1257+12c",
//     host_name: "PSRB1257+12",
//     discovery_method: "pulsar Timing",
//     discovery_year: 1992,
//     discovery_facility: "Arecibo observation",
//   },
//   {
//     planet_name: "PSR B1257+12d",
//     host_name: "PSRB1257+12",
//     discovery_method: "pulsar Timing",
//     discovery_year: 1992,
//     discovery_facility: "Arecibo observation",
//   },
//   {
//     planet_name: "PSR B1257+12b",
//     host_name: "PSRB1257+12",
//     discovery_method: "pulsar Timing",
//     discovery_year: 1994,
//     discovery_facility: "Arecibo observation",
//   },
//   {
//     planet_name: "PSR B1257+12b",
//     host_name: "PSRB1257+12",
//     discovery_method: "pulsar Timing",
//     discovery_year: 1994,
//     discovery_facility: "Arecibo observation",
//   },
//   {
//     planet_name: "HD104985b",
//     host_name: "HD104985",
//     discovery_method: "Radial Velocity",
//     discovery_year: 2003,
//     discovery_facility: "Okayama Astroph",
//   },
//   {
//     planet_name: "HD104985b",
//     host_name: "HD104985",
//     discovery_method: "Radial Velocity",
//     discovery_year: 2003,
//     discovery_facility: "Lasilla observator",
//   },
//   {
//     planet_name: "7CMab",
//     host_name: "7CMa",
//     discovery_method: "Radial Velocity",
//     discovery_year: 2011,
//     discovery_facility: "Anglo-Australian Telescope",
//   },
//   {
//     planet_name: "CoRoT-16b",
//     host_name: "CoRoT-16",
//     discovery_method: "Transit",
//     discovery_year: 2011,
//     discovery_facility: "McDonald observation",
//   },
//   {
//     planet_name: "GJ9827d",
//     host_name: "GJ9827",
//     discovery_method: "Transit",
//     discovery_year: 2017,
//     discovery_facility: "K2",
//   },
//   {
//     planet_name: "HAT-P-67b",
//     host_name: "HAT-P-67",
//     discovery_method: "Transit",
//     discovery_year: 2017,
//     discovery_facility: "HATNet",
//   },
// ];

export const unique_host = [
  ...new Set(
    PlanetData.map((item) => {
      return JSON.stringify({ value: item.host_name, label: item.host_name });
    })
  ),
];
// console.log(unique_host);

export const unique_Discovery_method = [
    ...new Set(
        PlanetData.map((item) => {
          return JSON.stringify({ value: item.discovery_method, label: item.discovery_method });
        })
      ),
];
// console.log(unique_Discovery_method);

export const unique_Discovery_year = [
    ...new Set(
        PlanetData.map((item) => {
          return JSON.stringify({ value: item.discovery_year, label: item.discovery_year });
        })
      ),
];
// console.log(unique_Discovery_year);

export const unique_Discovery_facility = [
    ...new Set(
        PlanetData.map((item) => {
          return JSON.stringify({ value: item.discovery_facility, label: item.discovery_facility });
        })
      ),
];
// console.log(unique_Discovery_facility);

