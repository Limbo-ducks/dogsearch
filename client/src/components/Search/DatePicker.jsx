import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  DateRangePicker,
  DateRangeDelimiter,
  LocalizationProvider
} from "@material-ui/pickers";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns"; // choose your lib
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
      MuiGrid: { // Name of the component ⚛️ / style sheet
          container: { // Name of the rule
              "margin-bottom": '40px', // Some CSS
          },
      },
  },
});

export default function BasicDateRangePicker() {
  const [selectedDate, handleDateChange] = React.useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={DateFnsUtils}>
    <ThemeProvider theme={theme}>

    
    <Grid container direction="column" alignItems="center" className="date__grid">
    <Typography gutterBottom className="calendar__title">Select Available Dates  
         <Tooltip title="Talents can specify which dates they are available. Select the dates you are looking for." placement="top-start" color="secondary" style={{ fontSize: 18 }}>
            <InfoIcon className="info__icon" fontSize="small">Default Width [300px]</InfoIcon>
        </Tooltip>
    </Typography>
    
      <DateRangePicker
        calendars={1}
        startText="From"
        endText="To"
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps}/>
            <DateRangeDelimiter> to </DateRangeDelimiter>
            <TextField {...endProps} />
          </>
        )}
      />
    </Grid>
    </ThemeProvider>
    </LocalizationProvider>
  );
}
