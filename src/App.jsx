import React from "react";
import JobCard from "./components/JobCard";
import data from "./data";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Jobs List</h1>
      {data.map((dataa) => (
        <JobCard
          key={dataa.id}
          position={dataa.position}
          company={dataa.company}
          location={dataa.location}
          contract={dataa.contract}
          postedAt={dataa.postedAt}
          level={dataa.level}
          languages={dataa.languages || dataa.language}
          tools={dataa.tools}
          logo={dataa.logo}
          new={dataa.new}
          featured={dataa.featured}
        />
      ))}
    </div>
  );
}

export default App;
