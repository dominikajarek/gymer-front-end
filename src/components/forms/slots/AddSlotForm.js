import React from 'react';
import {Checkbox, FormControlLabel, TextField} from "@material-ui/core";

export const AddSlotForm = (props) => {
    return (
        <div className='register'>
            <form className='register-form'>
                <div>
                    <TextField
                        required
                        label="Slot name"
                        variant="outlined"
                        value={props.slotType}
                        onChange={({target}) => props.setSlotType(target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        label="Description"
                        variant="outlined"
                        value={props.description}
                        onChange={({target}) => props.setDescription(target.value)}
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
                        value={props.date}
                        onChange={({target}) => props.setDate(target.value)}
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
                        value={props.startTime}
                        onChange={({target}) => props.setStartTime(target.value)}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </div>
                <div>
                    <TextField
                        label="End time"
                        type="time"
                        variant="outlined"
                        value={props.endTime}
                        onChange={({target}) => props.setEndTime(target.value)}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </div>
                <div className="slot-size">
                    <TextField
                        className="size-field"
                        id="size"
                        label="Size"
                        type="number"
                        disabled={props.isPrivate}
                        value={props.isPrivate ? 1 : props.size}
                        onChange={({target}) => props.setSize(target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={props.isPrivate}
                                onChange={props.handleChange}
                                color="primary"
                            />
                        }
                        label="Individual"
                    />
                </div>

                <h3 className="error">{props.message}</h3>
                <p className='register-input-field'>
                    <button className="button-submit" onClick={props.handleSubmit}>Save</button>
                </p>
            </form>
        </div>
    );
};