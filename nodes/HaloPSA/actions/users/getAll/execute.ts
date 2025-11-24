import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;

	const qs: IDataObject = {};

	if (filters) {
		Object.assign(qs, filters);

		if (filters.include_custom_fields && Array.isArray(filters.include_custom_fields)) {
			qs.include_custom_fields = filters.include_custom_fields.join(',');
		}
	}

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index) as number;
		qs.count = limit;
	}

	try {
		const response = await apiRequest.call(this, 'GET', '/Users', {}, qs);

		let users = [];
		if (response && response.users) {
			users = Array.isArray(response.users) ? response.users : [response.users];
		} else if (Array.isArray(response)) {
			users = response;
		}

		return users.map((user: any) => ({
			json: user,
			pairedItem: { item: index },
		}));
	} catch (error) {
		throw error;
	}
}
