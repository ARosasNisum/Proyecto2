import React, {useState} from 'react';

const RegistrazionePage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [email, setEmail] = useState('');
    const [messages, setMessages] = useState<{ [key: string]: string }>({});

    const validateForm = () => {
        let valid = true;
        const newMessages: { [key: string]: string } = {};

        if (username.trim() === '') {
            newMessages['username'] = 'La username è obbligatoria';
            valid = false;
        }

        if (password.trim() === '') {
            newMessages['password'] = 'La password è obbligatoria';
            valid = false;
        }

        if (repassword.trim() === '') {
            newMessages['repassword'] = 'La ripetizione della password è obbligatoria';
            valid = false;
        } else if (repassword !== password) {
            newMessages['repassword'] = 'Le password non corrispondono';
            valid = false;
        }

        if (email.trim() === '') {
            newMessages['email'] = "L'email è obbligatoria";
            valid = false;
        }

        setMessages(newMessages);
        return valid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            // Aquí puedes agregar la lógica para enviar los datos al servidor
            console.log({username, password, email});
        }
    };

    return (
        <div className="container">
            <form id="registrazione" role="form" className="form-horizontal" onSubmit={handleSubmit}>
                <h3>Registrazione utente:</h3>

                <div className="form-group has-feedback has-feedback-left">
                    <label className="col-sm-2 control-label">Username:(*)</label>
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
                        {messages.username && <span className="text-danger">{messages.username}</span>}
                    </div>
                </div>

                <div className="form-group has-feedback has-feedback-left">
                    <label className="col-sm-2 control-label">Password:(*)</label>
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
                        {messages.password && <span className="text-danger">{messages.password}</span>}
                    </div>
                </div>

                <div className="form-group has-feedback has-feedback-left">
                    <label className="col-sm-2 control-label">Ripeti password:(*)</label>
                    <div className="left-inner-addon col-sm-4">
                        <i className="icon-key glyphicon glyphicon-lock"></i>
                        <input
                            type="password"
                            id="repassword"
                            className="form-control"
                            placeholder="Ripeti password"
                            value={repassword}
                            onChange={(e) => setRepassword(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-4">
                        {messages.repassword && <span className="text-danger">{messages.repassword}</span>}
                    </div>
                </div>

                <div className="form-group has-feedback has-feedback-left">
                    <label className="col-sm-2 control-label">Email(*):</label>
                    <div className="left-inner-addon col-sm-4">
                        <i className="icon-envelope glyphicon glyphicon-envelope"></i>
                        <input
                            type="text"
                            id="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-4">
                        {messages.email && <span className="text-danger">{messages.email}</span>}
                    </div>
                </div>

                <br/>

                <div className="form-group">
                    <div className="col-sm-offset-2 col-xs-10">
                        <span>(*) campo obbligatorio</span>
                    </div>
                </div>

                <br/>

                <div className="form-group">
                    <div className="col-sm-offset-2 col-xs-10">
                        <button type="submit" className="btn btn-primary btn-lg">Registra utente</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegistrazionePage;