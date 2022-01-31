import { colors } from '@mui/material';
import React from 'react';
import Select from 'react-select';

const Setting = () => {
  const options = [
    { value: 'UTM', label: 'UTM' },
    { value: 'DMS', label: 'DMS' },
    { value: 'DM', label: 'DM' },
    { value: 'DD', label: 'DD' },
  ];
  const distance = [
    { value: 'm', label: 'Meter (m)' },
    { value: 'km', label: 'KiloMeter (Km)' },
  ];
  const Velocity = [
    { value: 'ms', label: 'Meters per Second (m/s)' },
    { value: 'kh', label: 'KiloMeters per Hour (k/h)' },
  ];
  const Acceleration = [
    { value: 'ms2', label: 'Meters per square second (m/s^2)' },
    { value: 'g', label: 'Gravity acceleration (g)' },
  ];
  const Langs = [
    { value: 'en', label: 'English' },
    { value: 'p', label: 'فارسی' },
  ];
  const colors = [
    { value: 'dark', label: 'Dark' },
    { value: 'light', label: 'Light' },
  ];
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>System and Units</h2>
          <div>
            <p>Geographical Coordinate System :</p> <Select options={options} />
          </div>
          <div>
            <p>Distance :</p>
            <Select options={distance} />
          </div>
          <div>
            <p>Velocity :</p>
            <Select options={Velocity} />
          </div>
          <div>
            <p>Acceleration :</p>
            <Select options={Acceleration} />
          </div>
        </div>
        <div class="col">
          <h2>Appearance</h2>
          <div>
            <p>Language :</p> <Select options={Langs} />
          </div>
          <div>
            <p>BackGround :</p> <Select options={colors} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
