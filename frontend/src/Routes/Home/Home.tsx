import React from "react";
import "./Main.scss";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Main: React.FC = () => {
  return (
    <div className='Main'>
      <div className='Main__header'>
        <h1>SpotiRec</h1>
      </div>
      <div className='Main__content'>
        <TextField
          id='filled-basic'
          label='Tell Us About Yourself'
          variant='filled'
          multiline
          rows={10}
        />
        <Button variant='contained'>Search</Button>
      </div>
    </div>
  );
};

export default Main;
