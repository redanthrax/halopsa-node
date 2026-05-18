import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const itemGroupId = this.getNodeParameter('itemGroupId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ItemGroup/${itemGroupId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: itemGroupId }, pairedItem: { item: index } }];
}
