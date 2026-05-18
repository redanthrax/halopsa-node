import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const aISuggestionId = this.getNodeParameter('aISuggestionId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/AISuggestion/${aISuggestionId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: aISuggestionId }, pairedItem: { item: index } }];
}
