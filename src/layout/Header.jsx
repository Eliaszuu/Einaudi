import SocialMediaLinks from "../components/SocialmediaLinks.jsx";

function Header(){
    return (
        <header className="bg-dark py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <a href="https://ludovicoeinaudi.com/" target="_blank" className="text-decoration-none"><h1 className="text-light text-uppercase ">Ludovico Einaudi</h1></a>
                    </div>
                    <div className="col-auto">
                       <SocialMediaLinks></SocialMediaLinks>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
