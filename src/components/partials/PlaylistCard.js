const PlaylistCard = (props) => {
    return (
        <div className="playlist-card">
            {props.songList}
        </div>
    );
}

export default PlaylistCard;