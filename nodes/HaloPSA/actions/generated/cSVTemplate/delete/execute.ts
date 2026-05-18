import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const cSVTemplateId = this.getNodeParameter('cSVTemplateId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/CSVTemplate/${cSVTemplateId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: cSVTemplateId }, pairedItem: { item: index } }];
}
