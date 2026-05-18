import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const externalLinkId = this.getNodeParameter('externalLinkId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ExternalLink/${externalLinkId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
