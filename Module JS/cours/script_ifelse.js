const age = 17;
const minAge = 18;
// const isOldEnough = age >= minAge

if (age >= minAge) {
  console.log("Ousmane a l'age  pour passer le permis 🚗!");
} else {
  const yearsleft = minAge - age;
  console.log(`Il lui reste ${yearsleft} annees pour passer le permis 🚫`);
}
