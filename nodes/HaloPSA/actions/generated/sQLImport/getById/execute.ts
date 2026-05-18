import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const sQLImportId = this.getNodeParameter('sQLImportId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/SQLImport/${sQLImportId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
