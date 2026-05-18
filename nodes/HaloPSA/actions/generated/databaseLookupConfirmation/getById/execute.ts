import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const databaseLookupConfirmationId = this.getNodeParameter('databaseLookupConfirmationId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/DatabaseLookupConfirmation/${databaseLookupConfirmationId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
