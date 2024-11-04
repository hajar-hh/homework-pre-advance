import React from "react";
import { useDispatch } from "react-redux";
import { addFilter } from "../redux/slices/filterSlice";

function JobCard(props) {
  const {
    position,
    company,
    location,
    contract,
    postedAt,
    level,
    languages = [],
    tools = [],
    logo,
    new: isNew,
    featured,
  } = props;

  const dispatch = useDispatch();

  const handleSkillClick = (skill) => {
    dispatch(addFilter(skill));
  };

  return (
    <div className={`job-card ${featured ? "featured" : ""}`}>
      <img src={logo} alt={`${company} logo`} className="company-logo" />
      <div className="job-info">
        <div className="job-header">
          <h3 className="company-name">{company}</h3>
          {isNew && <span className="badge new">NEW!</span>}
          {featured && <span className="badge featured">FEATURED</span>}
        </div>
        <h2 className="job-position">{position}</h2>
        <div className="job-details">
          <p className="detail">{postedAt}</p>
          <p className="detail">{contract}</p>
          <p className="detail">{location}</p>
        </div>
      </div>
      <div className="job-skills">
        {languages.map((lang, i) => (
          <span
            key={i}
            className="skill"
            onClick={() => handleSkillClick(lang)}
          >
            {lang}
          </span>
        ))}
        {tools.map((tool, i) => (
          <span
            key={i}
            className="skill"
            onClick={() => handleSkillClick(tool)}
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export default JobCard;
