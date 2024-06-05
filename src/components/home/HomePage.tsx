import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Gestione Utenti</h1>
                <p>Un esempio di applicazione web realizzata con Spring Boot, Spring Security, Spring Data JPA e JSF</p>
                <p>The Spring Side <a href="http://www.thespringside.com">www.thespringside.com</a></p>
                <p>
                    <Link to="/login" className="btn btn-lg btn-info" type={"button"}>Accedi &raquo;</Link>
                    <Link to="/registrazione" className="button-login btn btn-lg btn-info"
                          style={{margin: '0 0.65rem',}} type={"button"}>Registrati &raquo;</Link>
                </p>
            </div>
        </div>
    );
}

export default HomePage;