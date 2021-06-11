import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import { Button, Modal } from "react-bootstrap";
import ClimateApi from "../../components/ClimateApi";
import ClimateMigrationFact from "./ClimateMigrationFacts";
import ClimateMigrationSubmit from "./ClimateMigrationSubmit";
import { GiPositionMarker } from "react-icons/gi";
import "./../../App.css";
import "../../scss/custom.scss";
import "./ClimateMigration.css";  

// const navControlStyle = { right: 10, top: 10 };

function ClimateMigrationMap() {
  const [viewport, setViewport] = useState({
    longitude: 169.1264892,
    latitude: 17.9815443,
    width: "70vw",
    height: "70vh",
    zoom: 1.5,
  });
  
  const postData = ClimateApi();
  const [selectedPost, setSelectedPost] = useState(null);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPost(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  // ----------------- Beginning of buttons above the mapbox ------------------- //
  const [renderMap, setRenderMap] = useState(true);
  const [renderSubmit, setRenderSubmit] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(true)

  const toggleButton = (e) => {
    setRenderMap(!renderMap);
    setToggleBtn(!toggleBtn)
    e.preventDefault()
  };

  const toggleSubmit = (e) => {
    e.preventDefault();
    setRenderSubmit(!renderSubmit)
  };
  // ----------------- End of buttons above the mapbox ------------------- //
  
  // ----------------- Create Filter function selected Region ------------ //
  // const [filteredData, setFilteredData] = useState([])
  // const filterRegion = (e) => {
  //   const selectedRegion = e.target.value;
  //   const fd = selectedRegion
  //    ? postData.filter(
  //      (post) => post.region === selectedRegion )
  //      : postData;
  //   setTimeout((
  //     setFilteredData(fd)
  //   ), 1000)
  //   e.preventDefault();
  // }

  return (
    <div className="map">
      <div>
          {renderMap ? (
            <div>
              <div className="redirect-buttons">
                <div className="redirect-btn1">
                  {renderMap || renderSubmit ?
                    <Button variant="success" onClick={toggleButton}>Background</Button>
                  : <Button variant="success" onClick={toggleButton}>not working</Button>
                  }
                </div>
                <div className="redirect-btn2">
                  <Button variant="success" onClick={toggleSubmit}>Submit your story</Button>
                  {/* -------------- Select Region to be filtered -------------- */}
                {/* <span>
                  <select name="selectedRegion" onChange={filterRegion} >
                    <option value="">All regions</option>
                    <option value="Eastern Caribbean">Eastern Caribbean</option>
                    <option value="South Pacific">South Pacific</option>
                    <option value="West Pacific">West Pacific</option>
                    <option value="West Africa">West Africa</option>
                    <option value="East Africa">East Africa</option>
                  </select>
                </span> */}
                </div>

              </div>

              <div>
                <ReactMapGL
                  {...viewport}
                  mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                  mapStyle="mapbox://styles/zuzuc/ckpf84jbh0x1i17l9flyv6is6"
                  // old: mapbox://styles/zuzuc/ckp5g7i5g04yy17l8viaxmxgi'
                  onViewportChange={(viewport) => setViewport(viewport)}
                >
                  {/* <NavigationControl style={navControlStyle} /> */}
                  {postData.map((post) => (
                    <Marker
                      key={post._id}
                      longitude={post.location.longitude}
                      latitude={post.location.latitude}
                      offsetLeft={-20}
                      offsetTop={-10}
                    >
                      <div>
                        <button
                          className="marker-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedPost(post);
                          }}
                        >
                          <GiPositionMarker />
                          Click here
                        </button>
                      </div>
                    </Marker>
                  ))}

                  {selectedPost ? (
                    <Popup
                      latitude={selectedPost.location.latitude}
                      longitude={selectedPost.location.longitude}
                      closeButton={false}
                   
                      // closeOnClick={false}
                      // onClose={() => {
                      //   setSelectedPost(null);
                      // }}
                    >
                      <div>
                        <h4>{selectedPost.title}</h4>
                        <h6>{selectedPost.region}</h6>
                        <h6>{selectedPost.country}</h6>
                        <h6>{selectedPost.locationName}</h6>
                        <p>{selectedPost.story.substr(0, 50)}...</p>
                        <Button className="me-2 bg-success text-primary" onClick={handleShow} >
                          Explore more
                        </Button>
                        <br />
                        <img
                          src={selectedPost.image}
                          width="300"
                          alt={selectedPost.title}
                        />
                      </div>
                      <Modal style={{ fontFamily: 'Titillium Web' }} show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                        <Modal.Header closeButton
                          className='bg-success text-primary'>
                          <Modal.Title>{selectedPost.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body 
                          className='text-success'>{selectedPost.story}
                        </Modal.Body>
                        <Modal.Footer
                          className='bg-success text-primary'>
                          {selectedPost.nickname}
                        </Modal.Footer>
                      </Modal>
                    </Popup>
                  ) : null}
                </ReactMapGL>
                <div className="subtext">
                  <p>
                    <strong>Note:</strong> The boundaries and the names shown and the designations used on this
                    map do not imply official endorsement or acceptance by MapStories. <br />
                    The Mercator projection currently used in this map does not accurately represent the geographic size of countries. 
                  </p>
                </div>
              </div>
              {renderSubmit ? (
                <ClimateMigrationSubmit toggleSubmit={toggleSubmit} />
                ) : (
                 ""
                )}
            </div>
        ) : (
          <div>
            <Button variant="success" onClick={toggleButton}>Stories</Button>
            <ClimateMigrationFact />
          </div>
          )
        }
      </div>
    </div>
  );
}

export default ClimateMigrationMap;



// fetching data
// useEffect(() => {
//     fetch('http://localhost:5000/posts/')
//     .then(res => res.json())
//     .then((json) => {
//       setPostData(json.data);
//       console.log(json.data)
//     })
//     .catch(console.log('request failed, useApi'));
//   }, [])

// const [toggleStory, setToggleStory] = useState(false);

// const toggleStoryBtn = () => {
//   setToggleStory(!toggleStory);
// };
//  {/* {toggleStory ? (
//           <div>
//             <h2>{selectedPost.title}</h2>
//             <h3>{selectedPost.region}</h3>
//             <h4>{selectedPost.country}</h4>
//             <h5>{selectedPost.locationName}</h5>
//             <p>{selectedPost.story} </p>
//           </div>
//         ) : null} */}
