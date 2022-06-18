import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  contact: "",
};
const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const { name, email, contact } = state;
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((res) => setState({ ...res.data[0] }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      alert("Please fill your information!");
    } else {
      if (!id) {
        axios
          .post("http://localhost:5000/api/post", {
            name,
            email,
            contact,
          })
          .then(() => {
            setState({ name: "", email: "", contact: "" });
          })
          .catch((err) => {
            console.log(err);
          });
        alert("Added successfully!");
      } else {
        axios
          .put(`http://localhost:5000/api/update/${id}`, {
            name,
            email,
            contact,
          })
          .then(() => {
            setState({ name: "", email: "", contact: "" });
          })
          .catch((err) => {
            console.log(err);
          });
        alert("Updated successfully!");
      }
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="name"
          id="name"
          value={"" || name}
          placeholder="Write your username"
          onChange={handleInput}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={"" || email}
          placeholder="Write your email"
          onChange={handleInput}
        />
        <label>Contact</label>
        <input
          type="number"
          name="contact"
          id="contact"
          value={"" || contact}
          placeholder="Write your contact"
          onChange={handleInput}
        />
        <div className="button-group">
          <input type="submit" value={id ? "Update" : "Save"} />
          <Link to="/">
            <input type="button" value="Go back" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddEdit;
