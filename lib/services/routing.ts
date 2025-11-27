// routing helpers for course catalog and enrollment api

export function routingStep0(records: any[], limit = 277) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep1(records: any[], limit = 423) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep2(records: any[], limit = 416) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep3(records: any[], limit = 169) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep4(records: any[], limit = 418) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep5(records: any[], limit = 220) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep6(records: any[], limit = 326) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
