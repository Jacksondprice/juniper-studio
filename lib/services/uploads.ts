// uploads helpers for course catalog and enrollment api

export function uploadsStep0(records: any[], limit = 496) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep1(records: any[], limit = 449) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep2(records: any[], limit = 100) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep3(records: any[], limit = 471) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep4(records: any[], limit = 130) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep5(records: any[], limit = 364) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep6(records: any[], limit = 225) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep7(records: any[], limit = 254) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep8(records: any[], limit = 391) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep9(records: any[], limit = 448) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep10(records: any[], limit = 481) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
