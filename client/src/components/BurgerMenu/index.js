import React from "react";
import Popup from "reactjs-popup";
import BurgerMenu from "./BurgerMenu.jsx";
import Menu from "./Menu.jsx";
import "./styles.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "40px"
};
const contentStyle = {
  background: "rgba(255,255,255,0",
  width: "80%",
  border: "none"
};

export default class BMenu extends React.Component {
  render() {
    return (
      <div style={styles}>
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <BurgerMenu open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
  </div>
    );
  }
}