import React from "react";
import "./custom-button.styles.scss";
export default function CustomButton({ children, ...otherprops }) {
  return (
    <button className="custom-button" {...otherprops}>
      {children}
    </button>
  );
}
