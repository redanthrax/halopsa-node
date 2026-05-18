import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const serviceStatuId = this.getNodeParameter('serviceStatuId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ServiceStatus/${serviceStatuId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: serviceStatuId }, pairedItem: { item: index } }];
}
