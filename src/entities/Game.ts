import { randomUUID } from 'crypto';

export class Game {
  id?: string;
  name: string | undefined;
  designer!: string;
  genre!: string;
  platform!: string;
  developer!: string;
  releaseData!: string;
  mode!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(name: string) {
    if (!this.id) {
      this.id = randomUUID();
      this.name = name;
    }
  }
}
