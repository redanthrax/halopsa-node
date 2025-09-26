import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', index) as string;
	const emailaddress = this.getNodeParameter('emailaddress', index) as string;
	const site_id = this.getNodeParameter('site_id', index) as number;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;
	
	const body = {
		name,
		emailaddress,
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
		throw error;
	}
}