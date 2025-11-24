import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as number;
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;

	const qs: IDataObject = {};

	if (filters) {
		Object.assign(qs, filters);
	}

	try {
		const response = await apiRequest.call(this, 'GET', `/Users/${id}`, {}, qs);

		return [{
			json: response,
			pairedItem: { item: index },
		}];
	} catch (error) {
		throw error;
	}
}
