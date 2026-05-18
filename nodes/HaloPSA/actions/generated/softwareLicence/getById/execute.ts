import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const softwareLicenceId = this.getNodeParameter('softwareLicenceId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/SoftwareLicence/${softwareLicenceId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
