import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const clientId = this.getNodeParameter('clientId', index, 0) as number;
	const search = this.getNodeParameter('search', index, '') as string;

	const qs: IDataObject = {};
	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index, 50) as number;
		qs.count = Math.min(Math.max(limit, 1), 100);
	}
	if (clientId > 0) {
		qs.client_id = clientId;
	}
	if (search) {
		qs.search = search;
	}

	const response = await apiRequest.call(this, 'GET', '/ClientContract', {}, qs);
	const contracts = Array.isArray(response)
		? response
		: (response as IDataObject)?.contracts ?? [response];

	const list = Array.isArray(contracts) ? contracts : [contracts];

	return list.map((contract) => ({
		json: contract as IDataObject,
		pairedItem: { item: index },
	}));
}
