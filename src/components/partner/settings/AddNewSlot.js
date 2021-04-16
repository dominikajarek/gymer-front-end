import React, {useState} from 'react';
import {Checkbox, FormControlLabel, TextField} from "@material-ui/core";
import "../../../styles/add-slot.css";

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
        <div className="register">
            <form className='register-form'>
                <div className='register-text-field'>
                    <div>
                        <TextField
                            required
                            label="Slot name"
                            variant="outlined"
                            value={slotType}
                            onChange={({target}) => setSlotType(target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Description"
                            variant="outlined"
                            value={description}
                            onChange={({target}) => setDescription(target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            label="Date"
                            type="date"
                            variant="outlined"
                            value={date}
                            onChange={({target}) => handleDateChange(target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Start time"
                            type="time"
                            variant="outlined"
                            value={startTime}
                            onChange={({target}) => setStartTime(target.value)}
                            InputLabelProps={{shrink: true}}
                        />
                    </div>
                    <div>
                        <TextField
                            label="End time"
                            type="time"
                            variant="outlined"
                            value={endTime}
                            onChange={({target}) => setEndTime(target.value)}
                            InputLabelProps={{shrink: true}}
                        />
                    </div>
                    <div className="slot-size">
                        <TextField
                            className="size-field"
                            id="size"
                            label="Size"
                            type="number"
                            disabled={isPrivate}
                            value={isPrivate ? 1 : size}
                            onChange={({target}) => setSize(target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={isPrivate}
                                    onChange={handleChange}
                                    color="primary"
                                />
                            }
                            label="Individual"
                        />
                    </div>

                    <h3 className="error">{message}</h3>
                    <p className='register-input-field'>
                        <button className="button-submit" onClick={handleSubmit}>Save</button>
                    </p>
                </div>
            </form>
        </div>
    )
}


