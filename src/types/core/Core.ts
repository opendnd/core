// types of dice
export enum Dice {
  d4,
  d6,
  d8,
  d10,
  d12,
  d20,
  d100,
}

// list of damage types
export enum DamageTypes {
  Acid,
  Bludgeoning,
  Cold,
  Fire,
  Force,
  Lightning,
  Necrotic,
  Piercing,
  Poison,
  Psychic,
  Radiant,
  Slashing,
  Thunder,
}

// list of abilities
export enum AbilityTypes {
  Strength, // measuring physical power
  Dexterity, // measuring agility
  Constitution, // measuring endurance
  Intelligence, // measuring reasoning and memory
  Wisdom, // measuring Perception and Insight
  Charisma, // measuring force of personality
}
export const abilityMapping = {
  STR: AbilityTypes.Strength,
  DEX: AbilityTypes.Dexterity,
  CON: AbilityTypes.Constitution,
  INT: AbilityTypes.Intelligence,
  WIS: AbilityTypes.Wisdom,
  CHA: AbilityTypes.Charisma,
}

// list of skills
export enum SkillTypes {
  // STR
  Athletics,
  
  // DEX
  Acrobatics,
  SleightOfHand,
  Stealth,

  // INT
  Arcana,
  History,
  Investigation,
  Nature,
  Religion,

  // WIS
  AnimalHandling,
  Insight,
  Medicine,
  Perception,
  Survival,

  // CHA
  Deception,
  Intimidation,
  Performance,
  Persuasion,
}

// list of alignments
// x: Lawful, Neutral, Chaotic
// y: Good, Neutral, Evil
export enum Alignments {
  LG, NG, CG,
  LN, NN, CN,
  LE, NE, CE,
}
export const alignmentsMatrix = {
  LG: { x: '-1', y: '1' },
  NG: { x: '0', y: '1' },
  CG: { x: '1', y: '1' },

  LN: { x: '-1', y: '0' },
  NN: { x: '0', y: '0' },
  CN: { x: '1', y: '0' },

  LE: { x: '-1', y: '-1' },
  NE: { x: '0', y: '-1' },
  CE: { x: '1', y: '-1' },
};
// these values make it easy to map to a background's ideals
export const alignmentsX = {
  '-1': 'lawful',
  '0': 'neutral',
  '1': 'chaotic',
};
export const alignmentsY = {
  '1': 'good',
  '0': 'neutral',
  '-1': 'evil',
};

// list of expanded alignments
// x: Lawful, Social, Neutral, Rebel, Chaotic
// y: Good, Moral, Neutral, Impure, Evil
export enum ExpandedAlignments {
  LG, SG, NG, RG, CG,
  LM, SM, NM, RM, CM,
  LN, SN, NN, RN, CN,
  LI, SI, NI, RI, CI,
  LE, SE, NE, RE, CE,
}
export const expandedAlignmentsMatrix = {
  LG: { x: '-2', y: '2' },
  SG: { x: '-1', y: '2' },
  NG: { x: '0', y: '2' },
  RG: { x: '1', y: '2' },
  CG: { x: '2', y: '2' },

  LM: { x: '-2', y: '1' },
  SM: { x: '-1', y: '1' },
  NM: { x: '0', y: '1' },
  RM: { x: '1', y: '1' },
  CM: { x: '2', y: '1' },

  LN: { x: '-2', y: '0' },
  SN: { x: '-1', y: '0' },
  NN: { x: '0', y: '0' },
  RN: { x: '1', y: '0' },
  CN: { x: '2', y: '0' },

  LI: { x: '-2', y: '-1' },
  SI: { x: '-1', y: '-1' },
  NI: { x: '0', y: '-1' },
  RI: { x: '1', y: '-1' },
  CI: { x: '2', y: '-1' },

  LE: { x: '-2', y: '-2' },
  SE: { x: '-1', y: '-2' },
  NE: { x: '0', y: '-2' },
  RE: { x: '1', y: '-2' },
  CE: { x: '2', y: '-2' },
};
// these values make it easy to map to a background's ideals
export const expandedAlignmentsX = {
  '-2': 'lawful',
  '-1': 'social',
  '0': 'neutral',
  '1': 'rebel',
  '2': 'chaotic',
};
export const expandedAlignmentsY = {
  '2': 'good',
  '1': 'moral',
  '0': 'neutral',
  '-1': 'impure',
  '-2': 'evil',
};

// output the advantage types
export enum AdvantageTypes {
  Advantage,
  Neutral,
  Disadvantage,
}

// export the standard array numbers
export const standardArray = [15, 14, 13, 12, 10, 8];
