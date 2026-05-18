import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const confirmClosureId = this.getNodeParameter('confirmClosureId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ConfirmClosure/${confirmClosureId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
