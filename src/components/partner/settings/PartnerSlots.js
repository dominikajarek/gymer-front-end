import React, {useCallback, useEffect, useState} from 'react';
import {PartnerSlotsForm} from "../../forms/PartnerSlotsForm";
import {Connection} from "../../../actions/Connection";
import axios from "axios";
import {Modal} from "react-responsive-modal";
import {AddNewSlot} from "./AddNewSlot";

export const PartnerSlots = () => {

    const [slots, setSlots] = useState([]);
    const [message, setMessage] = useState('');
    const [partnerId, setPartnerId] = useState();
    const [open, setOpen] = useState(false);

    const handleRemoveSlot = useCallback(() => window.location.reload(), []);

    useEffect(() => {
        const getActiveUserUrl = '/api/me';
        Connection.getRequestWithCallbacks(getActiveUserUrl, getUserSlots, Connection.logMessageCallback);
    }, []);

    const getUserSlots = data => {
        setPartnerId(data.id);
        const getSlotsUrl = '/api/partners/' + data.id + '/slots';
        axios.get(getSlotsUrl)
            .then(response => {
               setSlots(response.data._embedded.slotDTOList);
            }).catch(error => {
                setMessage(error);
        })
    }

    const deleteSlot = (slotId) => {
        if (window.confirm('Do you want to delete this slot?')) {
            const deleteSlotUrl = `/api/partners/${partnerId}/slots/${slotId}`
            axios.delete(deleteSlotUrl)
                .then(response => {
                    setMessage("Successfully delete slot");
                    handleRemoveSlot()
                })
        }
    }

    return (
        <div>
            <p className='slots-message'>{message}</p>
            <button className='button-on-slot' onClick={() => setOpen(true)}>Add new slot</button>

            <Modal open={open} onClose={() => setOpen(false)} center>
                <AddNewSlot
                    partnerId={partnerId}
                    closeModal = {() => setOpen( false)}
                />
            </Modal>

            {
                slots.map((slot, index) => {
                    return (<div key={index}>
                            <PartnerSlotsForm
                            slot={slot}
                            deleteSlot={deleteSlot}
                            />
                        </div>
                    )
                })
            }
        </div>
    )

}