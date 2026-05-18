import { GenericValue, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const favourites = this.getNodeParameter('favourites', index) as string;
	let parsed: unknown;
	try {
		parsed = JSON.parse(favourites);
	} catch {
		throw new Error('Invalid JSON format for favourites');
	}
	const response = await apiRequest.call(this, 'POST', '/CannedText/favourite', parsed as GenericValue[], {});
	return this.helpers.returnJsonArray(response);
}
