import { IExecuteFunctions } from 'n8n-workflow';
import { INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { toNodeApiError } from '../../../errors';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as number;

	try {
		await apiRequest.call(this, 'DELETE', `/Users/${id}`, {}, {});
		
		return [{
			json: { success: true, id, deleted: true },
			pairedItem: { item: index },
		}];
	} catch (error) {
		throw toNodeApiError(this, error);
	}
}