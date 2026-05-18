import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const callLogId = this.getNodeParameter('callLogId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/CallLog/${callLogId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
