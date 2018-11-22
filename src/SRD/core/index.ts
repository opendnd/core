const Roll = require("roll");

export const roll = (dice) => {
  if (typeof(dice) === 'string') {
    return new Roll().roll(dice).result;
  } else {
    let result = 0;
    dice.forEach((die) => {
      result += new Roll().roll(die).result;
    });
    return result;
  }
}

import { 
  Alignments,
  AlignmentsX,
  AlignmentsY,
  ExpandedAlignments,
  ExpandedAlignmentsX,
  ExpandedAlignmentsY,
} from "../../types/core/Core";

// use this matrix to determine positioning of alignments
export const alignmentsMatrix = {
  [Alignments.LG]: { x: -1, y: 1 },
  [Alignments.NG]: { x: 0, y: 1 },
  [Alignments.CG]: { x: 1, y: 1 },

  [Alignments.LN]: { x: -1, y: 0 },
  [Alignments.NN]: { x: 0, y: 0 },
  [Alignments.CN]: { x: 1, y: 0 },

  [Alignments.LE]: { x: -1, y: -1 },
  [Alignments.NE]: { x: 0, y: -1 },
  [Alignments.CE]: { x: 1, y: -1 },
};

export const alignmentsX = {
  [AlignmentsX.Lawful]: -1,
  [AlignmentsX.Neutral]: 0,
  [AlignmentsX.Chaotic]: 1,
};

export const alignmentsY = {
  [AlignmentsY.Good]: 1,
  [AlignmentsY.Neutral]: 0,
  [AlignmentsY.Evil]: -1,
};

export const expandedAlignmentsMatrix = {
  [ExpandedAlignments.LG]: { x: -2, y: 2 },
  [ExpandedAlignments.SG]: { x: -1, y: 2 },
  [ExpandedAlignments.NG]: { x: 0, y: 2 },
  [ExpandedAlignments.RG]: { x: 1, y: 2 },
  [ExpandedAlignments.CG]: { x: 2, y: 2 },

  [ExpandedAlignments.LM]: { x: -2, y: 1 },
  [ExpandedAlignments.SM]: { x: -1, y: 1 },
  [ExpandedAlignments.NM]: { x: 0, y: 1 },
  [ExpandedAlignments.RM]: { x: 1, y: 1 },
  [ExpandedAlignments.CM]: { x: 2, y: 1 },

  [ExpandedAlignments.LN]: { x: -2, y: 0 },
  [ExpandedAlignments.SN]: { x: -1, y: 0 },
  [ExpandedAlignments.NN]: { x: 0, y: 0 },
  [ExpandedAlignments.RN]: { x: 1, y: 0 },
  [ExpandedAlignments.CN]: { x: 2, y: 0 },

  [ExpandedAlignments.LI]: { x: -2, y: -1 },
  [ExpandedAlignments.SI]: { x: -1, y: -1 },
  [ExpandedAlignments.NI]: { x: 0, y: -1 },
  [ExpandedAlignments.RI]: { x: 1, y: -1 },
  [ExpandedAlignments.CI]: { x: 2, y: -1 },

  [ExpandedAlignments.LE]: { x: -2, y: -2 },
  [ExpandedAlignments.SE]: { x: -1, y: -2 },
  [ExpandedAlignments.NE]: { x: 0, y: -2 },
  [ExpandedAlignments.RE]: { x: 1, y: -2 },
  [ExpandedAlignments.CE]: { x: 2, y: -2 },
};

export const expandedAlignmentsX = {
  [ExpandedAlignmentsX.Lawful]: -2,
  [ExpandedAlignmentsX.Social]: -1,
  [ExpandedAlignmentsX.Neutral]: 0,
  [ExpandedAlignmentsX.Rebel]: 1,
  [ExpandedAlignmentsX.Chaotic]: 2,
};

export const expandedAlignmentsY = {
  [ExpandedAlignmentsY.Good]: 2,
  [ExpandedAlignmentsY.Moral]: 1,
  [ExpandedAlignmentsY.Neutral]: 0,
  [ExpandedAlignmentsY.Impure]: -1,
  [ExpandedAlignmentsY.Evil]: -2,
};

// export the standard array numbers
export const standardArray = [15, 14, 13, 12, 10, 8];
