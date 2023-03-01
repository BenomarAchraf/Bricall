import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Realisations.css"
import rate from "../../Assets/Images/rate.png"
import déco from "../../Assets/Images/addition.png"

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
      <div >
          <div className="evaluation">
           <h2 >Evaluer le service </h2>
          <img src={rate}
              style={{
                  'width': '117px',
                  'height': '117px'
              }}/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis obcaecati temporibus nisi illo!
              Et culpa dolor ab aspernatur quae quibusdam corporis nihil perferendis, molestiae officiis praesentium a rem labore.</p>
          <div>
              {[...Array(5)].map((star, index) => {
        const value = index + 1;
        return (
          <button
            key={index}
            onClick={() => handleClick(value)}
            style={{
              color: value <= rating ? 'orange' : 'gray',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              outline: 'none',
              fontSize: '2rem',
            }}
          >
            ★
          </button>
        );
      })}
      </div>
          </div>
          <div className="evaluate"><h2 >Contactez-moi </h2>
              <h3>Si vous avez besoin d'une prestation </h3>
              <Link to="/contact">
                <button>Follow the link</button>
              </Link>
</div>
    </div>
  );
};

export default Rating;