import React from 'react';

function Logger({logs}) {
  return logs.map((event) => <p>{event}</p>);
}

export default Logger;
