// queue helpers for course catalog and enrollment api

export function queueStep0(records: any[], limit = 258) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep1(records: any[], limit = 265) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep2(records: any[], limit = 425) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep3(records: any[], limit = 313) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep4(records: any[], limit = 158) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep5(records: any[], limit = 292) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep6(records: any[], limit = 266) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep7(records: any[], limit = 493) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
