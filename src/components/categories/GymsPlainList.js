import React from 'react';
import { GymsCard } from "./GymsCard";

export const GymsPlainList = ({gymsList = []}) => {
    return (
        <>
            {gymsList.map((data, index) => {
                    if (data) {
                        return (
                            <div key={index}>
                                <GymsCard
                                    gyms={ data } />
                            </div>
                        );
                    }
                    return gymsList;
                })}
        </>
    );
};