export interface IBasicPattern {
  transform: string;
  d: string;
}

export interface IDecor {
  transform: string;
  d: string;
}
const jacketDecorOne: IDecor[] = [
  {
    transform: "",
    d: "m 91.743955,61.229275 3.774177,7.325722 8.438738,1.174672 -6.106138,5.701748 1.441292,8.051279 -7.548004,-3.801269 -7.547676,3.801269 1.44125,-8.051279 -6.106132,-5.701748 8.43908,-1.174672 3.773511,-7.325722 z",
  },
];

const jacketDecorTwo: IDecor[] = [
  {
    transform: "",
    d: "m 83.832686,61.707868 0.536341,-0.02654 c 0.587035,0.104767 1.337449,-0.02543 1.852697,0.104767 -2.096879,3.558887 -3.980093,7.465284 -2.795223,11.693948 0.100514,0.347511 0.274235,0.687921 0.406185,1.000325 0.302913,0.383011 0.464505,0.83584 0.829423,1.174279 2.148025,2.419556 5.813065,2.967448 9.166646,2.193142 2.419556,-0.53093 4.435226,-2.349345 4.982776,-4.428491 1.02195,-4.115536 -0.91292,-8.117823 -2.94877,-11.606617 l 2.7046,-0.04276 c 2.268769,3.087008 4.203179,6.446382 3.940199,10.396207 -0.2536,3.629336 -2.958609,6.769553 -6.785709,8.265312 -1.873792,0.608633 -2.885899,0.870548 -5.317591,0.783772 -1.213586,-0.175139 -2.632757,-0.260735 -4.020073,-0.844915 -1.924989,-0.852013 -3.889873,-2.209316 -4.982777,-3.836422 -3.342779,-4.793359 -0.921845,-10.701591 2.431276,-14.826",
  },
];

const jacketDecorThree: IDecor[] = [
  {
    transform: "",
    d: "m 95.014773,85.264803 -6.427162,0 0,-26.992555 6.427162,0 0,26.992555 z",
  },
  {
    transform: "",
    d: "m 98.950505,61.78562 0,6.050711 -14.286774,0 0,-6.050711 14.286774,0 z",
  },
  {
    transform: "",
    d: "m 103.37781,75.070208 0,6.015207 -23.294592,0 0,-6.015207 23.294592,0 z",
  },
];

const jacketDecorFour: IDecor[] = [
  {
    transform: "translate(-283.3125,-484.65625)",
    d: "m 383.91715,519.1834 -8.89062,12.97722 -9.35932,-12.97722 9.0613,-13.05207 9.18903,13.05207 z",
  },
  {
    transform: "",
    d: "m 101,75 -8.890617,12.97722 -9.35932,-12.97722 9.0613,-13.05207 9.189027,13.05207 z",
  },
  {
    transform: "",
    d: "m 101,117 -8.890621,12.97722 -9.35932,-12.97722 9.0613,-13.05208 9.189031,13.05208 z",
  },
];

const jacketDecorFive: IDecor[] = [
  {
    transform: "",
    d: "m 97,121 c 0,3.16435 -2.420636,5.72946 -5.405348,5.72946 -2.987481,0 -5.40689,-2.56522 -5.40689,-5.72946 0,-3.16435 2.419358,-5.7289 5.40689,-5.7289 2.984866,0 5.405348,2.56449 5.405348,5.7289 z",
  },
  {
    transform: "",
    d: "m 97,80 c 0,3.16435 -2.420636,5.72946 -5.405348,5.72946 -2.987481,0 -5.40689,-2.56522 -5.40689,-5.72946 0,-3.16435 2.419358,-5.7289 5.40689,-5.7289 2.984866,0 5.405348,2.56449 5.405348,5.7289 z",
  },
  {
    transform: "",
    d: "m 97,39 c 0,3.16435 -2.420636,5.729459 -5.405348,5.729459 -2.987481,0 -5.40689,-2.565219 -5.40689,-5.729459 0,-3.16435 2.419358,-5.7289 5.40689,-5.7289 2.984866,0 5.405348,2.56449 5.405348,5.7289 z",
  },
];

const jacketDecorSix: IDecor[] = [
  {
    transform: "",
    d: "m 86,37 4.18003,-0.168768 1.26373,-3.966055 1.45815,3.881672 4.08282,0.168768 -2.9163,2.700293 0.97209,4.303592 -3.59676,-2.44714 -3.49956,2.278372 1.06931,-4.134824 -3.30513,-2.61591 z",
  },
  {
    transform: "",
    d: "m 86,78 4.18003,-0.16877 1.26373,-3.96605 1.45815,3.88167 4.08282,0.16877 -2.9163,2.70029 0.97209,4.30359 -3.59676,-2.44714 -3.49956,2.27837 1.06931,-4.13482 -3.30513,-2.61591 z",
  },
  {
    transform: "",
    d: "m 86,122 4.180032,-0.16877 1.26373,-3.96605 1.45815,3.88167 4.08282,0.16877 -2.9163,2.70029 0.97209,4.30359 -3.59676,-2.44714 -3.499562,2.27838 1.06931,-4.13483 -3.30513,-2.61591 z",
  },
];

const jacketDecorSeven: IDecor[] = [
  {
    transform: "",
    d: "M 76.015495,8.4171064 C 77.286657,147.73647 77.032424,147.73647 77.032424,147.73647 l -0.254232,0.25423 30.253658,0 -0.25423,-139.3193612 0.76269,0.2542324 z",
  },
];

const jacketDecorEight: IDecor[] = [
  {
    transform: "",
    d: "m 122.68486,10.839626 -0.32847,137.466174 -15.60249,0 0,-140.2581986 c 17.24653,2.8155036 11.53061,1.9229126 15.93096,2.7920246 z",
  },
  {
    transform: "",
    d: "M 57.975578,11.332337 59.946418,148.47004 77.027042,148.14156 75.877385,7.8833647 C 70.7555,8.4362252 66.571725,8.6080633 57.975578,11.332337 Z",
  },
];

const jacketDecorNine: IDecor[] = [
  {
    transform: "",
    d: "m 40.540541,56.538382 c 101.441439,-0.18018 101.441439,-0.18018 101.441439,-0.18018 l -6.66666,32.252252 -88.648653,0 z",
  },
];

const jacketDecorTen: IDecor[] = [
  {
    transform: "",
    d: "m 34.146341,24.457121 c 114.190689,0 114.190689,0 114.190689,0 l -4.65632,22.394679 -105.099779,0 z",
  },
  {
    transform: "",
    d: "m 43.45898,72.128962 95.78714,0 -4.87805,23.059866 -86.031041,0 z",
  },
  {
    transform: "",
    d: "m 53.880266,123.34847 74.944564,0 -5.09977,23.05987 -65.188475,0.22173 z",
  },
];

const jacketVariantTwo: {
  paths: IBasicPattern[],
  decors: IDecor[][];
} = {
  paths: [
    {
      transform: "",
      d: "M 76.015495,8.4171064 C 77.286657,147.73647 77.032424,147.73647 77.032424,147.73647 l -0.254232,0.25423 30.253658,0 -0.25423,-139.3193612 0.76269,0.2542324 z",
    }
  ],
  decors: [jacketDecorOne, jacketDecorTwo, jacketDecorThree, jacketDecorFour, jacketDecorFive, jacketDecorSix],
}

const jacketVariantThree: {
  paths: IBasicPattern[],
  decors: IDecor[][];
} = {
  paths: [
    {
      transform: "",
      d: "m 122.68486,10.839626 -0.32847,137.466174 -15.60249,0 0,-140.2581986 c 17.24653,2.8155036 11.53061,1.9229126 15.93096,2.7920246 z",
    },
    {
      transform: "",
      d: "M 57.975578,11.332337 59.946418,148.47004 77.027042,148.14156 75.877385,7.8833647 C 70.7555,8.4362252 66.571725,8.6080633 57.975578,11.332337 Z",
    },
  ],
  decors: [],
}

const jacketVariantFour: {
  paths: IBasicPattern[],
  decors: IDecor[][];
} = {
  paths: [
    {
      transform: "translate(-283.3125,-484.65625)",
      d: "m 346.99147,494.71879 -5.3682,1.4337 -6.04997,2.11777 7.15386,134.62845 11.7813,-0.12854 -7.38886,-138.53868 z",
    },
    {
      transform: "translate(-283.3125,-484.65625)",
      d: "m 361.8662,493.22414 -2.1736,-0.58424 -2.7466,0.37515 3.5961,139.85267 11.86153,0 -3.72559,-139.1344 z",
    },
    {
      transform: "translate(-283.3125,-484.65625)",
      d: "m 403.74,495.49 6.3305,1.9151 5.215,1.909 -7.97097,133.55267 -11.86153,0.12854 8.2874,-137.51121 z",
    },
    {
      transform: "translate(-283.3125,-484.65625)",
      d: "m 388.09406,493.47414 3.07334,-0.58414 2.7466,0.37446 -3.72603,139.60267 -11.60447,0 3.98397,-139.13146 z",
    },
  ],
  decors: [jacketDecorSeven, jacketDecorEight, jacketDecorNine, jacketDecorTen],
}

// array of basic patterns
export const jacketBasicPatterns = [
  jacketVariantTwo,
  jacketVariantThree,
  jacketVariantFour,
];