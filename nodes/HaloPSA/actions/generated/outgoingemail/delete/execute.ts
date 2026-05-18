import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const outgoingemailId = this.getNodeParameter('outgoingemailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Outgoingemail/${outgoingemailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: outgoingemailId }, pairedItem: { item: index } }];
}
