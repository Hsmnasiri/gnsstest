import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { geolocated } from 'react-geolocated';

const Home = ({ coords }) => {
  const createData = (name, calories) => ({
    label: name,
    value: calories,
  });

  const rows = [
    createData('Latitude', coords?.latitude),
    createData('Longitude', coords?.longitude),
    createData('Altitude', coords?.altitude),
    createData('Accuracy', coords?.accuracy),
    createData('AltitudeAccuracy', coords?.altitudeAccuracy),
    createData('Heading', coords?.heading),
    createData('Speed', coords?.speed),
  ];

  return (
    <div className="col-12 col-sm-8 mx-auto mt-0 mt-sm-5">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="fw-bold">Label</TableCell>
              <TableCell className="fw-bold">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  '&:last-child td, &:last-child th': {
                    border: 0,
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.label}
                </TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,

    maximumAge: 0,
    timeout: Infinity,
  },
  watchPosition: false,
  userDecisionTimeout: null,
  suppressLocationOnMount: false,
  geolocationProvider: navigator.geolocation,
  isOptimisticGeolocationEnabled: true,
})(Home);
