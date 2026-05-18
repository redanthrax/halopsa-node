import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const itemId = this.getNodeParameter('itemId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Item/${itemId}`, {}, {});

	return [{
		json: (response as IDataObject) || { success: true, id: itemId },
		pairedItem: { item: index },
	}];
}
