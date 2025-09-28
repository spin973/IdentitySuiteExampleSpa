import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';
import type { ReactElement } from 'react';
interface Props {
    children: ReactElement;
}


export function PrivateRoute({ children }: Props) {
    const auth = useAuth();
    const location = useLocation();

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (!auth.isAuthenticated) {
        auth.signinRedirect({ state: { from: location } });
        return <div>Redirecting to login…</div>;
    }

    return children;
}