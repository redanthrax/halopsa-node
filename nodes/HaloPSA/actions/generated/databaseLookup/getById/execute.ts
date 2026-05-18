import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const databaseLookupId = this.getNodeParameter('databaseLookupId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/DatabaseLookup/${databaseLookupId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
