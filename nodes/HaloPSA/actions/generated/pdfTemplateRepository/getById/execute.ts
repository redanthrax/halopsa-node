import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const pdfTemplateRepositoryId = this.getNodeParameter('pdfTemplateRepositoryId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/PdfTemplateRepository/${pdfTemplateRepositoryId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
