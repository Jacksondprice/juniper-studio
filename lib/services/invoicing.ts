// invoicing helpers for course catalog and enrollment api

export function invoicingStep0(records: any[], limit = 13) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep1(records: any[], limit = 277) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep2(records: any[], limit = 195) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep3(records: any[], limit = 472) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep4(records: any[], limit = 372) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep5(records: any[], limit = 302) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep6(records: any[], limit = 255) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep7(records: any[], limit = 218) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep8(records: any[], limit = 257) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep9(records: any[], limit = 278) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
