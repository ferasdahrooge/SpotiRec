import React from "react";
import "./Home.scss";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Home: React.FC = () => {
  return (
    <div className='Home'>
      <TextField
        id='filled-basic'
        label='Tell Us Yourself'
        variant='filled'
        multiline
        rows={16}
      />
      <Button variant='contained'>Find</Button>
    </div>
  );
};

export default Home;
