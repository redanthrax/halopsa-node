import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const techDataResellerDetailId = this.getNodeParameter('techDataResellerDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/TechDataResellerDetails/${techDataResellerDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: techDataResellerDetailId }, pairedItem: { item: index } }];
}
