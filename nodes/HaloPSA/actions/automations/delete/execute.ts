import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const automationId = this.getNodeParameter('automationId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Automation/${automationId}`, {}, {});

	return [{
		json: (response as IDataObject) || { success: true, id: automationId },
		pairedItem: { item: index },
	}];
}
