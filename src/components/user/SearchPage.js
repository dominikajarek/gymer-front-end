import React, { useState, useEffect } from 'react';
import { SearchBar } from "./SearchBar";
import { GymsPlainList } from "../categories/GymsPlainList";
import axios from "axios";

export const SearchPage = () => {
    const [input, setInput] = useState('');
    const [gymsListDefault, setGymsListDefault] = useState();
    const [gymsList, setGymsList] = useState();

    useEffect(() => {
        axios.get('/api/partners')
            .then(response => {
                setGymsList(response.data._embedded.partnerDTOList);
                setGymsListDefault(response.data._embedded.partnerDTOList);
            })
    }, []);

    const updateInput = (input) => {
        const filtered = gymsListDefault.filter(gym => {
           return gym.name.toLowerCase().includes(input.toLowerCase());
        });
        setInput(input);
        setGymsList(filtered);
    };


  return (
      <div>
          <SearchBar
              input={input}
              onChange={updateInput}
          />
          <div className='search-grids'>
              <GymsPlainList
                gymsList={gymsList} />
          </div>
      </div>
  );
};