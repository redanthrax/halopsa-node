import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const securityQuestionId = this.getNodeParameter('securityQuestionId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/SecurityQuestion/${securityQuestionId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: securityQuestionId }, pairedItem: { item: index } }];
}
