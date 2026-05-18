import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const confirmClosureId = this.getNodeParameter('confirmClosureId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ConfirmClosure/${confirmClosureId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: confirmClosureId }, pairedItem: { item: index } }];
}
