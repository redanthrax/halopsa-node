import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const sailPointDetailId = this.getNodeParameter('sailPointDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/SailPointDetails/${sailPointDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: sailPointDetailId }, pairedItem: { item: index } }];
}
