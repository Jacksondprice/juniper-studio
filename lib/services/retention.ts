// retention helpers for course catalog and enrollment api

export function retentionStep0(records: any[], limit = 256) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep1(records: any[], limit = 146) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep2(records: any[], limit = 288) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep3(records: any[], limit = 107) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep4(records: any[], limit = 219) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep5(records: any[], limit = 336) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep6(records: any[], limit = 134) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep7(records: any[], limit = 59) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep8(records: any[], limit = 216) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
