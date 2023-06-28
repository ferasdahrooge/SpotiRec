import React, { useEffect, useState } from "react";
import "./Home.scss";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";

const Home: React.FC = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const submit = () => {
    if (text.length === 0) {
      setError(true);
    } else {
      setError(false);
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
