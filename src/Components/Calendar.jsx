import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { colors } from "@mui/material";

const ReservationForm = () => {
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [numberOfPersons, setNumberOfPersons] = useState(1);

  const handleArrivalDateChange = newDate => {
    setArrivalDate(newDate);
  };

  const handleDepartureDateChange = newDate => {
    setDepartureDate(newDate);
  };

  const handleNumberOfPersonsChange = event => {
    const value = Math.max(1, Number(event.target.value));
    setNumberOfPersons(value);
  };

  const handleSubmit = () => {
    console.log("Arrival Date:", arrivalDate);
    console.log("Departure Date:", departureDate);
    console.log("Number of Persons:", numberOfPersons);
  };

  return (
    <Container maxWidth="sm">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom align="center" style={colors}>
              Find Your Next Stay
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} direction="row" justifyContent="center">
              <Grid item xs={12} sm={4}>
                <DatePicker
                  label="Arrival Date"
                  value={arrivalDate}
                  onChange={handleArrivalDateChange}
                  renderInput={params => <TextField {...params} fullWidth />}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <DatePicker
                  label="Departure Date"
                  value={departureDate}
                  onChange={handleDepartureDateChange}
                  renderInput={params => <TextField {...params} fullWidth />}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Number of Persons"
                  type="number"
                  value={numberOfPersons}
                  onChange={handleNumberOfPersonsChange}
                  fullWidth
                  inputProps={{ min: 1 }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginTop: 20 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              style={{ backgroundColor: "skyblue", color: "white" }}
            >
              Find Now
            </Button>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </Container>
  );
};

export default ReservationForm;
