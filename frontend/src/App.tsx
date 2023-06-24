import React from "react";
import "./App.scss";

let name: string;
let age: number;
let isPresent: boolean;
let role: [number, string];

type Person = {
  name: string;
  age: number;
  isPresent: boolean;
  role: [number, string];
};

let value: unknown;

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>{name} Learn React</header>
    </div>
  );
};

export default App;
