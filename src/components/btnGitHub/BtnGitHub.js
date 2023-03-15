import "./style.css";
import gitHubBlack from "./gitHub-black.svg";


function BtnGitHub({link}) {

    return (
        <a href={link} target= "_blank" rel="noreferrer" className="btn-outline">
            <img src={gitHubBlack} alt="gitHub" />
            GitHub repo
        </a>

    )
}

export default BtnGitHub;