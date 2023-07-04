import React, { useEffect, useState, MouseEvent } from "react";
import "./Home.scss";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Home: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const submit = (event: MouseEvent) => {
    event.preventDefault();

    if (text.length === 0) {
      setError(true);
    } else {
      setError(false);
      console.log(text);
      axios
        .post("http://localhost:8000/", { data: text })
        .then((response) => {
          // Handle the response if needed
          alert("Success");
        })
        .catch((error) => {
          if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            alert("Error Response");
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            alert("Error Request");
            console.log(error.request);
          } else {
            alert("Unknown Error");
            console.log("Error", error.message);
          }
        });
    }
  };

  const read = (event: MouseEvent) => {
    event.preventDefault();
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        // Handle the response if needed
        alert("Success");
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  };

  return (
    <div className='Home'>
      <h2>Find the Perfect Songs For You</h2>
      <TextField
        className='Home__input'
        id='filled-basic'
        label='Enter Text to Find Perfect Songs for You'
        variant='filled'
        multiline
        onChange={(e) => setText(e.target.value)}
        error={error}
        helperText={error ? "Please Input Text" : ""}
        rows={10}
      />
      <div className='Home__buttons'>
        <Button
          className='Home__buttons__button'
          variant='contained'
          onClick={submit}
        >
          Submit
        </Button>
        <Button className='Home__buttons__button' variant='contained'>
          <FontAwesomeIcon icon={faFileUpload} />
          &nbsp; Insert File
        </Button>
      </div>
    </div>
  );
};

export default Home;
