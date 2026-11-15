import { ConferenceBrief, ConferenceSession } from '../data/conferenceData';
import { ConferenceDocument } from '../data/documentationData';

function formatICSDate(dateISO: string, timeHHMM: string): string {
  const cleanDate = dateISO.replace(/-/g, '');
  const cleanTime = timeHHMM.replace(':', '') + '00';
  return `${cleanDate}T${cleanTime}`;
}

function triggerTextDownload(filename: string, content: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function downloadSessionICS(sessions: ConferenceSession[]) {
  if (sessions.length === 0) return;

  const events = sessions
    .map((session) => {
      const dtStart = formatICSDate(session.dateISO, session.startTime);
      const dtEnd = formatICSDate(session.dateISO, session.endTime);
      const description = `${session.summary} Lead: ${session.leadOrg}. Portal: https://afeea.au-afrec.org/`;
      return [
        'BEGIN:VEVENT',
        `UID:afeea-${session.id}@au-afrec.org`,
        `DTSTART;TZID=Africa/Addis_Ababa:${dtStart}`,
        `DTEND;TZID=Africa/Addis_Ababa:${dtEnd}`,
        `SUMMARY:AfEEA: ${session.title}`,
        `LOCATION:${session.room}`,
        `DESCRIPTION:${description.replace(/\n/g, ' ')}`,
        'END:VEVENT'
      ].join('\r\n');
    })
    .join('\r\n');

  const calendar = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//AFREC//AfEEA Conference//EN',
    'CALSCALE:GREGORIAN',
    events,
    'END:VCALENDAR'
  ].join('\r\n');

  triggerTextDownload('AfEEA-Conference-Schedule.ics', calendar, 'text/calendar;charset=utf-8');
}

export function downloadBriefSummary(brief: ConferenceBrief) {
  const lines = [
    'AFRICAN ENERGY EFFICIENCY ALLIANCE (AfEEA)',
    'African Energy Commission (AFREC) · African Union',
    '====================================================',
    `Document Reference: ${brief.code}`,
    `Title: ${brief.title}`,
    `Category: ${brief.category} (${brief.pages})`,
    'Official Portal: https://afeea.au-afrec.org/',
    '',
    'EXECUTIVE SUMMARY',
    brief.summary,
    '',
    'KEY POLICY & TECHNICAL TAKEAWAYS',
    ...brief.keyTakeaways.map((item, idx) => `${idx + 1}. ${item}`),
    '',
    'Published for the African Energy Efficiency Conference — Addis Ababa, Ethiopia.'
  ].join('\n');

  triggerTextDownload(`${brief.code}.txt`, lines, 'text/plain;charset=utf-8');
}

export function downloadFullDocument(doc: ConferenceDocument) {
  const sectionsMarkdown = doc.sections
    .map((sec) => {
      const paras = sec.paragraphs.join('\n\n');
      const bullets = sec.bullets?.length
        ? '\n\n' + sec.bullets.map((b) => `- ${b}`).join('\n')
        : '';
      return `## ${sec.heading}\n\n${paras}${bullets}`;
    })
    .join('\n\n');

  const markdown = [
    `# ${doc.title}`,
    '',
    `- **Reference Code:** ${doc.code}`,
    `- **Category:** ${doc.category}`,
    `- **Authoring Body:** ${doc.authoringBody}`,
    `- **Version:** ${doc.version} (${doc.publishedDate})`,
    `- **Extent:** ${doc.pages}`,
    `- **Official Portal:** https://afeea.au-afrec.org/`,
    '',
    '## Executive Summary',
    '',
    doc.summary,
    '',
    '## Key Takeaways',
    '',
    ...doc.keyTakeaways.map((k, idx) => `${idx + 1}. ${k}`),
    '',
    sectionsMarkdown,
    '',
    '---',
    'African Energy Commission (AFREC) · African Union Headquarters, Addis Ababa'
  ].join('\n');

  triggerTextDownload(`${doc.code}.md`, markdown, 'text/markdown;charset=utf-8');
}
