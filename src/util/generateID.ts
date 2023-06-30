import { v4 as uuid } from 'uuid';

export function generateRandomUUID(): number {
  const uuidV4 = uuid();
  const numericUUID = uuidV4.replace(/-/g, '');
  return parseInt(numericUUID, 16);
}
