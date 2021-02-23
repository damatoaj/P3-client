const SearchResults = (props) => {
    return (
        <div className="container">
            <div className="search-results">
                <h1>THIS IS WHERE YOUR SEARCH RESULTS WILL BE</h1>
                {console.log(props.searchQuery)}
                <h1>{props.searchQuery}</h1>
            </div>
        </div>
    );
}

export default SearchResults;