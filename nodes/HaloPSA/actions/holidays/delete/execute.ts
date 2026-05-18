import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const holidayId = this.getNodeParameter('holidayId', index) as string;
	const response = await apiRequest.call(this, 'DELETE', `/Holiday/${holidayId}`, {}, {});

	return [{
		json: (response as IDataObject) || { success: true, id: holidayId },
		pairedItem: { item: index },
	}];
}
