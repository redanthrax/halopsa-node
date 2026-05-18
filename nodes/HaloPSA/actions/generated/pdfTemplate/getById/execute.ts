import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const pdfTemplateId = this.getNodeParameter('pdfTemplateId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/PdfTemplate/${pdfTemplateId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
