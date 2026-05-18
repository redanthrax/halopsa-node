import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const teamId = this.getNodeParameter('teamId', index) as number;

	const response = await apiRequest.call(this, 'DELETE', `/Team/${teamId}`, {}, {});

	return [{
		json: (response as IDataObject) || { success: true, id: teamId },
		pairedItem: { item: index },
	}];
}
