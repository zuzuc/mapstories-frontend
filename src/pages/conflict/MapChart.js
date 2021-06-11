import React, { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";
// import DatePickerGroup from './DatePickerGroup'
import "react-datepicker/dist/react-datepicker.css";
import conflictsData from './ucdp.json';
import countryCode from 'country-code-lookup'

console.log(countryCode.byCountry('Cambodia'))

const geoUrl = './world-110m.json'
// const conflictsData = './ucdp.json'

const group = (objectArray, property) => {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      return {
        ...acc,
        [key]: {
          conflicts: 1,
          fatalities: obj.best,
          countryName: obj.country,
          type: obj.type_of_violence
        }
      };
    }
    
    return {
      ...acc,
      [key]: {
        ...acc[key],
        conflicts: acc[key].conflicts + 1
      }
    };
  }, {});
};

const formatConflicts = (data, property = "countryCode") => {
  const conflicts = data.map((item) => ({
    ...item,
    countryCode: countryCode.byCountry(item.country)?.iso3 || ''
  }));

  const groupedData = group(conflicts, "countryCode");
  const maxConflicts = Object.keys(groupedData).reduce((max, country) =>
    max > groupedData[country].conflicts ? max : groupedData[country].conflicts
  );

  return { conflicts: groupedData, maxConflicts };
};

const MapChart = ({ setTooltipContent }) => {
  const [data, setData] = useState([]);
  const [param, setParam] = useState("conflicts");
  const [maxConflicts, setMaxConflicts] = useState(0);

  useEffect(() => {
    const { conflicts, maxConflicts } = formatConflicts(conflictsData.Result);
    setData(conflicts);
    setMaxConflicts(maxConflicts);
  }, []);

  const colorScale = scaleLinear()
    .domain([0, maxConflicts])
    .range(["#ffedea", "#ff5233"]);

  const changeType = (e) => {
    const type = Number(e.target.value);
    const data = type
      ? conflictsData.Result.filter(
          (conflict) => conflict.type_of_violence === type
        )
      : conflictsData.Result;

    const { conflicts, maxConflicts } = formatConflicts(data);
    setData(conflicts);
    setMaxConflicts(maxConflicts);
  };

  const changeParam = (e) => {
    setParam(e.target.value);
  };

  return (
    <>
      <select name="type" onChange={changeType}>
        <option value="">all types</option>
        <option value="1">state-based</option>
        <option value="2">non-state</option>
        <option value="3">one-sided</option>
      </select>
      <select name="type" onChange={changeParam}>
        <option value="conflicts">conflicts</option>
        <option value="fatalities">fatalities</option>
      </select>
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 170
        }}
        data-tip=""
        width={1400}
        height={500}
      >
        <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryCode = geo.properties.ISO_A3;
              const d = data[countryCode];
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d[param]) : "#F5F4F6"}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;

                    try {
                      setTooltipContent(`${NAME} — ${d[param] || 0}`);
                      setTooltipContent(`${NAME} — events: ${d.conflicts || 0} & fatalities: ${d.fatalities || 0}`);
                    } catch {
                      setTooltipContent("");
                    }
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default MapChart;

// const MapChart = ({ setTooltipContent }) => {
//   // const [resultStartDate, resultEndDate] = DatePickerGroup();
//   const [data, setData] = useState({});
//   const [maxConflicts, setMaxConflicts] = useState(0);
//   const [filteredData, setFilteredData] = useState([]);
  
//   const colorScale = scaleLinear()
//     .domain([0, maxConflicts])
//     .range(["#ffedea", "#ff5233"]);

//   const ucdpJson = '/ucdp.json'

//   const fetchConflicts = async () => {
//     const res = await fetch(ucdpJson);
//     const json = await res.json();
//     const data = json.Result.map((item) => ({
//       ...item,
//       countryCode: item.relid.substring(0, 3)
//     }));
//     console.log('json', typeof(data[0].type_of_violence))

//     const groupedData = group(data, "countryCode");
//     const maxConflicts = Object.keys(groupedData).reduce((max, country) =>
//     max > groupedData[country].conflicts
//     ? max
//     : groupedData[country].conflicts
//     );
//     setData(groupedData);
//     setMaxConflicts(maxConflicts);
//   };

//   console.log('unfiltered data', data);
  
//   const handleFilter = (data, values) => {
//     const filteredArray = (values) ? data.filter(d => d.type_of_violence === Number(values)): {}
//     setFilteredData(filteredArray); 
//     console.log('filteredData', filteredData)
//   }
  
//   const useFilter = (valueNum) => {
//     handleFilter(+valueNum)
//   }
  
//   useEffect(() => {
//     fetchConflicts();
//   }, []);

  
//   /* -------- beginning of select -------- */
//   const [values, setValues] = useState('')
//   const [valueNum, setVauleNum] = useState(0)
//   const handleChange = e => {
//     const { value } = e.target;
//       setValues(value);
//       setVauleNum(Number(value));
//       console.log(value, typeof(Number(value)))
//   };
//   /* -------- end of select ---------- */

//   /* -------- beginning of filter data ---------- */
//   // const [inputValues, setInputValues] = useState([])
//   // const updateInputValue = e => (
//   //   setInputValues(e.target.value)
//   // )
  
//   // const [filterStatus, setFilterStatus] = useState('inactive')
//   // const toggleFilter = (e) => {
//   //   e.preventDefault();
//   //   setFilterStatus(!filterStatus)
//   // }
//   // useEffect(()=> {
//   //   handleFilter()
//   // }, [filterStatus])
//   /* -------- end of filter data ---------- */
    

//   return (
//     <div>
//       {/* -------------- dropdown to filter -------------- */}
//       <div>
//         <div>
//           <label htmlFor="type">type_of_violence</label>
//             <select id="type" name="type" values={values} onChange={handleChange}>
//                 <option value=''>type</option>
//                 <option value='1'>state-based</option>
//                 <option value='2'>non-state</option>
//                 <option value='3'>onesided</option>
//             </select>
//         </div>
//         <div>
//           <DatePickerGroup />
//         </div>
//         <button onClick={useFilter}>Apply</button>
        
//       </div>

//       {/* -------------- Map Library -------------- */}
//       <ComposableMap projectionConfig={{ rotate: [-10, 0, 0], scale: 147 }} data-tip="" width={1200} height={400} >
//         <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
//         <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
//         <Geographies geography={geoUrl}>
//           {({ geographies }) =>
//             geographies.map((geo) => {
//               const countryCode = geo.properties.ISO_A3;
//               const d = filteredData.length ? filteredData[countryCode] : data[countryCode];
//               return (
//                 <Geography
//                 key={geo.rsmKey}
//                 geography={geo}
//                 fill={d ? colorScale(d.conflicts) : "#F5F4F6"}
//                 onMouseEnter={() => {
//                   const { NAME } = geo.properties;
                  
//                   try {
//                     setTooltipContent(`${NAME} — events: ${d.conflicts || 0} & fatalities: ${d.fatalities || 0}`);
//                   } catch {
//                     setTooltipContent("");
//                   }
//                 }}
//                 onMouseLeave={() => {
//                   setTooltipContent("");
//                 }}
//                 />
//                 );
//               })
//             }
//         </Geographies>
//       </ComposableMap>
//       </div>
//   );
// };

// export default MapChart;



// "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
// 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'


// const ucdpUrl = 'https://ucdpapi.pcr.uu.se/api/gedevents/20.1?pagesize=1000&page=1'
// const filteredUrl = 'https://ucdpapi.pcr.uu.se/api/gedevents/20.1?StartDate=2000-01-01&EndDate=2007-10-12'
// const ucdpFullUrl = `https://ucdpapi.pcr.uu.se/api/gedevents/20.1?key=${process.env.REACT_APP_UPPSALA_TOKEN}`




// "https://ucdpapi.pcr.uu.se/api/gedevents/20.1?StartDate=2000-01-01&EndDate=2007-10-12"
/*
filter UI - dropdown // select - option : StartDate, EndDate, TypeOfViolence 
pass // const firstFiltered = `${filteredUrl}`/{option}={Date}
2nd filter // ...firstFiltered,
&{option}={Date}
             >> `${filteredUrl}`/{option}={Date}&{option}={Date} >> StartDate=2000-01-01&EndDate=2007-10-12

             const [filtered, setFiltered] = useState(''); 
            
*/


//const filteredData = data.filter(d => d.type_of_violence === selectedType)
// const typesOfViolence = types.filter(d => d.type_of_violence === ${selected Type})
// const dateFilter = date.filter(date => date_start >= ${d.date_start} && date_end <= ${d.date_end})

/* ------ beginning of data filter -------- */  
// data(each cases) from local json file
// <json.Result.map(...item, countryCode:item.relid.substring(0, 3))>
// where to filter data by type of violence
// group(line 10) >> accumulate(conflicts: 1, fatalities: obj.best, countryName: obj.country))
// data(total number of cases belong to countries)
// const filteredArray2 = data.filter(d => d.type_of_violence === 3);
/* ------ end of data filter -------- */

