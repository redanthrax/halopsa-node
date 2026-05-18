import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const todoGroupId = this.getNodeParameter('todoGroupId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ToDoGroup/${todoGroupId}`, {}, {});

	return [{
		json: (response as IDataObject) || { success: true, id: todoGroupId },
		pairedItem: { item: index },
	}];
}
