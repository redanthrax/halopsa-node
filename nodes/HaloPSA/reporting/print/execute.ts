import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const reportId = this.getNodeParameter('reportId', index) as number;
	const parameters = this.getNodeParameter('parameters', index, {}) as IDataObject | string;

	const profile: IDataObject = { id: reportId };
	if (parameters && typeof parameters === 'object' && Object.keys(parameters).length > 0) {
		Object.assign(profile, parameters);
	} else if (typeof parameters === 'string' && parameters.trim() !== '') {
		try {
			Object.assign(profile, JSON.parse(parameters) as IDataObject);
		} catch {
			// ignore invalid JSON
		}
	}

	const response = await apiRequest.call(this, 'POST', '/Report/print', [profile], {});

	return [{
		json: response as IDataObject,
		pairedItem: { item: index },
	}];
}
