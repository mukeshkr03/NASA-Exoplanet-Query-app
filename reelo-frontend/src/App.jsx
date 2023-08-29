import { useEffect, useState } from "react";
import "./App.css";
import { PlanetData } from "./PlanetData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  unique_Discovery_facility,
  unique_Discovery_method,
  unique_Discovery_year,
  unique_host,
} from "./UniqueItems";
import Select from "react-select";
import DataTable from "react-data-table-component";

// planet_name: "GJ9827d",
// host_name: "GJ9827",
// discovery_method: "Transit",
// discovery_year: 2017,
// discovery_facility: "K2",

function App() {
  const columns = [
    {
      name: "PLANET NAME",
      selector: (row) => row.planet_name,
      sortable: true,
    },
    {
      name: "HOST NAME",
      selector: (row) => row.host_name,
      sortable: true,
    },
    {
      name: "DISCOVERY METHOD",
      selector: (row) => row.discovery_method,
      sortable: true,
    },
    {
      name: "DISCOVERY YEAR",
      selector: (row) => row.discovery_year,
      sortable: true,
    },
    {
      name: "DISCOVERY FACILITY",
      selector: (row) => row.discovery_facility,
      sortable: true,
    },
  ];

  const [host_name, setHostName] = useState(null);
  const [discovery_method, setDiscoveryMethod] = useState(null);
  const [discovery_year, setDiscoveryYear] = useState(null);
  const [discovery_facility, setDiscoveryFacility] = useState(null);

  const option1 = unique_host.map((item) => JSON.parse(item));
  const option2 = unique_Discovery_method.map((item) => JSON.parse(item));
  const option3 = unique_Discovery_year.map((item) => JSON.parse(item));
  const option4 = unique_Discovery_facility.map((item) => JSON.parse(item));

  console.log(host_name);
  console.log(discovery_method);
  console.log(discovery_year);
  console.log(discovery_facility);

  // const newData = PlanetData.filter(
  //   (item) => item.host_name&&item.host_name === host_name.value&&host_name.value &&
  //   item.discovery_method&&item.discovery_method === discovery_method.value&&discovery_method.value &&
  //   item.discovery_year&&item.discovery_year === discovery_year.value&&discovery_year.value &&
  //   item.discovery_facility&&item.discovery_facility === discovery_facility.value&&discovery_facility.value
  //   );

  const clearQuery = () => {
    setObj([]);
    setHostName(null);
    setDiscoveryMethod(null);
    setDiscoveryYear(null);
    setDiscoveryFacility(null);
    window.location.reload();
  };

  let invalid =
    host_name == null &&
    discovery_method == null &&
    discovery_year == null &&
    discovery_facility == null;

  const [obj, setObj] = useState([]);

  const showTable = () => {
    if (invalid) {
      toast.error("you must select something", {
        position: "bottom-center",
        theme: "colored",
      });
    } else {
      // setObj(data.filter(item)=>'x')
      setObj(PlanetData.filter((item) => {
        if (host_name == null && discovery_method !== null && discovery_year !== null && discovery_facility !== null) {
            return (item.discovery_method === discovery_method.value && item.discovery_year === discovery_year.value && item.discovery_facility === discovery_facility.value)              
        }
        else if (host_name == null && discovery_method == null && discovery_year !== null && discovery_facility !== null) {
          return (item.discovery_year === discovery_year.value && item.discovery_facility === discovery_facility.value)              
        }
        else if (host_name == null && discovery_method !== null && discovery_year === null && discovery_facility !== null) {
          return (item.discovery_method === discovery_method.value && item.discovery_facility === discovery_facility.value)              
        }
        else if (host_name == null && discovery_method !== null && discovery_year !== null && discovery_facility == null) {
          return (item.discovery_method === discovery_method.value && item.discovery_year === discovery_year.value)              
        }
        else if (host_name == null && discovery_method == null && discovery_year == null && discovery_facility !== null) {
          return (item.discovery_facility === discovery_facility.value)              
        }
        else if (host_name == null && discovery_method == null && discovery_year !== null && discovery_facility == null) {
          return (item.discovery_year === discovery_year.value)              
        }
        else if (host_name !== null && discovery_method == null && discovery_year !== null && discovery_facility !== null) {
          return (item.host_name === host_name.value && item.discovery_year === discovery_year.value && item.discovery_facility === discovery_facility.value)              
        }
        else if (host_name !== null && discovery_method == null && discovery_year === null && discovery_facility !== null) {
          return (item.host_name === host_name.value && item.discovery_facility === discovery_facility.value)              
        }
        else if (host_name !== null && discovery_method == null && discovery_year !== null && discovery_facility === null) {
          return (item.host_name === host_name.value && item.discovery_year === discovery_year.value);              
        }
        else if (host_name !== null && discovery_method === null && discovery_year === null && discovery_facility === null) {
          return (item.host_name === host_name.value)              
        }
        else if (host_name !== null && discovery_method !== null && discovery_year === null && discovery_facility !== null) {
          return (item.host_name === host_name.value && item.discovery_facility === discovery_facility.value && discovery_method === discovery_method.value)              
        }
        else if (host_name !== null && discovery_method !== null && discovery_year === null && discovery_facility === null) {
          return (item.host_name === host_name.value && item.discovery_method === discovery_method.value)              
        }
        else if (host_name !== null && discovery_method !== null && discovery_year !== null && discovery_facility === null) {
          return (item.host_name === host_name.value && item.discovery_method === discovery_method.value && item.discovery_year === discovery_year.value)              
        }
        else if (host_name === null && discovery_method !== null && discovery_year === null && discovery_facility === null) {
          return (item.discovery_method === discovery_method.value)              
        }
      }));
    }
  };

  return (
    <div className="body">
      <div>
        <div
          className="caption"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h3 style={{ display: "inline", marginTop: 20, color: "white" }}>
            NASA Exoplanet Query
          </h3>
        </div>

        <div
          className="table"
          style={{ backgroundColor: "white", border: "1px solid green" }}
        >
          <div
            className="dropdowns"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ margin: 10, width: 200 }}>
              <Select
                options={option1}
                defaultValue={host_name}
                placeholder="Host Name"
                onChange={setHostName}
                styles={{
                  placeholder: (baseStyles, state) => ({
                    ...baseStyles,
                    fontSize: 15,
                  }),
                }}
              />
            </div>

            <div style={{ margin: 10, width: 200 }}>
              <Select
                options={option2}
                defaultValue={discovery_method}
                placeholder="Discovery Method"
                onChange={setDiscoveryMethod}
                styles={{
                  placeholder: (baseStyles, state) => ({
                    ...baseStyles,
                    fontSize: 15,
                  }),
                }}
              />
            </div>

            <div style={{ margin: 10, width: 200 }}>
              <Select
                options={option3}
                defaultValue={discovery_year}
                placeholder="Discovery Year"
                onChange={setDiscoveryYear}
                styles={{
                  placeholder: (baseStyles, state) => ({
                    ...baseStyles,
                    fontSize: 15,
                  }),
                }}
              />
            </div>

            <div style={{ margin: 10, width: 180 }}>
              <Select
                options={option4}
                defaultValue={discovery_facility}
                placeholder="Discovery Facility"
                onChange={setDiscoveryFacility}
                styles={{
                  placeholder: (baseStyles, state) => ({
                    ...baseStyles,
                    fontSize: 15,
                  }),
                }}
              />
            </div>

            <div style={{ margin: 10 }}>
              <button
                style={{
                  backgroundColor: "#0096ff",
                  color: "white",
                  border: "none",
                  width: 100,
                  height: 40,
                  borderRadius: 5,
                }}
                onClick={showTable}
              >
                Search
              </button>
            </div>
            <div style={{ margin: 10 }}>
              <button
                style={{
                  backgroundColor: "#0096ff",
                  color: "white",
                  border: "none",
                  width: 100,
                  height: 40,
                  borderRadius: 5,
                }}
                onClick={clearQuery}
              >
                Clear
              </button>
            </div>
          </div>

          {host_name == null &&
            discovery_method == null &&
            discovery_year == null &&
            discovery_facility == null && (
              <div className="description">
                <div>
                  <h5
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "6.5rem",
                      color: "black",
                    }}
                  >
                    Exoplanets are planets outside the solar System.
                  </h5>
                  <h5
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
                    <p>
                      <span>Here you can query </span>
                      <span
                        style={{
                          color: "#0096ff",
                          // marginLeft: 2,
                          // marginRight: 2,
                        }}
                      >
                        NASA's Exoplanet Archive
                      </span>
                      <span> and find the one you love the most</span>
                    </p>
                  </h5>
                </div>
              </div>
            )}
          {obj.length > 0 && (
            <div
              className="table_content"
              style={{
                width: "100%",
                maxHeight: "70vh",
                overflow: "scroll",
              }}
            >
              <DataTable
                columns={columns}
                // data={ PlanetData}
                data={obj}
                fixedHeader
              ></DataTable>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
