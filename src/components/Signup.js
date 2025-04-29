import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, TextField, Grid, Button } from "@mui/material";


const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });



  const logout=()=>{
    localStorage.removeItem("token");
    window.location.href="/Login";
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:10000/api/Signup", formData);
      console.log("Signup Successful", response.data);
      navigate("/Login");
      setFormData({ email: "", password: "" });
    } catch (error) {
      console.error("Signup Error", error);
    }
  };

  return (
    <>
     <div style={{ marginLeft: "648px", marginBottom: "-80px" }}>
               <img src="/google.png" width="230px" height="230px" alt="abc" />
    </div>
    <Container maxWidth="xs" component="main" className="container">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              size="medium"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              size="medium"
              variant="outlined"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth size="medium" variant="contained" color="primary">
              Signup
            </Button>
            </Grid>
            <Grid item xs={12}>
            <Button type="button" onClick={logout} fullWidth size="medium" variant="contained" color="secondary">
             Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
    </>
  );
};

export default Signup;
