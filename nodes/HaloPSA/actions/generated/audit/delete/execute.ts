import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const auditId = this.getNodeParameter('auditId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Audit/${auditId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: auditId }, pairedItem: { item: index } }];
}
