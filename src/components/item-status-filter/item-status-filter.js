import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({status,switchStatus}) => {
  return (
    <div className="btn-group">
      <button type="button"
              className={status == "all" ? 'btn btn-info' : 'btn btn-outline-secondary'}
              onClick={() => switchStatus('all')}
      >All</button>
      <button type="button"
              className={status == "active" ? 'btn btn-info' : 'btn btn-outline-secondary'}
              onClick={() => switchStatus('active')}
      >Active</button>
      <button type="button"
              className={status == "done" ? 'btn btn-info' : 'btn btn-outline-secondary'}
              onClick={() => switchStatus('done')}
      >Done</button>
      <button type="button"
              className={status == "important" ? 'btn btn-info' : 'btn btn-outline-secondary'}
              onClick={() => switchStatus('important')}
      >Important</button>
    </div>
  );
};

export default ItemStatusFilter;
