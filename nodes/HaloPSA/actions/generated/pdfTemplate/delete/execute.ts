import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const pdfTemplateId = this.getNodeParameter('pdfTemplateId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/PdfTemplate/${pdfTemplateId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: pdfTemplateId }, pairedItem: { item: index } }];
}
