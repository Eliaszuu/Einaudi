
const Discography = () => {
    const albums = [
        { title: 'Underwater ', year: 2022, image: "././images/divenire_cover.png"},
        { title: 'Seven Days Walking ', year: 2019, image: "././images/7DaysWalking_Day1_cover.png"},
        { title: 'Elements ', year: 2015, image: "././images/elements_cover.png"},
        { title: 'In a Time Lapse ', year: 2013, image: "././images/In-a-time-lapse_cover.png"},
        { title: 'Nightbook', year: 2009, image: "././images/Nightbook_cover.png"},
        { title: 'Divenire ', year: 2006, image: "././images/divenire_cover.png"},
        { title: 'Una mattina ', year: 2004, image: "././images/UnaMattina_cover.png"},
        { title: 'I giorni ', year: 2001, image: "././images/I-Giorni_cover.png"},
        { title: 'Eden Roc ', year: 1999, image: "././images/EdenRoc_cover.png"},
        { title: 'Le onde', year: 1994, image: "././images/LeOnde_cover.png"}

    ];

    return (
        <section className="py-5">
            <div className="container">
                <h2>Albums</h2>
                <div className="row">
                    {albums.map((album, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{album.title}</h5>
                                    <p className="card-text">Year: {album.year}</p>
                                    <img className="card-img" src={album.image} alt="Bild"/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Discography;
