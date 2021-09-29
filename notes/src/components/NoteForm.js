import React from 'react';
import DatePicker from "react-datepicker";
import { TextField } from '@material-ui/core';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
const NoteForm = ({
    onSubmit,
    handleChange,
    newDay,
    handleDayChange,
    value,
    handleOurChange,
    newOur
}) => {
    return (
        <div className="row">
            <form onSubmit={onSubmit} className='col s12'>
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">chat</i>
                        <input
                            id="icon_prefix"
                            type="text"
                            className="validate"
                            name='tema'
                            onChange={handleChange}
                            value={value}
                            required
                        />
                        <label htmlFor="icon_prefix">Aggiungi nota...</label>
                    </div>
                    <div className="col s3">
                        <div style={{ marginTop: '16px' }}>
                            <i className="material-icons prefix" style={{ marginRight: '5px' }}>date_range</i>
                            <DatePicker
                                autoComplete='off'
                                selected={newDay}
                                onChange={handleDayChange}
                                className="validate"
                                id="icon_prefix"
                                minDate={moment().toDate()}
                                dateFormat='dd/MM/yyyy'
                                required
                            />
                        </div>

                    </div>
                    <div className="col s3">
                        <TextField
                            id="time"
                            onChange={handleOurChange}
                            value={newOur}
                            label="Ora..."
                            type="time"
                            required
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                        />
                    </div>
                </div>
                <button className='btn-floating  waves-effect waves-light green' type='submit'><i className="material-icons">add_to_photos</i></button>
            </form>
        </div>
    );
};

export default NoteForm;