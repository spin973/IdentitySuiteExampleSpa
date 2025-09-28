import { useAuth } from 'react-oidc-context';
import './Home.css';

export default function Home() {
    const auth = useAuth();

    return (
        <div className="home-container">
            <h1>Welcome to your React OIDC App</h1>
            <p>This application uses OpenID Connect to authenticate users.</p>

            <div className="button-group">
                {!auth.isAuthenticated && (
                    <button onClick={() => auth.signinRedirect()}>Login</button>
                )}
                {auth.isAuthenticated && (
                    <>
                        <button onClick={() => auth.signoutRedirect()}>Logout</button>
                        <button onClick={() => (window.location.href = '/profile')}>
                            View profile
                        </button>
                    </>
                )}
            </div>
        </div>

    );
}