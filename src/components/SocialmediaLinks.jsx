import {BiLogoFacebook, BiLogoInstagram, BiLogoSpotify} from "react-icons/bi";

const SocialMediaLinks = () => {
    return (
        <ul className="list-inline">
            <li className="list-inline-item">
                <a href="https://www.facebook.com/ludovicoeinaudi/" className="text-decoration-none">
                    <div className="rounded-circle d-flex justify-content-center align-items-center"
                         style={{width: '40px', height: '40px', backgroundColor: 'white'}}>
                        <BiLogoFacebook size={24}/>
                    </div>
                </a>
            </li>
            <li className="list-inline-item">
                <a href="https://www.instagram.com/ludovico_einaudi/" className="text-decoration-none">
                    <div className="rounded-circle d-flex justify-content-center align-items-center"
                         style={{width: '40px', height: '40px', backgroundColor: 'white'}}>
                        <BiLogoInstagram size={24}/>
                    </div>
                </a>
            </li>
            <li className="list-inline-item">
                <a href="https://open.spotify.com/artist/2uFUBdaVGtyMqckSeCl0Qj" className="text-decoration-none">
                    <div className="rounded-circle d-flex justify-content-center align-items-center"
                         style={{width: '40px', height: '40px', backgroundColor: 'white'}}>
                        <BiLogoSpotify size={24}/>
                    </div>
                </a>
            </li>
        </ul>
    );
}

export default SocialMediaLinks;
