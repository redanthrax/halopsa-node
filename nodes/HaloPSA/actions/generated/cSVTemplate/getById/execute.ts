import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const cSVTemplateId = this.getNodeParameter('cSVTemplateId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/CSVTemplate/${cSVTemplateId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
