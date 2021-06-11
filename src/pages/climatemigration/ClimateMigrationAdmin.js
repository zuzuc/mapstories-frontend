import React, { useState, useEffect } from "react";
import axios from "axios";

function ClimateMigrationAdmin() {
  const [adminData, setAdminData] = useState([]);
  // const [postStatus, setPostStatus] = useState(false)
  
  // ---------------- Fetching All posts ------------------ //


  const fetchAdminData = async () => {
    try {
      const lists = await axios.get("/api/posts/list");
      console.log("lists", lists.data.data);
      setAdminData(lists.data.data);
    } catch (err) {
      console.log("error fecthcing /posts/list", err);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  // Calculating numbers of posts(total, status-true, status-false) //
  const numStories = adminData.length;
  const numT = adminData.filter((t) => t.status === true).length;
  const numF = adminData.filter((f) => f.status === false).length;

  // ---------------- Fetching Location and POST ------------------ //
  const [locValue, setLocValue] = useState({
    name: "",
    longitude: "",
    latitude: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocValue({
      ...locValue,
      [name]: value,
    });
    console.log(locValue);
  };
  const locationUrl =
    "/api/locations";
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(locationUrl, {
        name: locValue.name,
        longitude: locValue.longitude,
        latitude: locValue.latitude,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <div>
        <div>
          <h5>
            <span>How many stories shared : </span>
            <span>{numStories}</span>
            <br />
            <span>Allowed: {numT} | </span>
            <span>| Not allowed: {numF}</span>
          </h5>
        </div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
              <th>ID</th>
              <th>Nickname</th>
              {/* <th>Email</th>
                  <th>Region</th>
                  <th>Country</th>
                  <th>LocationName</th>
                  <th>LocationID</th>
                  <th>Longitude</th>
                  <th>Latitude</th>
                  <th>Title</th>
                  <th>Story</th>
                  <th>Image</th> */}
              <th>Status Handle</th>
            </tr>
          </thead>
          <tbody>
            {adminData.map((data) => (
              <tr key={data.id}>
                <td key={data.id}>{data.date.substr(0, 17)}</td>
                <td key={data.id}>{`${data.status}`}</td>
                <td key={data.id}>{data._id}</td>
                <td key={data.id}>{data.nickname}</td>
                {/* <td>{data.email}</td>
                                <td>{data.region}</td>
                                <td>{data.country}</td>
                                <td>{data.locationName}</td>
                                <td>{data.location._id}</td>
                                <td>{data.location.longitude}</td>
                                <td>{data.location.latitude}</td>
                                <td>{data.title}</td>
                                <td>{data.story}</td>
                                <td>{data.image}</td> */}
                <td>
                  <button>Change Status</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h5>To create new Location..</h5>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="name">Name : </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="location name"
              value={locValue.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="longitude">Longitude : </label>
            <input
              id="longitude"
              type="text"
              name="longitude"
              placeholder="longitude"
              value={locValue.longitude}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="latitude">Latitude : </label>
            <input
              id="latitude"
              type="text"
              name="latitude"
              placeholder="latitude"
              value={locValue.latitude}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ClimateMigrationAdmin;
