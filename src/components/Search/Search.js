import React, {useContext, useState} from 'react';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import { HeroContext } from '../../HeroContext'

const Search = () => {
    const {searchResults, setSearchResults} = useContext(HeroContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [herosPerPage] = useState(4);

    //= Get current heros
    const indexOfLastHero = currentPage * herosPerPage;
    const indexOfFirstHero = indexOfLastHero - herosPerPage;
    const currentHeros = searchResults.slice(indexOfFirstHero, indexOfLastHero);

    //= Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className="search">
            
            <div className="results">
                {   
                    currentHeros.length > 0 ? (
                        <>
                            <button className="danger" onClick={() => (
                                setSearchResults([])
                            )}>Clear results</button>
                
                            {currentHeros.map((hero, key) => (
                                <Card hero={hero} key={hero.id}/>
                            ))}
                        </>
                    ) : (
                        <div>
                            <p>Nothing to display.</p>
                            <br />
                            <p>Tips : You can use the search bar to look up for any hero</p>
                            <p>ex: "Sp" then "Enter" to list evey heros with a name starting with "Sp"</p>
                        </div>
                    )
                }
            </div>

            <div className="pagination">
                <Pagination herosPerPage={herosPerPage} totalHeros={searchResults.length} paginate={paginate}/>
            </div>
        </div>
    );
};

export default Search;