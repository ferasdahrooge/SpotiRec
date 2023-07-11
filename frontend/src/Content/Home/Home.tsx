import React, { useEffect, useState, MouseEvent } from "react";
import "./Home.scss";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      navigate("/results");
    }
  });

  const submit = (event: MouseEvent) => {
    event.preventDefault();
    try {
      if (text.length === 0) {
        setError(true);
      } else {
        setError(false);
        axios
          .post("http://localhost:8080/text/", { data: text })
          .then((response) => {
            // Handle the response
            setSuccess(true);
            const value = response.data;
            console.log(value);
            return value;
          })
          .catch((error) => {
            // Handle the error if needed
            if (error.response) {
              // The request was made and the server responded with a status code
              alert("Error Response");
              console.log(error.response.status);
            } else if (error.request) {
              // The request was made but no response was received
              alert("Error Request");
              console.log(text);
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              alert("Unknown Error");
              console.log("Error", error.message);
            }
          });
      }
    } catch (error) {
      // Handle the error if there is a bug in the code
      console.log("There is an error in the code.");
    }
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
          onClick={(e) => {
            submit(e);
          }}
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
