import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../transport';

function parseParameters(parameters: IDataObject | string): IDataObject {
	if (parameters && typeof parameters === 'object' && Object.keys(parameters).length > 0) {
		return parameters;
	}
	if (typeof parameters === 'string' && parameters.trim() !== '') {
		try {
			return JSON.parse(parameters) as IDataObject;
		} catch {
			return {};
		}
	}
	return {};
}

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const reportId = this.getNodeParameter('reportId', index) as number;
	const parameters = this.getNodeParameter('parameters', index, {}) as IDataObject | string;

	const profile: IDataObject = { id: reportId, ...parseParameters(parameters) };
	const response = await apiRequest.call(this, 'POST', '/Report/Bookmark', profile, {});

	return [{
		json: response as IDataObject,
		pairedItem: { item: index },
	}];
}
