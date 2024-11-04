import React from "react";
import { useSelector, useDispatch } from "react-redux";
import JobCard from "./components/JobCard";
import { clearFilters, removeFilter } from "./redux/slices/filterSlice";
import "./App.css";

function App() {
  const jobs = useSelector((state) => state.jobs.jobs);
  const filters = useSelector((state) => state.filters.filters);
  const dispatch = useDispatch();

  const filteredJobs = jobs.filter((job) => {
    const jobSkills = [...job.languages, ...job.tools];
    return filters.every((filter) => jobSkills.includes(filter));
  });

  return (
    <div className="app-container">
      <h1>Jobs List</h1>

      {filters.length > 0 && (
        <div className="selected-filters">
          {filters.map((filter, index) => (
            <span key={index} className="selected-filter">
              {filter}
              <button onClick={() => dispatch(removeFilter(filter))}>x</button>
            </span>
          ))}
          <button onClick={() => dispatch(clearFilters())}>Clear All</button>
        </div>
      )}

      {filteredJobs.map((data) => (
        <JobCard
          key={data.id}
          position={data.position}
          company={data.company}
          location={data.location}
          contract={data.contract}
          postedAt={data.postedAt}
          level={data.level}
          languages={data.languages || data.language}
          tools={data.tools}
          logo={data.logo}
          new={data.new}
          featured={data.featured}
        />
      ))}
    </div>
  );
}

export default App;
