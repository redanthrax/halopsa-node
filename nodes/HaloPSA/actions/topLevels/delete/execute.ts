import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const topLevelId = this.getNodeParameter('topLevelId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/TopLevel/${topLevelId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: topLevelId }, pairedItem: { item: index } }];
}
