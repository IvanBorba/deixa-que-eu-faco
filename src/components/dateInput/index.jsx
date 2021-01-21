import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers({ register, errors }) {
    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <KeyboardDatePicker
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="dense"
                    name="birth_date"
                    label="Seu aniversário"
                    id="birth_date"
                    value={selectedDate}
                    inputRef={register}
                    error={errors}
                    helperText={""}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    fullWidth
                    style={{background: "white"}}
                />
        </MuiPickersUtilsProvider>
    );
}
