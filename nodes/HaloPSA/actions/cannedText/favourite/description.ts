import { INodeProperties } from 'n8n-workflow';

export const favouriteDescription: INodeProperties[] = [
	{ displayName: 'Favourites', name: 'favourites', type: 'json', required: true,
		displayOptions: { show: { resource: ['cannedText'], operation: ['favourite'] } },
		default: '[]', description: 'Array of CannedTextFavourites objects' },
];
