import {Link, Outlet} from "react-router-dom";

const LayoutPubblico = () => {
    return (
        <div style={{paddingTop: '50px', paddingBottom: '20px'}}>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button"
                                className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#navbar"
                                aria-expanded="false"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">Gestione Utenti</Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">The Spring Side</Link></li>
                            <li className="dropdown">
                                <a href="#"
                                   className="dropdown-toggle"
                                   data-toggle="dropdown"
                                   role="button"
                                   aria-haspopup="true"
                                   aria-expanded="false"
                                >
                                    Utenti<span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/registrazione">Registrazione</Link></li>
                                    <li><Link to="/secure/listaUtenti">Lista Utenti</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet/>

            <footer className="container">
                <hr/>
                <p>&copy;TheSpringSide 2016</p>
            </footer>
        </div>
    );
};

export default LayoutPubblico;