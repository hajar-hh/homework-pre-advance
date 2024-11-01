import React from "react";

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
          <span key={i} className="skill">{lang}</span>
        ))}
        {tools.map((tool, i) => (
          <span key={i} className="skill">{tool}</span>
        ))}
      </div>
    </div>
  );
}

export default JobCard;
