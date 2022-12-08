import { format } from 'date-fns';

export function formatDateTime(time: number | Date): string {
  return format(time, 'dd/MM/yyyy HH:mm');
}
