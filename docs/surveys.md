# Survey Operations

List customer satisfaction and feedback records (`GET /api/Feedback` per OpenAPI).

## Get Many

**Parameters:**
- **Return All** / **Limit** — Return All paginates through all pages; limited requests cap at 100 per API call
- **Ticket ID** — Optional client-side filter on `ticket_id` / `feedback_faultid` (0 = all). The Feedback list endpoint has no documented query filters.
