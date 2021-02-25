import PlaylistCard from '../partials/PlaylistCard'


const SearchResults = (props) => {
    
    { console.log('🙏🏼', props.content)}
    
    // let songList = props.content.data.song.map((song, i) => (
    //     <li className="song-list-result">
    //         <h1 key={i}>{song.name}</h1>
    //     </li>
    // ))
    return (
        <div className="container">
            {/* <h1>THIS IS WHERE YOUR SEARCH RESULTS WILL BE</h1> */}
            <div className="search-results">
                <h1>THIS IS WHERE YOUR SEARCH RESULTS WILL BE</h1>
               
                <h1>song</h1>
            </div>
            <div>
                {/* <PlaylistCard songList={songList}/> */}

            </div>
        </div>
    );
}

export default SearchResults;