import axios from "axios";
import {
    handleSubmitRequest,
    handleSubmitSuccess,
    handleSubmitError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,

} from "./phonebook-actions"


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
