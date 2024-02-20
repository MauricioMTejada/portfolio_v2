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
      <div className="bg-gradient">
		<div className="App">
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"> */}
			<header></header>

			<main>
				<section>
					{" "}
					<Presentation />
				</section>
				<section>
					{" "}
					<Skills />
				</section>
				<section>
					{" "}
					<Projects />{" "}
				</section>
				<section>
					{" "}
					<SmallProjects />{" "}
				</section>
				<section>
					{" "}
					<Articles />
				</section>
			</main></div>

			<footer></footer></div>
	);
}

export default App;
