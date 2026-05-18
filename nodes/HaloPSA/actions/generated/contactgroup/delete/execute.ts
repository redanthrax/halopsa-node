import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const contactgroupId = this.getNodeParameter('contactgroupId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Contactgroup/${contactgroupId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: contactgroupId }, pairedItem: { item: index } }];
}
