// reminders helpers for course catalog and enrollment api

export function remindersStep0(records: any[], limit = 150) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep1(records: any[], limit = 138) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep2(records: any[], limit = 163) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep3(records: any[], limit = 409) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep4(records: any[], limit = 281) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep5(records: any[], limit = 145) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep6(records: any[], limit = 399) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep7(records: any[], limit = 96) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
