import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const certificateId = this.getNodeParameter('certificateId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Certificate/${certificateId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
