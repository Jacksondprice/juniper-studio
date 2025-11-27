// sessions helpers for course catalog and enrollment api

export function sessionsStep0(records: any[], limit = 111) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep1(records: any[], limit = 339) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep2(records: any[], limit = 226) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep3(records: any[], limit = 475) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep4(records: any[], limit = 437) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep5(records: any[], limit = 185) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep6(records: any[], limit = 46) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
