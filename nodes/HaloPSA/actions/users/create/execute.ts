import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { toNodeApiError } from '../../../errors';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', index) as string;
	const emailaddress = this.getNodeParameter('emailaddress', index) as string;
	const clientIdParam = this.getNodeParameter('client_id', index);
	const client_id = typeof clientIdParam === 'string' ? parseInt(clientIdParam, 10) : (clientIdParam as number);
	const siteIdParam = this.getNodeParameter('site_id', index);
	const site_id = typeof siteIdParam === 'string' ? parseInt(siteIdParam, 10) : (siteIdParam as number);
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;
	
	const body = {
		name,
		emailaddress,
		client_id,
		site_id,
		...additionalFields,
	};

	try {
		const response = await apiRequest.call(this, 'POST', '/Users', [body], {});
		
		let users = [];
		if (Array.isArray(response)) {
			users = response;
		} else if (response) {
			users = [response];
		}

		return users.map((user: any) => ({
			json: user,
			pairedItem: { item: index },
		}));
	} catch (error) {
		throw toNodeApiError(this, error);
	}
}