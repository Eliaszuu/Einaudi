

function Embedspotify(){
    return (
        <div className="container">
            <h2>Höre Rein</h2>
            <iframe
                style={{borderRadius: '12px'}}
                src="https://open.spotify.com/embed/artist/2uFUBdaVGtyMqckSeCl0Qj?utm_source=generator"
                width="100%" height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            >
            </iframe>
        </div>

    )
}

export default Embedspotify