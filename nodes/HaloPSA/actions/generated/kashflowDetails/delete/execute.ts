import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const kashflowDetailId = this.getNodeParameter('kashflowDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/KashflowDetails/${kashflowDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: kashflowDetailId }, pairedItem: { item: index } }];
}
