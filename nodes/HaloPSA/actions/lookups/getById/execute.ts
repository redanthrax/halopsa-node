import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('lookupRecordId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Lookup/${id}`, {}, {});

	return [{ json: response, pairedItem: { item: index } }];
}
