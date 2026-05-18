import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { resolveOptions } from '../../../filterParameters';
import { apiRequest } from '../../../transport';
import { HaloProjectDetailed } from '../../interfaces/projects';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const projectId = this.getNodeParameter('projectId', index) as number;
	const qs = resolveOptions.call(this, index) as IDataObject;

	const responseData: HaloProjectDetailed = await apiRequest.call(
		this,
		'GET',
		`/Projects/${projectId}`,
		{},
		qs,
	);

	return this.helpers.returnJsonArray(responseData);
}
