
export function generateJobKey(userEmail, jobInfo) {
  return `${userEmail}-job-${jobInfo.name}-${jobInfo.claim}`;
}
