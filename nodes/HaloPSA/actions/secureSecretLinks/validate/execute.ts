import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const token = this.getNodeParameter('token', index, '') as string;
	const passphrase = this.getNodeParameter('passphrase', index, '') as string;
	const qs: IDataObject = {};
	if (token) qs.token = token;
	if (passphrase) qs.passphrase = passphrase;

	const response = await apiRequest.call(this, 'GET', '/SecureSecretLink/validate', {}, qs);
	return [{ json: response as IDataObject, pairedItem: { item: index } }];
}
