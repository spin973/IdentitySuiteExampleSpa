# IdentitySuite Example SPA

This repository provides a practical example of using **IdentitySuite** with multiple Single Page Applications (SPAs) and a centralized server for OpenID Connect authentication.

It accompanies the step-by-step guide published on the blog:  
👉 [Authentication made easy with IdentitySuite](https://identitysuite.net/blog/identitysuite/authentication-made-easy-guide)

---

## 📂 Repository Structure

The solution is organized into two main folders:

- **Clients/**
  - **AngularApp** → sample integration with Angular
  - **BlazorApp** → sample integration with Blazor WebAssembly
  - **ReactApp** → sample integration with React

- **Server/**
  - **IdentitySuiteServer** → ASP.NET Core server configured with IdentitySuite as the OpenID Connect Provider

---

## 🚀 Goals of this Example

- Demonstrate how to configure **IdentitySuite** as an OIDC server in ASP.NET Core.  
- Provide integration samples with different SPA frameworks (Angular, Blazor, React).  
- Highlight security best practices (PKCE, redirect URIs, token handling).  

---

## 🔗 Useful Resources

- [IdentitySuite Official Website](https://identitysuite.net)  
- [Full step-by-step guide on the blog](https://identitysuite.net/blog/identitysuite/authentication-made-easy-guide)

---

## ⚖️ License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
