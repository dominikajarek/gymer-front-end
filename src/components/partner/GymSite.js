import React from 'react';
import { useParams } from 'react-router-dom';
import { Navigation } from "./Navigation";
import { Employees } from "./Employees";
import { Contact } from './Contact';
import { WorkingHours } from "./WorkingHours";
import { useAxiosGet } from "../../actions/useAxiosGet";

import '../../styles/gym-site.css';
import image from '../../images/gym9.jpg';
import image1 from '../../images/gym2.jpg';

export const GymSite = () => {

    const { id } = useParams();

    const url = `/api/partners/${id}`;
    const data = useAxiosGet(url);
    let content = null;

    if (data.error) {
        content =
            <p>
                There was an error, please refresh page or try again later
            </p>
    }

    if (data.isLoading) {
        content = 'Loading...'
    }

    if (data.data) {
        return (
            content =
                <div>
                    <Navigation id={id} />
                    <div className='container-gymsite'>
                        <h1 className='gym-name'>{data.data.name}</h1>
                        <img alt='photo' src={image1} className='gym-image1' />
                        <img alt='photo' src={image} className='gym-image2' />
                        <div className="gym-info modal">
                            <WorkingHours />
                            <Contact />
                            <div className='url-link'>
                                <a className='gym-link' href={data.data.website}>{data.data.website}</a>
                            </div>
                        </div>
                        <div className="about-info modal">
                            <div className="about-name column-name">About us</div>
                            <div className="about-details">
                                {data.data.description}
                                {"\n"}
                            </div>
                        </div>
                        <div className="team-info">
                            <Employees />
                        </div>
                    </div>
                </div>
        );
    }

    return (
        <div>
            {content}
        </div>
    );
}