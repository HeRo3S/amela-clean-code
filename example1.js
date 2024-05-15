const pointToGrade = {
  A: 90,
  B: 80,
  C: 70,
  D: 60,
};

let grade;
const keys = Object.keys(pointToGrade);
for (k in keys) {
  if (score >= pointToGrade[keys]) grade = keys;
  else grade = "F";
}

// if (score >= 90) {
//   grade = 'A';
// } else {
//   if (score >= 80) {
//     grade = 'B';
//   } else {
//     if (score >= 70) {
//       grade = 'C';
//     } else {
//       if (score >= 60) {
//         grade = 'D';
//       } else {
//         grade = 'F';
//       }
//     }
//   }
// }
