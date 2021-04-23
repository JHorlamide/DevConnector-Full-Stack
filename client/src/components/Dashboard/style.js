import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  alignment: {
    width: '200px',
    margin: 'auto',
    display: 'block',
  },

  buttonSubmit: {
    marginBottom: 10,
    margin: 10,
  },

  hover: {
    background: '#f4f4f4',
    '&:hover': {
      backgroundColor: '#3f51b5',
      color: '#ffff',
    },
  },

  navigation: {
    margin: '20px',
    right: '-120px',
    padding: '0',
  },
}));

// import { makeStyles } from "@material-ui/core/styles";

// export default makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//     },
//   },
//   paper: {
//     padding: theme.spacing(2),
//   },
//   form: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//   },
//   fileInput: {
//     width: "97%",
//     margin: "10px 0",
//   },
//   buttonSubmit: {
//     marginBottom: 10,
//   },

//   textarea: {
//     width: "1px",
//     height: "200px",
//   },
// }));
