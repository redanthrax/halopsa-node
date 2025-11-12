export function getFieldTypeDescription(field: any): string {
	const fieldTypeMap: Record<string, string> = {
		'X': 'Text',
		'C': 'Currency',
		'N': 'Number',
		'D': 'Date',
		'T': 'Time',
		'B': 'Boolean',
		'L': 'Lookup',
	};
	
	const fieldType = fieldTypeMap[field.validate?.trim()] || (field.validate ? `Type: ${field.validate}` : '');
	const description = fieldType ? `${fieldType}${field.mandatory ? ' (Required)' : ''}` : (field.mandatory ? 'Required' : '');
	
	return description;
}
