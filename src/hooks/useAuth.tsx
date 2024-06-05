import {createContext, ReactNode, useContext, useState} from 'react';

interface AuthContextType {
    isAuthenticated: boolean
    username: string | null
    login: (username: string, password: string) => boolean
    logout: () => void
}

interface IProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProvider = ({children}: IProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [username, setUsername] = useState<string | null>(null);

    const login = (username: string, password: string): boolean => {
        // Simple authentication logic for demonstration
        if (username === 'admin' && password === 'admin') {
            setIsAuthenticated(true)
            setUsername(username)
            return true
        }
        return false
    };

    const logout = () => {
        setIsAuthenticated(false)
        setUsername(null)
    };

    return (
        <AuthContext.Provider value={{isAuthenticated, username, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
};

export {AuthProvider, useAuth}