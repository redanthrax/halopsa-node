import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const reportId = this.getNodeParameter('reportId', index) as number;
	const parameters = this.getNodeParameter('parameters', index, {}) as IDataObject | string;

	const body: IDataObject = { id: reportId };

	if (parameters && typeof parameters === 'object' && Object.keys(parameters).length > 0) {
		body.parameters = parameters;
	} else if (typeof parameters === 'string' && parameters.trim() !== '') {
		try {
			body.parameters = JSON.parse(parameters);
		} catch {
			body.parameters = parameters;
		}
	}

	const response = await apiRequest.call(this, 'POST', '/Report/run', body, {});

	return [{
		json: response as IDataObject,
		pairedItem: { item: index },
	}];
}
