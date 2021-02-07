import React, {useState} from 'react';

const useSelect = (stateInitial, options) => {

    // state del custom hook
    const [state, updateState] = useState(stateInitial);
    
    const NewsSelect = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => updateState(e.target.value)}
        >
            {options.map(option => (
                <option key={option.value} value ={option.value}>{option.label}</option>
            ))}
        </select>
    );

    return [state, NewsSelect];
}
 
export default useSelect;