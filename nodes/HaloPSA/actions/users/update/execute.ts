import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;
	
	const body = {
		id,
		...updateFields,
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