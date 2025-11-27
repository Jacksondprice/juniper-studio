// analytics helpers for course catalog and enrollment api

export function analyticsStep0(records: any[], limit = 406) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep1(records: any[], limit = 438) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep2(records: any[], limit = 357) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep3(records: any[], limit = 465) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep4(records: any[], limit = 457) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep5(records: any[], limit = 49) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep6(records: any[], limit = 495) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep7(records: any[], limit = 251) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep8(records: any[], limit = 264) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep9(records: any[], limit = 385) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep10(records: any[], limit = 20) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
