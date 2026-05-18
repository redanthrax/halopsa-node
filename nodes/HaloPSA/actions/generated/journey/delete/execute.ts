import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const journeyId = this.getNodeParameter('journeyId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Journey/${journeyId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: journeyId }, pairedItem: { item: index } }];
}
