import { formatDistanceToNow } from 'date-fns';

export function formatTimeDistance(time: number | Date): string {
  return formatDistanceToNow(time, {
    addSuffix: true,
  });
}
