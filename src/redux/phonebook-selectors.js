import { createSelector } from "@reduxjs/toolkit";

const getItems = state => state.phonebookReducer.items;
const getFilter =  state => state.phonebookReducer.filter;

export const getFilterName = createSelector(
    [getItems, getFilter], 
    (items, filter)=> {
         return items.filter(entry => entry.name.name.includes(filter))
    })