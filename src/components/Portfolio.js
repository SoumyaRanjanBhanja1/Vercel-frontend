import { Container, Typography, Paper, Grid, Avatar, Button } from "@mui/material";

const Portfolio = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <Avatar
          alt="Profile Picture"
          src="/profile-pic.jpg"
          style={{ width: 100, height: 100, margin: "auto" }}
        />
        <Typography variant="h4" style={{ marginTop: "10px" }}>John Doe</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Full Stack Developer | React | Node.js | JavaScript
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
          href="/resume.pdf"
          download
        >
          Download Resume
        </Button>

        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Education</Typography>
            <Typography>🎓 B.Sc. in Computer Science - XYZ University</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Experience</Typography>
            <Typography>💻 Software Engineer at ABC Corp (2020 - Present)</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Skills</Typography>
            <Typography>
              ✔ React.js, Node.js, JavaScript, Express, MongoDB, Redux, Material-UI
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Portfolio;
