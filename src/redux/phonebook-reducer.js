import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
    handleSubmitSuccess,
    deleteContactSuccess,
    filterByName,
} from "./phonebook-actions"

const filterReducer = createReducer('', {
    [ filterByName]: (_, action) => action.payload
})

const itemsReducer = createReducer([], {
    [handleSubmitSuccess]: (state, action) => [...state, action.payload],
    [deleteContactSuccess]: (state, action) => state.filter(contact => contact.id !== action.payload)
})

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer
})
