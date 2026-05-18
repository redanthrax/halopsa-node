import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const response = await apiRequest.call(this, 'POST', '/Lookup/ClearCache', {}, {});

	return [{
		json: (response as IDataObject) || { success: true },
		pairedItem: { item: index },
	}];
}
