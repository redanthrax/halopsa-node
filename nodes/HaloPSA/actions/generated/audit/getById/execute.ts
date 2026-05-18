import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const auditId = this.getNodeParameter('auditId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Audit/${auditId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
