import React from 'react';
import PropTypes from 'prop-types';

function LabelledInput(name, label, value, onChange) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} value={value} onChange={onChange} />
    </>
  );
}

LabelledInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LabelledInput;
