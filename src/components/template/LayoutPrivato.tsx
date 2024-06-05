import {Link, Outlet, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth.tsx";

const LayoutPrivato = () => {
    const navigate = useNavigate();
    const auth = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        auth.logout();
        navigate('/');
    };

    return (
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target="#navbar"
                                aria-expanded="false"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/secure/protetta">Gestione Utenti</Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="#">The Spring Side</Link></li>
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
                                    <li><Link to="/registrazione">Registrazione</Link></li>
                                    <li><Link to="/secure/listaUtenti">Lista Utenti</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="navbar-form navbar-right" onSubmit={handleSubmit}>
                            <button type="submit" className="btn btn-success">logout <i
                                className="glyphicon glyphicon-chevron-right"></i></button>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="#"><i className="glyphicon glyphicon-user"></i> {auth.username}</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main style={{paddingTop: '50px', paddingBottom: '20px'}}>
                <Outlet/>
            </main>

            <footer className="container">
                <hr/>
                <p>&copy; TheSpringSide 2016</p>
            </footer>
        </div>
    );
};

export default LayoutPrivato;