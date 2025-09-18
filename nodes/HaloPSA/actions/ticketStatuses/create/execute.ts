import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function create(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as {
		shortname?: string;
		type?: number;
		sequence?: number;
		colour?: string;
		slaaction?: string;
		showonquickchange?: boolean;
		includeinloadbalance?: boolean;
	};

	const body: any = {
		name,
		...additionalFields,
	};

	const responseData = await apiRequest.call(this, 'POST', '/Status', body);

	return this.helpers.returnJsonArray(responseData);
}