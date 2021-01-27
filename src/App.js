import logo from './logo.svg';
import './App.css';
import {Container, Grid, Segment} from "semantic-ui-react";
import React from "react";
import ProjectList from "./ProjectList";



function App() {
  return (
      <Grid verticalAlign='middle' textAlign='center' style={{ marginTop: '3em' }}>
            <ProjectList />
      </Grid>

  );
}

export default App;
