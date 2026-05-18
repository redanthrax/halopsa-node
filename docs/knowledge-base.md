# Knowledge Base Operations

Manage HaloPSA knowledge base articles (`/api/KBArticle`). Requires appropriate KB permissions on your OAuth application.

## Get Many

**Parameters:**
- **Return All** / **Limit** — Return All paginates through all pages; limited requests cap at 100 per API call
- **Search** — Optional text filter

## Get by ID

**Article ID**

## Create / Update / Delete / Vote

**Create** and **Update** use JSON fields. **Vote** records useful/not useful via `POST /api/KBArticle/vote`.
