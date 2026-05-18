import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const formattedemailId = this.getNodeParameter('formattedemailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/formattedemail/${formattedemailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
