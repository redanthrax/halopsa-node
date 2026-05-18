# Secure Secret Link Operations

Password-protected secret sharing (`/api/SecureSecretLink`).

## Get Many / Get by ID / Create / Delete

Standard CRUD with **Link ID** and **Additional Fields** on create.

## Validate

Validate a link via `GET /SecureSecretLink/validate` with **Token** and **Passphrase** query parameters.
