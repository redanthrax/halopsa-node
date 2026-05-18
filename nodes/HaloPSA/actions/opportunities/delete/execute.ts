import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const opportunityId = this.getNodeParameter('opportunityId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Opportunities/${opportunityId}`, {}, {});

	return [{
		json: (response as IDataObject) || { success: true, id: opportunityId },
		pairedItem: { item: index },
	}];
}
