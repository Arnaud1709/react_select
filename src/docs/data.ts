export interface QualityOption {
    readonly value: string;
    readonly label: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }

export const qualityOption : readonly QualityOption[] = [
    {value: 'curiosity', label: 'Curiosity'},
    {value: 'take initiatives', label: 'Take initiatives'},
    {value: 'hunger for knowledge', label: 'Hunger for knowledge'},
    {value: 'coffee addict', label: 'Coffee addict'},
    {value: 'back problems', label: 'Back problems', isDisabled: true},
    {value: 'have a cat', label: 'Have a cat'},
    {value: 'versatile', label: 'Versatile'},
    {value: 'teamwork', label: 'Teamwork'},
    {value: 'reachable', label: 'Reachable'},
    {value: 'know a lot of meme', label: 'Know a lot of meme'},
  ];