import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const passwordFieldId = this.getNodeParameter('passwordFieldId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/PasswordField/${passwordFieldId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
