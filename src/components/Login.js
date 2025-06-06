import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Container, TextField, Grid, Button } from "@mui/material";



const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:11000/api/Login", formData);
      console.log("Login Successful", response.data);
      axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`
      localStorage.setItem("token", response.data.token);
      navigate("/portfolio");
    } catch (error) {
      console.error("Login Error", error);
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
            <Button type="submit" fullWidth variant="contained" size="medium" color="primary">
              Login
            </Button>
            <p>create an account</p><Link to="/" style={{marginTop:"-90px",textDecorationLine:"none"}}>Click Here</Link>
          </Grid>
        </Grid>
      </form>
    </Container>
    </>
  );
};

export default Login;
