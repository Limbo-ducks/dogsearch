import React, {useState, useEffect} from 'react';
import ResultList from './ResultList';
import Filter from './Filter';

const Search = () => {
    const baseURL = '/api/profiles';
    const [status, setStatus] = useState('idle');
    const [hits, setHits] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const search = query => {
        setSearchQuery(query);
        setStatus('loading');
    }
    
    useEffect(() => {
        if (status === 'loading') {
            fetch(`${baseURL}?${searchQuery}`)
            .then(res => res.json())
            .then(data => setHits(data))
            .catch(console.log)
            .finally(()=>setStatus('idle'))
        }
    }, [status, searchQuery])

    return(
        <div>
            <Filter search={search} />
            <ResultList data={hits} />
        </div>
    )
}

export default Search
