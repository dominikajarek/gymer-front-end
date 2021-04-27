import React, {useState} from 'react';
import {Checkbox, FormControlLabel, TextField} from "@material-ui/core";
import "../../../../styles/add-slot.css";
import {AddSlotForm} from "../../../forms/slots/AddSlotForm";

export const AddNewSlot = (props) => {

    const [date, handleDateChange] = useState('');
    const [description, setDescription] = useState('');
    const [slotType, setSlotType] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);
    const [size, setSize] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setIsPrivate(event.target.checked);
    };

    const handleSubmit = () => {
        handleResponse()
        //TODO there is error while sending data because backend need slot id

        // const addSlotUrl = `/api/partners/${props.partnerId}/slots`;
        // const newSlotData = {
        //     "description": description,
        //     "date": date,
        //     "startTime": startTime + ":00",
        //     "endTime": endTime + ":00",
        //     "slotType": slotType,
        //     "isPrivate": isPrivate,
        //     "size": size
        // };
        // Connection.postRequestWithCallbacks(addSlotUrl, newSlotData, handleResponse, Connection.logMessageCallback);
    }

    const handleResponse = () => {
        props.closeModal();
    }

    return (
        <AddSlotForm
            slotType={slotType}
            description={description}
            date={date}
            startTime={startTime}
            endTime={endTime}
            isPrivate={isPrivate}
            size={size}
            message={message}
            submit={handleSubmit}
            setSlotType={setSlotType}
            setDescription={setDescription}
            setDate={handleDateChange}
            setStartTime={setStartTime}
            setEndTime={setEndTime}
            setSize={setSize}
            handleChange={handleChange}
        />
    )
}


