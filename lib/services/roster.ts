// roster helpers for course catalog and enrollment api

export function rosterStep0(records: any[], limit = 493) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep1(records: any[], limit = 204) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep2(records: any[], limit = 422) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep3(records: any[], limit = 264) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep4(records: any[], limit = 383) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep5(records: any[], limit = 288) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep6(records: any[], limit = 377) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep7(records: any[], limit = 371) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep8(records: any[], limit = 330) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep9(records: any[], limit = 221) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
