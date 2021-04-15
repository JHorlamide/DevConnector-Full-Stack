import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./style";

// Material UI Component
import { Container } from "@material-ui/core";
import { Alert as Error, AlertTitle } from "@material-ui/lab";

const Alert = () => {
  const classes = useStyles();
  const alerts = useSelector((state) => state.alert);

  return alerts !== null && alerts.length > 0 ? (
    <Container>
      {alerts.map((alert) => (
        <Container key={alert.id}>
          <Error variant="filled" severity={alert.type} className={classes.appBar}>
            <AlertTitle>Error</AlertTitle>
            {alert.msg}
          </Error>
        </Container>
      ))}
    </Container>
  ) : (
    ""
  );
};

export default Alert;
