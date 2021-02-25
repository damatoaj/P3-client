import PlaylistCard from '../partials/PlaylistCard'


const SearchResults = (props) => {
    
     console.log('🙏🏼', props.content)
     console.log(props.content.data)
     
    
    // let songList = Object.keys(props.content.data.song).length > 0 ?
    //     props.content.data.song.map((song, i) => (
    //         <PlaylistCard 
    //             {...song} 
    //             key={song.name}
    //             songId={i}
    //             />)) :
    //         <h3>Search for Music</h3>

    return (
        <div className="container">
            {/* <h1>THIS IS WHERE YOUR SEARCH RESULTS WILL BE</h1> */}
            <div className="search-results">
                <h1>THIS IS WHERE YOUR SEARCH RESULTS WILL BE</h1>
               
                <h1>song</h1>
            </div>
            <div>
                {/* {songList} */}
            </div>
        </div>
    );
}

export default SearchResults;