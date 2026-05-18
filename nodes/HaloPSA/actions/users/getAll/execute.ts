import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { applyFiltersToQueryString, resolveFilters } from '../../../filterParameters';
import { apiRequest, apiRequestAllItems } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const filters = resolveFilters.call(this, index);

	const qs = applyFiltersToQueryString(filters);

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index) as number;
		qs.count = limit;
	}

	const requestMethod = 'GET';
	const endpoint = '/Users';
	const body = {};

	try {
		let users: IDataObject[];

		if (returnAll) {
			users = await apiRequestAllItems.call(this, requestMethod, endpoint, 'users', body, qs);
		} else {
			const response = await apiRequest.call(this, requestMethod, endpoint, body, qs);

			if (response && response.users) {
				users = Array.isArray(response.users) ? response.users : [response.users];
			} else if (Array.isArray(response)) {
				users = response;
			} else {
				users = [];
			}
		}

		return users.map((user) => ({
			json: user,
			pairedItem: { item: index },
		}));
	} catch (error) {
		throw error;
	}
}
