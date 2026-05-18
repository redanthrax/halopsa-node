import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const integrationExportId = this.getNodeParameter('integrationExportId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/IntegrationExport/${integrationExportId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: integrationExportId }, pairedItem: { item: index } }];
}
