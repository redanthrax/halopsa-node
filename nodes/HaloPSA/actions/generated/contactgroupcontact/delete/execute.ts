import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const contactgroupcontactId = this.getNodeParameter('contactgroupcontactId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Contactgroupcontact/${contactgroupcontactId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: contactgroupcontactId }, pairedItem: { item: index } }];
}
