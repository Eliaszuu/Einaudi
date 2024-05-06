import SocialMediaLinks from "../components/SocialmediaLinks.jsx";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>&copy; Elias Zulauf</h5>
                        <p>Eine Übersichtliche Website über Ludovico Einaudi</p>
                    </div>

                    <div className="col-md-3">
                        <h5>Folgen Sie Ludovico Einaudi</h5>
                        <SocialMediaLinks></SocialMediaLinks>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
