import React from 'react';
import logo from './logo.svg';
import './App.css';

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import '@fontsource/onest';

import { Projects } from './components/projects/projects';
import { Articles } from './components/articles/articles';
import { Skills } from './components/skils/skills';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { SmallProjects } from './components/smallProjects/smallProjects';
import Presentation from './components/presentation/presentation';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      <header>
        <h1>Mauricio Tejada</h1>
      </header>

      <main>
      <h1>Hola, soy Mauricio</h1>

        <section> <Presentation /></section>
        <section> <Skills /></section>
        <section> <Projects /> </section>
        <section> <SmallProjects /> </section>
        <section> <Articles /></section>
      </main>

      <footer>

      </footer>

    </div>
  );
}

export default App;
