import React from 'react';
const Date = (props) => {
  const { date } = props;
  if (!date) return <h3>Loading...</h3>;
  else {
    return (
      <div className="date">
        <p>{date}</p>
      </div>
    );
  }
};
export default Date;
