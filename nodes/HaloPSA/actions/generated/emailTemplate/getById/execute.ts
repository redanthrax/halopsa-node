import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const emailTemplateId = this.getNodeParameter('emailTemplateId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/EmailTemplate/${emailTemplateId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
