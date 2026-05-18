import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const outcomeId = this.getNodeParameter('outcomeId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Outcome/${outcomeId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: outcomeId }, pairedItem: { item: index } }];
}
