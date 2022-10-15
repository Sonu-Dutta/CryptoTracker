import { makeStyles } from "@material-ui/core";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectbutton: {
      border: "1px solid #05d0eb",
      borderRadius: 5,
      padding: 10,
      fontFamily: "Righteous",
      cursor: "pointer",
      backgroundColor: selected ? "#05d0eb" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "#05d0eb",
        color: "black",
      },
      width: "22%",
    },
  });

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;
