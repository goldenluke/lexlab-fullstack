export function tField(field: any, lang: string = 'pt'): string {
  if (!field) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'object') {
    return field[lang] || field['pt'] || field['en'] || Object.values(field)[0] || '';
  }
  return String(field);
}
