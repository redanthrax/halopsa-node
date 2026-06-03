import { IExecuteFunctions } from 'n8n-workflow';
import { INodeExecutionData } from 'n8n-workflow';
import { resolveOptions } from '../../../filterParameters';
import { apiRequest } from '../../../transport';
import { toNodeApiError } from '../../../errors';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as number;
	const options = resolveOptions.call(this, index);

	try {
		const response = await apiRequest.call(this, 'GET', `/Users/${id}`, {}, options);

		return [{
			json: response,
			pairedItem: { item: index },
		}];
	} catch (error) {
		throw toNodeApiError(this, error);
	}
}
