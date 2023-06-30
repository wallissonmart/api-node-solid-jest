import { generateRandomUUID } from '@src/util/generateID';

export interface IGameDTO {
  name: string;
  designer: string;
  genre: string;
  platform: string;
  developer: string;
  releaseData: string;
  mode: string;
}

class Game {
  id?: number;
  name!: string;
  designer!: string;
  genre!: string;
  platform!: string;
  developer!: string;
  releaseData!: string;
  mode!: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor() {
    if (!this.id) {
      this.id = generateRandomUUID();
    }
  }
}

export { Game };
