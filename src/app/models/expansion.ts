export class Expansion {
  id: number;
  iconUrl: string;
  name: string;
  descriptions: ExpansionDescription[];
}

interface ExpansionDescription {
  key: string;
  text: string;
}
