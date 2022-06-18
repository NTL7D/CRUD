import { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteContact = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      axios.delete(`http://localhost:5000/api/delete/${id}`);
      alert("Deleted Success!");
      setTimeout(() => loadData(), 500);
    }
  };

  return (
    <div>
      <h1 style={{ marginTop: "30px" }}>Show users information</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>
                  <div className="button-grp">
                    <Link to={`/update/${item.id}`}>
                      <button className="optionButton">Update</button>
                    </Link>
                    <button
                      className="optionButton"
                      onClick={() => deleteContact(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
