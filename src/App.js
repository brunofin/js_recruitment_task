import React from 'react';
import FiltersSection from './FiltersSection/FiltersSection';
import NewsSection from './NewsSection/NewsSection';

function App() {
  console.log(process.env.REACT_APP_THE_GUARDIAN_API_KEY);
  return (
    <main className="wrapper">
      <header className="appHeader">
        <div className="container appHeader-inner">
          <img src="./assets/logo.png" alt="company logo" className="companyLogo" />
          <h1 className="appTitle">Recruitment task</h1>
        </div>
      </header>
      {
        !process.env.REACT_APP_THE_GUARDIAN_API_KEY &&
        <div><h1>NO API KEY SET. Please add your The Guardian API key to the .env file at the project root before using this project.</h1></div>
      }

      <FiltersSection></FiltersSection>
      
      <NewsSection></NewsSection>
    </main>
  );
}

export default App;
