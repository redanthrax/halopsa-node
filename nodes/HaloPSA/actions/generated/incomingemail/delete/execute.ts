import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const incomingemailId = this.getNodeParameter('incomingemailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/incomingemail/${incomingemailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: incomingemailId }, pairedItem: { item: index } }];
}
