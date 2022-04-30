import React, { useEffect, useState, useContext } from 'react';
import { get } from '../../api/index';
import { HeroContext } from '../../HeroContext';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';

const SearchField = () => {
    const {setSearchResults} = useContext(HeroContext);
    const [userSearch, setUserSearch] = useState("");

    useEffect(() => {
        const fetchHeros = async () => {
            try {
                if (userSearch) {
                    const res = await get('/characters', {'nameStartsWith': userSearch});
                    setSearchResults(res.data.data.results);
                }
            } catch (err) {
                console.log("[SEARCHFIELD] Something's wrong with axios", err)
            }
        }

        fetchHeros();
    }, [userSearch, setSearchResults]); 

    const submitSearch = (e) => {
        if (e.key === 'Enter') {
            setUserSearch(e.target.value);
        }
    }

    return (
        <div className='search-field'>
            <TextField theme={Theme.dark} placeholder="Search ..." icon={mdiMagnify} onKeyUp={submitSearch}/>
        </div>
    );
};

export default SearchField;