/** Max records per non-paginated HaloPSA list request (matches common API usage). */
export const NON_PAGINATED_MAX_COUNT = 1000;

/** HaloPSA paginated responses use page_size (max 100), not count. */
export const PAGINATED_PAGE_SIZE = 100;

/** Whether a bulk fetch should continue with paginated requests. */
export function shouldFetchMorePages(
	itemsLength: number,
	recordCount: number | undefined,
	maxCount = NON_PAGINATED_MAX_COUNT,
): boolean {
	if (itemsLength < maxCount) {
		return false;
	}
	if (recordCount !== undefined && recordCount <= maxCount) {
		return false;
	}
	return true;
}

/** First page number when continuing after a full non-paginated bulk fetch. */
export function continuationPageNo(
	maxCount = NON_PAGINATED_MAX_COUNT,
	pageSize = PAGINATED_PAGE_SIZE,
): number {
	return Math.floor(maxCount / pageSize) + 1;
}

export function resolvePageSize(requested: unknown, maxPageSize = PAGINATED_PAGE_SIZE): number {
	if (typeof requested === 'number' && requested > 0) {
		return Math.min(requested, maxPageSize);
	}
	return maxPageSize;
}
