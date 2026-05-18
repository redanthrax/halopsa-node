import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const incomingemailId = this.getNodeParameter('incomingemailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/incomingemail/${incomingemailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
