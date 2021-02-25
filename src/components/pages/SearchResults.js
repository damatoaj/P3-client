import SongSearch from '../partials/SongSearch'


const SearchResults = (props) => {

    { console.log('🙏🏼', props.content.length) }
    let songList



    if (props.content.length > 0) {
        songList = props.content.map((song, i) => (
            <li className="song-card">
                <h4 key={i}>{song.name}</h4>
            </li>
        ))
    } else {
        <h1>Loading</h1>
    }

    return (
        <div className="container">
            {/* <h1>THIS IS WHERE YOUR SEARCH RESULTS WILL BE</h1> */}
            <div className="inner-container">
                <h1>THIS IS WHERE YOUR SEARCH RESULTS WILL BE</h1>
                {/* <li className="song-card">This is the song card.</li> */}
                {/* <PlaylistCard songList={songList} /> */}
                <SongSearch songList={songList} />
            </div>
        </div>
    );
}

export default SearchResults;