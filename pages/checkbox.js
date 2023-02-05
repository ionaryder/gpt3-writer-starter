import React, { useState } from 'react';

import Select from 'react-select';
// import { colourOptions } from './data';

const Checkbox = ({ children, ...props }) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

const options = [
    { value: 'french', label: 'French' },
    { value: 'spanish', label: 'Spanish' }
  ]

export default () => {
  const [isClearable, setIsClearable] = useState(false);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={options[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={options}
      />

      <div
        style={{
          color: '.black',
          display: 'inline-block',
          fontSize: 12,
          fontStyle: 'italic',
          marginTop: '1em',
        }}
      >

      </div>
    </>
  );
};