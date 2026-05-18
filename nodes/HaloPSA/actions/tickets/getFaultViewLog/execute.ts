import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const response = await apiRequest.call(this, 'GET', '/FaultViewLog', {}, {});

	if (Array.isArray(response)) {
		return response.map((row, i) => ({
			json: row as IDataObject,
			pairedItem: { item: index },
		}));
	}

	return [{ json: response as IDataObject, pairedItem: { item: index } }];
}
