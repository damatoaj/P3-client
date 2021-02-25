const PlaylistCard = (props) => {
    return (
        <li className="playlist-card">
            This is the playlist card.
            <button onClick={(e) => props.deletePlaylist}>Delete Playlist</button>
        </li>
    );
}

export default PlaylistCard;