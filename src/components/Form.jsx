import React from 'react';

export default function Form({
    name,
    price,
    inputName,
    inputPrice,
    addItem,
    edit,
    cancelEdit
  }) {
  return (
    <form className="form-input">
      <input type="text"
      placeholder=' name'
        value={name}
        onChange={inputName} />
      <input type="text"
        placeholder=' price'
        value={price}
        onChange={inputPrice} />
      <button type="button"
        className='btn-save'
        onClick={addItem}>save</button>
      {edit ? <button type="button"
        className='btn-cancel'
        onClick={cancelEdit}>cancel</button> : null}
    </form>
  )
}
