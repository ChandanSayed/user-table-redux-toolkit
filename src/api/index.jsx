import { Chance } from 'chance';

const chance = Chance();

export const fakeData = () => chance.name({ middle: true });
