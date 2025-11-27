// rostering helpers for course catalog and enrollment api

export function rosteringStep0(records: any[], limit = 251) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep1(records: any[], limit = 429) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep2(records: any[], limit = 27) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep3(records: any[], limit = 161) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep4(records: any[], limit = 79) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep5(records: any[], limit = 470) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep6(records: any[], limit = 270) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep7(records: any[], limit = 19) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep8(records: any[], limit = 295) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep9(records: any[], limit = 121) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep10(records: any[], limit = 48) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
