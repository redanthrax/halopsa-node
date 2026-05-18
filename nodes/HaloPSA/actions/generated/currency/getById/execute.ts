import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const currencyId = this.getNodeParameter('currencyId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Currency/${currencyId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
