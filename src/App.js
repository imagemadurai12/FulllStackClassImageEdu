import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  // const [error,setError]=useState(false)
  const [error, setError] = useState({
    name: false,
    email: false,
    phoneNo: false,
    address: false,
  });

  useEffect(() => {
    if (name.length <= 0) {
      setError({ ...error, name: true });
    } else {
      setError({ ...error, name: false });
    }
    if (email.length <= 0) {
      setError({ ...error, email: true });
    } else {
      setError({ ...error, email: false });
    }
    if (phoneNo.length !== 10) {
      setError({ ...error, phoneNo: true });
    } else {
      setError({ ...error, phoneNo: false });
    }
    if (address.length <= 0) {
      setError({ ...error, address: true });
    } else {
      setError({ ...error, address: false });
    }
  }, [name, email, phoneNo, address]);


  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(error);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-wrapper">
        <div className="field-item">
          <label className="form-label">Name:</label>
          <input
            className="form-input"
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <p className="error-msg"> {error.name && "error"}</p>
        <div className="field-item">
          <label className="form-label">Email:</label>
          <input
            className="form-input"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <p className="error-msg"> {error.email && "error"}</p>

        <div className="field-item">
          <label className="form-label">Phone Number:</label>
          <input
            className="form-input"
            type="number"
            value={phoneNo}
            required
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
        <p className="error-msg"> {error.phoneNo && "error"}</p>

        <div className="field-item">
          <label className="form-label">Address:</label>
          <textarea
            className="form-input-address"
            rows={3}
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <p className="error-msg"> {error.address && "error"}</p>

        <div className="form-button-wrapper">
          <button type="submit" className="form-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
