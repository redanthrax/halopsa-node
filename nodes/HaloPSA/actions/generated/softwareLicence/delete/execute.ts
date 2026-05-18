import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const softwareLicenceId = this.getNodeParameter('softwareLicenceId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/SoftwareLicence/${softwareLicenceId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: softwareLicenceId }, pairedItem: { item: index } }];
}
