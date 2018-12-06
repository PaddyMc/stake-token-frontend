import React from "react";
import Popup from "reactjs-popup";
import './PopUp.css'

const contentStyle = {
  maxWidth: "600px",
  width: "100%",
  backgroundColor: "#282c34",
  borderRadius: "15px 15px 15px 15px"
};

const CustomPopUp = props => {
  const {
    buttonText,
    action,
    Content
  } = props
  
  return (
    <Popup 
      trigger={<button className="app-button">{buttonText}</button>} 
      modal
      contentStyle={contentStyle}
    >
    {close => (
      <div>
        <div className="header"><b>{buttonText}</b></div>
        <hr />
        <Content
          action={action}
        />
        <hr />
        <div className="actions">
          <button
            className="app-button close-button"
            onClick={() => {
              close();
            }}>
            Close PopUp
          </button>
        </div>
      </div>
    )}
    </Popup>
  );
};

export default CustomPopUp;