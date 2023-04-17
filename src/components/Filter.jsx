import React from 'react';

export default function Filter({search, inputSearch, cancelFilter}) {
  return (
    <>
      <input type='text' placeholder='filter' value={search} onChange={inputSearch}/>
      <button type="button"
        className='btn-cancel'
        onClick={cancelFilter}>cancel</button>
    </>
  )
}
