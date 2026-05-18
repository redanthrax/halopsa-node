import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const qs: IDataObject = {};

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index, 25) as number;
		qs.count = Math.min(Math.max(limit, 1), 100);
	}

	const response = await apiRequest.call(this, 'GET', '/Report', {}, qs);
	const reports = Array.isArray(response) ? response : [response];

	return reports.map((report) => ({
		json: report as IDataObject,
		pairedItem: { item: index },
	}));
}
