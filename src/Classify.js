import React, { useState } from "react";
import axios from "axios";
import "./Classify.css";

/*Component to post blog and list the posted blog posts*/
export function ClassifyPost() {
  const [inputNews, setInputNews] = useState("");
  const [newsCategoryClass, setNewsCategoryClass] = useState([]);

  const submitNewsPost = () => {
    var inputNewsValue = document.getElementById("inputNewsPost").value;
    if (isNaN(inputNewsValue)) {
      try {
        axios
          .post(process.env.REACT_APP_SVM, {
            //  http://127.0.0.1:5000/api/newsclassifier"
            postNewsDetail: inputNews,
          })
          .then((res) => res.data)
          .then((postNewsDetail) => {
            setNewsCategoryClass(postNewsDetail);
          });
      } catch (error) {
        console.log(error);
      }

      // newsRef.push(newsPostMessage);
    } else {
      alert(
        "Empty Textarea Post or Number Not Accepted! Please input a news string"
      );
      return false;
    }
  };

  return (
    <div className="postNewBlogs">
      <div className="postForm">
        <h3>Classifier Tab</h3>
        <label>Post News Here </label>
        <br></br>
        <textarea
          id="inputNewsPost"
          type="text"
          name="blogNews"
          placeholder="Place news you want to categorize here..."
          value={inputNews}
          onChange={(e) => {
            setInputNews(e.target.value);
          }}
        ></textarea>
        <br></br>

        <button id="submitblogPost" onClick={submitNewsPost}>
          Classify
        </button>

        <h5>
          Predicted Category:<span>{newsCategoryClass.prediction}</span>
        </h5>
        <h5>
          Prediction Accuracy:<span> {newsCategoryClass.accuracy}</span>
        </h5>
      </div>
    </div>
  );
}
