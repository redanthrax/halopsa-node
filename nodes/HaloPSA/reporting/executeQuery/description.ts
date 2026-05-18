import { INodeProperties } from 'n8n-workflow';

export const executeQueryDescription: INodeProperties[] = [
	{
		displayName: 'SQL',
		name: 'sql',
		type: 'string',
		typeOptions: {
			rows: 8,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['reporting'],
				operation: ['executeQuery'],
			},
		},
		default: 'SELECT TOP 50 id, summary FROM faults ORDER BY id DESC',
		description:
			'Read-only SELECT against the HaloPSA reporting database. Use TOP to limit rows. Datetimes are UTC. No comments or semicolons.',
	},
];
