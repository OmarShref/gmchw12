let set1 = [11, 2, 3, 4, 5];
let set2 = [1, 9, 3, 4, 5];
let sum = 0;

for (let i = 0; i <= set1.length - 1; i++) {
  for (let j = 0; j <= set2.length - 1; j++) {
    if (set1[i] == set2[j]) {
      break;
    }
    if (j == set2.length - 1) {
      sum = sum + set1[i];
    }
  }
}
for (let j = 0; j <= set2.length - 1; j++) {
  for (let i = 0; i <= set1.length - 1; i++) {
    if (set2[j] == set1[i]) {
      break;
    }
    if (i == set1.length - 1) {
      sum = sum + set2[j];
    }
  }
}
console.log(`Sum of distinct numbers is : ${sum}`);
