import React from 'react';

const Card = ({ title, description,icon,image, role, className }) => {
    return (
        <div className={`${className}`}>
           <div className="card container">
           <h4 className="card-title">{title}</h4>
            {role && <p className="card-subtitle">{role}</p>}
            {icon && <div className="card-icon">{icon}</div>}
            {image && <img src={image} alt={title} className='card-img'/>}
            <div className="card-text">
                <p>{description}</p>
                </div>
           </div>
        </div>
    );
};

export default Card;
