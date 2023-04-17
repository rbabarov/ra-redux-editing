import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemStore, deleteItemStore, editItemStore, filterItemStore } from "./store/listReducer"

import Form from "./components/Form";
import ItemsList from "./components/ItemsList";
import Filter from "./components/Filter";

export default function App() {
  const [input, setInput] = useState({
    name: '',
    price: ''
  })
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState(null)
  const [search, setSearch] = useState({
    start: false,
    input: ''
  })
  const storeItems = useSelector((state) => state.listReducer.items)
  const filterList = useSelector((state) => state.listReducer.filterItems)
  const dispatch = useDispatch()

  function inputName(ev) {
    setInput((prev) => ({...prev, name: ev.target.value}))
  }

  function inputPrice(ev) {
    setInput((prev) => ({...prev, price: ev.target.value}))
  }

  function addItem(ev) {
    ev.preventDefault()
    if (input.name !== '' && input.price !== '' && !edit) {
      dispatch(addItemStore({
        name: input.name,
        price: input.price,
        id: nanoid()
      }))
      setInput({
        name: '',
        price: ''
      })
    } else if (input.name !== '' && input.price !== '' && edit) {
      dispatch(editItemStore({
        name: input.name,
        price: input.price,
        id: editId
      }))
      setInput({
        name: '',
        price: ''
      })
      setEdit(false)
    }
  }

  function editItem(item) {
    setInput({
      name: item.name,
      price: item.price
    })
    setEdit(true)
    setEditId(item.id)
    if (search.start) {
      setSearch({
        start: false,
        input: ''
      })
    }
  }

  function removeItem(item) {
    dispatch(deleteItemStore(item.id))
    setInput({
      name: '',
      price: ''
    })
    setEdit(false)
    setEditId(null)
    if (search.start) {
      setSearch({
        start: false,
        input: ''
      })
    }
  }

  function cancelEdit() {
    setInput({
      name: '',
      price: ''
    })
    setEdit(false)
    setEditId(null)
  }

  function inputSearch(ev) {
    setSearch({
      start: true,
      input: ev.target.value
    })
    dispatch(filterItemStore(ev.target.value))
  }

  function cancelFilter() {
    setSearch({
      start: false,
      input: ''
    })
  }

  return (
    <div className="App">
      <Filter search={search.input} inputSearch={inputSearch} cancelFilter={cancelFilter}/>
      <Form
        name={input.name}
        price={input.price}
        inputName={inputName}
        inputPrice={inputPrice}
        addItem={addItem}
        edit={edit}
        cancelEdit={cancelEdit}/>
      <ItemsList list={search.start ? filterList : storeItems} editItem={editItem} removeItem={removeItem}/>
    </div>
  );
}
