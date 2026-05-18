import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const teamImageId = this.getNodeParameter('teamImageId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/TeamImage/${teamImageId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
