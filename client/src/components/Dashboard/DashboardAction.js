import React from "react";
import { useHistory, Link } from "react-router-dom";
import useStyle from "./style";

const DashboardAction = () => {
  const classes = useStyle();
  const history = useHistory();
  return (
    <div className="dash-buttons">
      <Link to="edit-profile" className={`${classes.hover} btn btn-light`}>
        <i className="fas fa-user-circle text-primary"></i> Edit Profile
      </Link>

      <Link to="add-experience" className={`${classes.hover} btn btn-light`}>
        <i className="fab fa-black-tie text-primary"></i> Add Experience
      </Link>

      <Link to="add-education" className={`${classes.hover} btn btn-light`}>
        <i className="fas fa-graduation-cap text-primary"></i> Add Education
      </Link>
    </div>
  );
};

export default DashboardAction;

// {/* Edit Profile */}
// <Button
// className={`${classes.buttonSubmit} btn btn-light`}
// variant="contained"
// size="medium"
// type="submit"
// onClick={(e) => history.push("/edit-profile")}
// >
// <i className="fas fa-user-circle text-primary"></i> Edit Profile
// </Button>

// {/* Add Profile Experience */}
// <Button
// className={`${classes.buttonSubmit} btn btn-light`}
// variant="contained"
// size="medium"
// type="submit"
// onClick={(e) => history.push("/add-experience")}
// >
// <i className="fas fa-user-circle text-primary"></i> Add Experience
// </Button>

// {/* Add Profile Education */}
// <Button
// className={`${classes.buttonSubmit} btn btn-light`}
// variant="contained"
// size="medium"
// type="submit"
// onClick={(e) => history.push("/add-education")}
// >
// <i className="fas fa-user-circle text-primary"></i> Add Education
// </Button>

// <Button
// className={`${classes.buttonSubmit} btn btn-light`}
// variant="contained"
// size="medium"
// type="submit"
// onClick={(e) => history.push("/dashboard")}
// >
// <i className="fas fa-graduation-cap text-primary"></i> Add Education Go
// Back
// </Button>
