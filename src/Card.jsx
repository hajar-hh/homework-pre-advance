import React from 'react';

const Card = () => {
 
const data = {
    image: '../../.learn/assets/Dylan.png?raw=true',
    cardTitle: 'Bob Dylan',
    cardDescription:
      'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
    button: {
      url: 'https://en.wikipedia.org/wiki/Bob_Dylan',
      label: 'Go to wikipedia',
    },
  };

  return (
    <div className="card m-5">
      <img className="card-img-top" src={data.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{data.cardTitle}</h5>
        <p className="card-text" style={{color:'orange',fontSize:'25px'}}>{data.cardDescription}</p>
        <a href={data.button.url} className="btn btn-primary">
          {data.button.label}
        </a>
      </div>
    </div>
  );
};

export default Card;
