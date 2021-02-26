const PlaylistCard = (props) => {
    console.log(props, '!!!!!!!!!!!!')
    // let playlistList;

    // console.log(props.playlists, ')
    // if (props.playlists.length > 0) {
    //     playlistList = props.playlists.map((pl, i) => ( 
    //         <li className="playlist-card">
    //             This is the playlist card.
    //             <h4 key={i}>{pl.title}</h4>
    //             <button onClick={(e) => props.deletePlaylist}>Delete Playlist</button>
    //         </li>
    //     ))
    // } else {
    //     return <h4>You haven't made a playlist yet!</h4>
    // }
    // console.log('😤', playlistList)
    return (
        <div>
            
            {props.playlistList}
        </div>

    );
}

export default PlaylistCard;