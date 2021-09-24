import axios from "axios";
import {
    fetchEntriesRequest,
    fetchEntriesSuccess,
    fetchEntriesError,
    handleSubmitRequest,
    handleSubmitSuccess,
    handleSubmitError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,

} from "./phonebook-actions"

// axios.defaults.baseURL = 'http://localhost:4040';

export const fetchEntries = () => dispatch => {
    dispatch(fetchEntriesRequest());
    axios.get('http://localhost:4040/contacts')
        .then(({data}) => dispatch(fetchEntriesSuccess(data)))
        .catch(error => dispatch(fetchEntriesError(error.message)))
}

export const handleSubmit = name => dispatch => {
    const contact = {
        name
    }
    dispatch(handleSubmitRequest())

    axios
    .post('http://localhost:4040/contacts', contact)
    .then(({data}) => dispatch(handleSubmitSuccess(data)))
    .catch(error => dispatch(handleSubmitError(error)))
}

export const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest())

    axios
    .delete(`http://localhost:4040/contacts/${id}`)
    .then(()=> dispatch(deleteContactSuccess(id)))
    .catch(error=>dispatch(deleteContactError(error)))
}
