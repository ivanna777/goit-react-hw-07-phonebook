import { connect } from "react-redux";
import { deleteContact } from "../../redux/phonebook-operations";
import {getFilterName} from "../../redux/phonebook-selectors";
import styles from "./ContactList.module.css"

const ContactList = ({entries, onDelete}) => {
        return (
            <div className={styles["contact-wrapper"]}>
                <ul className={styles["contact-list"]}>
                        {entries.map(({id, name}) => (
                            <li key={id} 
                                className={styles["contact-li"]}>
                                {name.name}: {name.number}

                            <button className={styles["delete-btn"]}
                                    type="button"
                                    data-id={ id}
                                    onClick={onDelete}
                                >
                                     Delete    
                                </button>
                            </li>
                        ))}
                    </ul>  
            </div>
        )
    }

// const getFilterName = (entries, filterValue) => {
//     return entries.filter(entry => entry.name.name.includes(filterValue));
// }

const mapStateToProps = (state) => ({
    entries: getFilterName(state)
});

const mapDispatchToProps = dispatch => ({
    onDelete: e => dispatch(deleteContact(Number(e.target.dataset.id)))

})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
