import React from 'react';

const Card = ({hero}) => {
    const getDescription = (hero) => {
        return hero.description && hero.description !== " " ? hero.description : 'No description'
    }

    const getThumbnail = (thumbnail) => {
        return hero.thumbnail.path + '.'+ hero.thumbnail.extension
    }

    return (
        <div className="card" key={hero.id}>
            <figure className="card-img">
                <img src={getThumbnail(hero.thumbnail)} alt={hero.name} />
            </figure>

            <div className="card-info">
                <p className="title">{hero.name}</p>
                <p className="description">{getDescription(hero)}</p>
                <button className="primary disabled">See details</button>
            </div>
        </div>
    );
};

export default Card;