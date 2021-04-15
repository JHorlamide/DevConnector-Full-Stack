import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProfile } from "../../actions/profile";

/* Material UI Component */
import {
  Button,
  Paper,
  Grid,
  Select,
  TextField,
  Typography,
  Container,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import useStyle from "./style";

const CreateProfile = () => {
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const [displaySocialInput, setDisplaySocialInput] = useState(false);
  const [formData, setformData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handSubmit = (e) => {
    e.preventDefault();

    dispatch(createProfile(formData, history));

    console.log(formData);

    clearButtonHandler();
  };

  const clearButtonHandler = () => {
    return setformData({
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
    });
  };

  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper}>
        <Typography variant="h4" className="large text-primary" align="center">
          Create Your Profile
        </Typography>
        <Typography variant="subtitle1" className="lead" align="center">
          <i className="fas fas-user"></i> Let's get some information to make
          your profile stand out{" "}
        </Typography>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handSubmit}
        >
          <InputLabel
            id="demo-customized-select-label"
            className={classes.paper}
          >
            Select Professional Status
          </InputLabel>
          <Select
            name="status"
            value={status}
            onChange={(e) => onChange(e)}
            labelId="demo-customized-select-label"
            id="demo-customized-select"
          >
            <MenuItem value="Developer">Developer</MenuItem>
            <MenuItem value="Junior Developer">Junior Developer</MenuItem>
            <MenuItem value="Senior Developer">Senior Developer</MenuItem>
            <MenuItem value="Manager">Manager</MenuItem>
            <MenuItem value="Student or Learning">Student or Learning</MenuItem>
            <MenuItem value="Instructor">Instructor or Teacher</MenuItem>
            <MenuItem value="Intern">Intern</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
          {/* Company */}
          <TextField
            type="text"
            name="company"
            value={company}
            onChange={(e) => onChange(e)}
            variant="outlined"
            label="Company"
            fullWidth
            required
          />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
          {/* Website */}
          <TextField
            type="text"
            name="website"
            value={website}
            onChange={(e) => onChange(e)}
            variant="outlined"
            label="Website"
            fullWidth
            required
          />
          <small className="form-text">
            Could be your own or a company website
          </small>
          {/* Location */}
          <TextField
            type="text"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
            variant="outlined"
            label="Location"
            fullWidth
            required
          />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
          {/* Skills */}
          <TextField
            type="text"
            name="skills"
            value={skills}
            onChange={(e) => onChange(e)}
            variant="outlined"
            label="Skills"
            fullWidth
            required
          />
          <small className="form-text">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
          {/* Github Username */}
          <TextField
            type="text"
            name="githubusername"
            value={githubusername}
            onChange={(e) => onChange(e)}
            variant="outlined"
            label="Github Username"
            fullWidth
            required
          />
          <small className="form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
          {/* Bio */}
          <div className="form-group form">
            <textarea
              placeholder="A short bio of yourself"
              name="bio"
              value={bio}
              onChange={(e) => onChange(e)}
              style={{ width: "500px", height: "200px" }}
            ></textarea>
            <small className="form-text">Tell us a little about yourself</small>
          </div>
          {/* <TextareaAutosize
            name="bio"
            value={bio}
            onChange={(e) => onChange(e)}
            aria-label="minimum height"
            rowsMin={3}
            placeholder="A short bio of yourself"
          />
          <small className="form-text">Tell us a little about yourself</small>
           */}
          {/* Button */}
          <div className="my-2">
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="small"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                return setDisplaySocialInput(!displaySocialInput);
              }}
            >
              Add Social Network Links (optional)
            </Button>{" "}
          </div>

          {displaySocialInput && (
            <Fragment>
              {/* Twitter */}
              <Grid
                className="form-group social-input"
                container
                alignItems="stretch"
                spacing={3}
                justify="space-between"
              >
                {/* Icon */}
                <Grid item xs={12} sm={1}>
                  <i
                    className="fab fa-twitter fa-2x"
                    style={{ color: "#1DA1F2", marginTop: "10px" }}
                  ></i>{" "}
                </Grid>

                {/* Input Field */}
                <Grid item xs={12} sm={11}>
                  <TextField
                    type="text"
                    name="twitter"
                    value={twitter}
                    onChange={(e) => onChange(e)}
                    variant="outlined"
                    label="Twitter URL"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>

              {/* Facebook */}
              <Grid
                className="form-group social-input"
                container
                alignItems="stretch"
                spacing={3}
                justify="space-between"
              >
                {/* Icon */}
                <Grid item xs={12} sm={1}>
                  <i
                    className="fab fa-facebook fa-2x"
                    style={{ color: "#4267B2", marginTop: "10px" }}
                  ></i>{" "}
                </Grid>

                {/* Input Field */}
                <Grid item xs={12} sm={11}>
                  <TextField
                    type="text"
                    name="facebook"
                    value={facebook}
                    onChange={(e) => onChange(e)}
                    variant="outlined"
                    label="Facebook URL"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>

              {/* Youtube */}
              <Grid
                className="form-group social-input"
                container
                alignItems="stretch"
                spacing={3}
                justify="space-between"
              >
                {/* Icon */}
                <Grid item xs={12} sm={1}>
                  <i
                    className="fab fa-youtube fa-2x"
                    style={{ color: "#FF0000", marginTop: "10px" }}
                  ></i>{" "}
                </Grid>

                {/* Input Field */}
                <Grid item xs={12} sm={11}>
                  <TextField
                    type="text"
                    name="youtube"
                    value={youtube}
                    onChange={(e) => onChange(e)}
                    variant="outlined"
                    label="Youtube URL"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>

              {/* LinkedIn */}
              <Grid
                className="form-group social-input"
                container
                alignItems="stretch"
                spacing={3}
                justify="space-between"
              >
                {/* Icon */}
                <Grid item xs={12} sm={1}>
                  <i
                    className="fab fa-linkedin fa-2x"
                    style={{ color: "#2867B2", marginTop: "10px" }}
                  ></i>{" "}
                </Grid>

                {/* Input Field */}
                <Grid item xs={12} sm={11}>
                  <TextField
                    type="text"
                    name="linkedin"
                    value={linkedin}
                    onChange={(e) => onChange(e)}
                    variant="outlined"
                    label="LinkedIn URL"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>

              {/* Instagram */}
              <Grid
                className="form-group social-input"
                container
                alignItems="stretch"
                spacing={3}
                justify="space-between"
              >
                {/* Icon */}
                <Grid item xs={12} sm={1}>
                  <i
                    className="fab fa-instagram fa-2x"
                    style={{ color: "#405DE6", marginTop: "10px" }}
                  ></i>{" "}
                </Grid>

                {/* Input Field */}
                <Grid item xs={12} sm={11}>
                  <TextField
                    type="text"
                    name="instagram"
                    value={instagram}
                    onChange={(e) => onChange(e)}
                    variant="outlined"
                    label="Instagram URL"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
            </Fragment>
          )}

          {/* Submit */}
          <Grid
            className="form-group social-input"
            container
            alignItems="stretch"
            spacing={3}
            justify="space-between"
          >
            {/* Submit */}
            <Grid item xs={12} sm={7}>
              <Button
                className={classes.buttonSubmit}
                variant="contained"
                color="primary"
                size="medium"
                type="submit"
                fullWidth
              >
                Submit
              </Button>
            </Grid>

            {/* Redirect */}
            <Grid item xs={12} sm={4}>
              <Button
                className={classes.buttonSubmit}
                variant="contained"
                size="medium"
                type="submit"
                fullWidth
                onClick={() => history.push("/dashboard")}
              >
                Go Back
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateProfile;
