/*
// Tento příkaz je z kurzu Czechitas
console.log('Hello World! Im learning JavaScript');
console.log('Ahoj')
// vytvoření proměnné
let jmeno = 'veronika';
let vek = 29;
let povolani = 'tester';
let vaha = 65
let vyska = 1.73
let bmi = vaha/vyska**2

console.log(jmeno + ' ' + vek + ' ' + povolani);
console.log(vek);
console.log(povolani);

// Ukol 1
console.log('Jmenuji se '+ jmeno + ', je mi ' + vek +', vážím ' + vaha +'kg, měřím ' + vyska + 'm a moje BMI je ' + bmi +'.');

//Ukol2 dobrovolny
let muz = 'Karel'
let zena = 'Anna'
let mesiczeny = 10
let mesicmuze = 5
let rokzeny = 1986
let rokmuze = 1985
let rozdilVeku = ((rokmuze-rokzeny)*-12+(mesiczeny-mesicmuze))

console.log(muz+' a '+zena+' jsou od sebe věkově vzdáleni '+rozdilVeku+' měsíců.')

// Vstup od uživatele
// Jak se máš?
let odpoved = prompt('Ahoj, jak se máš?')
console.log(odpoved);
// Kolik je ti let?
let odpovedCislo = prompt('Kolik je ti let?')
let odpovedJakoCislo = Number(odpovedCislo)
console.log(odpovedJakoCislo);



//Úkol3
let tvojejmeno = prompt('Ahoj, jak se jmenuješ?')
let age = prompt ('Kolik je ti let?')
let ageto = (18-age)
if (age>=18) {
  console.log('Tvoje jméno je '+ tvojejmeno + ' a je ti ' + age +'let. Takže už můžeš řídit! Gratuluji!')
} else {
  console.log('Tvoje jméno je '+ tvojejmeno + ' a je ti ' + age +'let. Takže musíš ještě '+ageto+'let počkat, než budeš moct řídit.')
}
*/
// Cyklus
// while Cyklus - 

// for Cyklus - víme, kolik přesně chceme opakování


//Ukol4
let i = Number(prompt('Napiš číslo'));
let soucet = 0;
while (i !== 0 ) {
  i = Number(prompt('Napiš číslo'))
 soucet = soucet + i;
 console.log('Součet:'+soucet)
}
console.log('Celkový souet:'+soucet) 