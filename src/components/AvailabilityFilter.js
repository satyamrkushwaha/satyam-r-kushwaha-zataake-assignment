import React from 'react';

const AvailabilityFilter = ({ availability, setAvailability }) => {

  const handleAvailabilityChange = (e) => {
    const value = e.target.value;
    setAvailability(prev =>
      prev.includes(value) ? prev.filter(avail => avail !== value) : [...prev, value]
    );
  };

  return (
    <div className="availability-main-container filter-group">
      <h5 className='fw-bold pb-4'>AVAILABILITY</h5>
      <div className="d-flex flex-column gap-2">
        <label>
          <input type="checkbox" value="On Stock" onChange={handleAvailabilityChange} /> On Stock
        </label>
        <label>
          <input type="checkbox" value="Out of Stock" onChange={handleAvailabilityChange} /> Out of Stock
        </label>
      </div>

    </div>
  );
};

export default AvailabilityFilter;
