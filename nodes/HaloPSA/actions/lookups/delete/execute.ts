import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const lookupRecordId = this.getNodeParameter('lookupRecordId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Lookup/${lookupRecordId}`, {}, {});

	return [{
		json: (response as IDataObject) || { success: true, id: lookupRecordId },
		pairedItem: { item: index },
	}];
}
