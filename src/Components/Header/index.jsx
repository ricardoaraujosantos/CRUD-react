import { ContainerHeader } from "./styles";
import Title from "../Title";
import './Logo.css';
import imgLogo from './logo192.png'

const Header = () => {

    return(
        <ContainerHeader className="container-fluid d-flex justify-content-around align-items-center">
            <Title name="CRUD with ReactJs"/>
            <img className="App-logo" src={imgLogo} alt="Logo" />
        </ContainerHeader>
    )
}

export default Header;