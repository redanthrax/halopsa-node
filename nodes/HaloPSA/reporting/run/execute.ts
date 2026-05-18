import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const reportId = this.getNodeParameter('reportId', index) as number;
	const parameters = this.getNodeParameter('parameters', index, {}) as IDataObject | string;

	const qs: IDataObject = { loadreport: true };

	if (parameters && typeof parameters === 'object' && Object.keys(parameters).length > 0) {
		Object.assign(qs, parameters);
	} else if (typeof parameters === 'string' && parameters.trim() !== '') {
		try {
			Object.assign(qs, JSON.parse(parameters) as IDataObject);
		} catch {
			// ignore invalid JSON; loadreport-only request still runs
		}
	}

	const response = await apiRequest.call(this, 'GET', `/Report/${reportId}`, {}, qs);

	return [{
		json: response as IDataObject,
		pairedItem: { item: index },
	}];
}
