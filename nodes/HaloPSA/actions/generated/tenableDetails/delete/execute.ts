import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const tenableDetailId = this.getNodeParameter('tenableDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/TenableDetails/${tenableDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: tenableDetailId }, pairedItem: { item: index } }];
}
