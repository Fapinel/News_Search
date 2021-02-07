import React from 'react';
import styles from './Form.module.css';
import PropTypes from 'prop-types';
import useSelect from '../hooks/useSelect'

const Form = ({saveCategory}) => {

    const OPTIONS = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Business'},
        { value: 'entertainment', label: 'Entertainment'},
        { value: 'health', label: 'Health'},
        { value: 'science', label: 'Science'},
        { value: 'sports', label: 'Sports'},
        { value: 'technology', label: 'Technology'},
    ]



    // utilizar custom hook
    const [ category, SelectNews ]= useSelect('general', OPTIONS);


    // submit al form, pasar categoria a app.js
    const searchNews = e => {
        e.preventDefault();

        saveCategory(category);
    }


    return ( 
        <div className={`${styles.searcher} row`}>
            <div className="col s12 m8 offset-m2">
                
                <form
                onSubmit={searchNews}
                >
                    <h2 className={styles.heading}>Find News by Category</h2>

                    <SelectNews />

                    <div className="input-fields col s12">
                        <input
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Search"
                        />

                    </div>
                </form>
            </div>
        </div>
     );
}


Form.propTypes = {
    saveCategory: PropTypes.func.isRequired
}
 
export default Form;