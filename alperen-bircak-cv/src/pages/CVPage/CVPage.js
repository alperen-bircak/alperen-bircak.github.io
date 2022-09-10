import React from "react";
import CVData from "../../data/CVData";
import './CVPage.scss';

const CVPage = () => {
  const renderList = (skills, { mainClass }) => {
    return (<ul className={mainClass}>
      {skills.map((item) => {
        if (typeof item === 'string') {
          return (<li>{item}</li>);
        } else if (Array.isArray(item)) {
          return renderList(item, { mainClass: `${mainClass}-child` });
        } else {
          return 'Error';
        }
      })}
    </ul>
    )
  }
  return (
    <div className="cv-container">
      <div className="cv-grid">
        <div className="intro">
          <div className="name">
            <h1>
              {CVData.intro.name}<br />
              {CVData.intro.surName}
            </h1>
            <h2>{CVData.intro.title}</h2>
          </div>
          <div className="description">
            <p>{CVData.intro.description}</p>
          </div>
        </div>
        <div className="contact">
          <h2>Contact<br />Information</h2>
          <ul>
            <li><span>Address:</span>{CVData.contact.address}</li>
            <li><span>Phone:</span><a href={`tel:${CVData.contact.phone.replace(' ',)}`}>{CVData.contact.phone}</a></li>
            <li><span>E-mail:</span><a href={`mailto:${CVData.contact.email}`}>{CVData.contact.email}</a></li>
            <li><span>LinkedIn:</span><a href={`https://${CVData.contact.linkedIn}`}>{CVData.contact.linkedIn}</a></li>
          </ul>
        </div>
        <div className="skills">
          <div className="main-skills">
            <h2>Skills</h2>
            {renderList(CVData.skills.main, { mainClass: 'skills-lst' })}
          </div>
          <div className="languages">
            <h3>Languages</h3>
            {renderList(CVData.skills.languages, { mainClass: 'languages-container' })}
          </div>
        </div>
        <div className="experience">
          <div className="main-exp">
            <h2>Experience and achievements</h2>
            {renderList(CVData.experience.main, { mainClass: 'experiences-lst' })}
          </div>
          <div className="education">
            <h2>Education</h2>
            <ul>
              {CVData.experience.education.map((item) => (
                <li className="education-item">
                  <h3>
                    {item.title}
                  </h3>
                  <h4>
                    {item.subtitle}
                  </h4>
                  {item.list && renderList(item.list, { mainClass: 'edu-lst' })}
                  {item.notes && (
                    <span className="notes">{item.notes}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="hobbies">
            <h2>Hobbies</h2>
            {renderList(CVData.experience.hobbies, { mainClass: 'hobbies-lst' })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CVPage;