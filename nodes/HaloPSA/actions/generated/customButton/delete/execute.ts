import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const customButtonId = this.getNodeParameter('customButtonId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/CustomButton/${customButtonId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: customButtonId }, pairedItem: { item: index } }];
}
