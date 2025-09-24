import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloProjectDetailed } from '../../interfaces/projects';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const projectId = this.getNodeParameter('projectId', index) as number;
	const options = this.getNodeParameter('options', index, {}) as IDataObject;

	const qs = {} as IDataObject;

	if (options.includeattachments !== undefined) {
		qs.includeattachments = options.includeattachments;
	}

	if (options.includecustomfields !== undefined) {
		qs.includecustomfields = options.includecustomfields;
	}

	if (options.includedetails !== undefined) {
		qs.includedetails = options.includedetails;
	}

	const requestMethod = 'GET';
	const endpoint = `/Projects/${projectId}`;
	const body = {} as IDataObject;

	let responseData: HaloProjectDetailed;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}