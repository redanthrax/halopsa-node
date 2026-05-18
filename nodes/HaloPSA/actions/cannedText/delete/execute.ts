import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const cannedTextId = this.getNodeParameter('cannedTextId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/CannedText/${cannedTextId}`, {}, {});

	return [{
		json: (response as IDataObject) || { success: true, id: cannedTextId },
		pairedItem: { item: index },
	}];
}
