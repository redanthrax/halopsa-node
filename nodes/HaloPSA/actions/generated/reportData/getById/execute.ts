import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const reportDataId = this.getNodeParameter('reportDataId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ReportData/${reportDataId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
