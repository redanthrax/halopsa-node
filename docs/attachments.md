# Attachment Operations

Manage ticket and action file attachments (`/api/Attachment`).

## Get Many

**Parameters:**
- **Return All** / **Limit**
- **Ticket ID** — Filter by ticket (0 = all)
- **Action ID** — Filter by action; API requires ticket ID when using action filter
- **File Type** — Optional file type filter

## Get by ID

Returns attachment content (often binary) or metadata when **Include Details** is enabled.

## Create

Upload a file using **Filename** and **Data (Base64)**. Set **Ticket ID** to link to a ticket. Use **Additional Fields** for `note`, `showforusers`, `action_id`, etc.

## Delete

Delete an attachment by **Attachment ID**.
