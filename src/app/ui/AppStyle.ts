import { StyleSheet } from "react-native";
import { textColor } from "../../features/values/colors";

const AppStyle = StyleSheet.create({
  container: {
    backgroundColor: '#444',
    flex: 1,
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  appBar: { // header
    color: textColor,
    paddingVertical: 9.5, // dp (dip). density independent pixel
  },
  appBarTitle: {
    color: textColor,
    fontWeight: 700,
  },
  main: {
    backgroundColor: 'salmon',
    flex: 1,
    width: '100%',
    padding: 7,
  },
  navBar: { //footer
    paddingTop: 8,
  },
  navBarTitle : {
    color: textColor,
    fontWeight: 700,
    borderRadius: 7,
    padding: 5,
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppStyle;