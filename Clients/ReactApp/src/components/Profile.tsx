import { useAuth } from 'react-oidc-context';
import './Profile.css';

export default function Profile() {
    const auth = useAuth();
    const user = auth.user?.profile || {};

    return (
        <div className="profile">
            <h2>User Claims</h2>
            <ul>
                {Object.keys(user).map((key) => (
                    <li key={key}>
                        <strong>{key}:</strong> {String((user as any)[key])}
                    </li>
                ))}
            </ul>
        </div>
    );
}