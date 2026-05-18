import { INodeProperties } from 'n8n-workflow';

export const getOldEncryptionDescription: INodeProperties[] = [
	{ displayName: 'No Parameters', name: 'notice', type: 'notice',
		displayOptions: { show: { resource: ['securityChecks'], operation: ['getOldEncryption'] } },
		default: '', description: 'Runs GET /SecurityCheck/oldencryption' },
];
