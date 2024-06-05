import {useState} from "react";
import {useAuth} from "../../hooks/useAuth.tsx";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const auth = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle the login logic here
        if (auth.login(username, password)) {
            navigate('/secure/protetta');
        } else if (username === '' || password === '') {
            setError('Errore si autenticazione: username o password errati');
        } else {
            setError('');
            // Perform login action
        }
    };

    return (
        <div className="container">
            <form id="login" role="form" className="form-horizontal" onSubmit={handleSubmit}>
                <h3>Login:</h3>

                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}

                <div className="form-group has-feedback has-feedback-left">
                    <label className="col-sm-2 control-label">Username:</label>
                    <div className="left-inner-addon col-sm-4">
                        <i className="icon-user glyphicon glyphicon-user"></i>
                        <input
                            type="text"
                            id="username"
                            className="form-control"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-4">
                        {/* Display username error message here if needed */}
                    </div>
                </div>

                <div className="form-group has-feedback has-feedback-left">
                    <label className="col-sm-2 control-label">Password:</label>
                    <div className="left-inner-addon col-sm-4">
                        <i className="icon-key glyphicon glyphicon-lock"></i>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-4">
                        {/* Display password error message here if needed */}
                    </div>
                </div>

                <br/>

                <div className="form-group">
                    <div className="col-sm-offset-2 col-xs-10">
                        <button type="submit" className="btn btn-primary btn-lg">Login</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;