import React from "react";
import "./About.css";

export function Aboutus() {
  return (
    <div className="aboutTab">
      <h3>About Tab</h3>
      <p>
        News Classifier for English News. Accuracy of the trained model is 97.98
        on this dataset. More data will improve the model even more.
      </p>
      <img src="/aakash.png" alt="cm" />
    </div>
  );
}
