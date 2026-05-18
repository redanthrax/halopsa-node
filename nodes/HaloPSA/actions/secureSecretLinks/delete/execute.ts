import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const linkId = this.getNodeParameter('linkId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/SecureSecretLink/${linkId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: linkId }, pairedItem: { item: index } }];
}
