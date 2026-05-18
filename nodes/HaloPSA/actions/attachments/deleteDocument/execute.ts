import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const documentId = this.getNodeParameter('documentId', index) as number;

	const response = await apiRequest.call(
		this,
		'DELETE',
		`/Attachment/document/${documentId}`,
		{},
		{},
	);

	return [{
		json: (response as IDataObject) || { success: true, id: documentId },
		pairedItem: { item: index },
	}];
}
