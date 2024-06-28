import React, {useState} from 'react';

const Search = () => {
    const [searchInput, setSearchInput] = useState('')
    const  [addInput, setAddInput] = useState('')
    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value)
    }
    const handleAddInputChange = (event) => {
        setAddInput(event.target.value)
    }


    return (
        <div>
            <label>
                Search:
                <input type="text" value={searchInput} onChange={handleSearchInputChange}/>
            </label>
            <br />
            <label>
                Add:
                <input type="text" value={addInput} onChange={handleAddInputChange} />
            </label>
        </div>
    );
};

export default Search;