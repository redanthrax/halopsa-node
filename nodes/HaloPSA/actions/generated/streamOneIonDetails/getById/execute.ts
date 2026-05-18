import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const streamOneIonDetailId = this.getNodeParameter('streamOneIonDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/StreamOneIonDetails/${streamOneIonDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
