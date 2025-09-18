import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const id = this.getNodeParameter('id', index) as number;

	const requestMethod = 'DELETE';
	const endpoint = `/FieldInfo/${id}`;
	const body = {};
	const qs = {};

	await apiRequest.call(this, requestMethod, endpoint, body, qs);
	
	// Return success response
	return [{ success: true, id, message: 'Field info deleted successfully' }];
}