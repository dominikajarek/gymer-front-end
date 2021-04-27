import React from 'react';
import {Link} from 'react-router-dom';

import image from '../../../images/gym2.jpg';

export const GymsCard = (props) => {

    return (
        <div className="grid">
            <div className="grid__item">
                <div className="card">
                    <div className="card__content">
                        <img alt='img' src={image}/>
                        <Link
                            to={`/gymsite/${props.gyms.id}`}
                            className='gym-link'>
                            <h1 className="card__header">{props.gyms.name}</h1>
                            <button className="card__btn">Explore <span>&rarr;</span></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}