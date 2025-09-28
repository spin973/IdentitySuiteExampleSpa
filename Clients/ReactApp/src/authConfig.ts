export const oidcConfig = {
    authority: process.env.REACT_APP_OIDC_AUTHORITY!,
    client_id: process.env.REACT_APP_OIDC_CLIENT_ID!,
    redirect_uri: process.env.REACT_APP_OIDC_REDIRECT_URI!,
    post_logout_redirect_uri: process.env.REACT_APP_OIDC_POST_LOGOUT_REDIRECT_URI!,
    scope: process.env.REACT_APP_OIDC_SCOPE!
};