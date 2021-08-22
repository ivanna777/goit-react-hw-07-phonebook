import { Component } from "react";
import { connect } from "react-redux";
import { filterByName } from "../../redux/phonebook-actions";
import PropTypes from 'prop-types';
import styles from "./Filter.module.css";

class Filter extends Component {
    
    render() {
        return (
            <div className={styles["filter-wrapper"]}>
                <label className={styles["filter-label"]}>Find contacts by name
                    <input
                        type="text"
                        name="name"
                        onChange={this.props.filtredName}
                        className={styles["filter-input"]}
                    />
                </label>
        
            </div>
        )
    }
}

Filter.propTypes = {
    filtredName: PropTypes.func,
}
const mapDispatchToProps = dispatch => ({
    filtredName: (e)=>dispatch(filterByName(e.target.value.toLowerCase()))
})

export default connect(null, mapDispatchToProps)(Filter);