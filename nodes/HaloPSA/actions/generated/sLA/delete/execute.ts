import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const sLAId = this.getNodeParameter('sLAId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/SLA/${sLAId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: sLAId }, pairedItem: { item: index } }];
}
