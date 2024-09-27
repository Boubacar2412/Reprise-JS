'use strict';

// Création des comptes utilisateurs
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1.0,
  pin: 4444,
};

// Tableau contenant tous les comptes
const accounts = [account1, account2, account3, account4];

// Sélection des éléments du DOM
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let currentAccount;

// 🖱️ Gestionnaire d'événements pour la connexion
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  // Trouver l'utilisateur dans le tableau des comptes
  currentAccount = accounts.find(
    acc => acc.owner.toLowerCase() === inputLoginUsername.value.toLowerCase()
  );

  // Vérifier si le code PIN correspond
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Afficher un message de bienvenue
    labelWelcome.textContent = `Bienvenue, ${
      currentAccount.owner.split(' ')[0]
    }`;

    // Réinitialiser les champs de saisie
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Afficher les mouvements (Phase 2)
    displayMovements(currentAccount.movements, currentAccount.mouvementsDates);

    // Calculer et afficher le solde (Phase 3)
    calcDisplayBalance(currentAccount);

    // Calculer et afficher le résumé des transactions (Phase 3)
    calcDisplaySummary(currentAccount);
  } else {
    labelWelcome.textContent = 'Nom d’utilisateur ou PIN incorrect';
  }
});

// 🖱️ Gestionnaire d'événements pour le transfert d'argent
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); // Empêche la soumission du formulaire

  // Récupérer le montant et le destinataire
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.owner === inputTransferTo.value);

  // Réinitialiser les champs du formulaire après saisie
  inputTransferAmount.value = inputTransferTo.value = '';

  // Vérification des conditions de transfert
  if (
    amount > 0 && // Le montant doit être supérieur à 0
    receiverAcc && // Le destinataire doit exister
    currentAccount.balance >= amount && // L'utilisateur doit avoir assez de fonds
    receiverAcc?.owner !== currentAccount.owner // Ne pas transférer à soi-même
  ) {
    const now = new Date(); // retourn la date actuelle

    // Ajouter un mouvement négatif à l'utilisateur (expéditeur)
    currentAccount.movements.push(-amount);
    currentAccount.mouvementsDates.push(now);

    // Ajouter un mouvement positif au destinataire
    receiverAcc.movements.push(amount);
    receiverAcc.mouvementsDates.push(now);

    // Mettre à jour l'interface de l'utilisateur
    displayMovements(currentAccount.movements, currentAccount.mouvementsDates);
    calcDisplayBalance(currentAccount);
    calcDisplaySummary(currentAccount);

    // (Optionnel) Afficher un message de confirmation
    alert('Transfert réussi !');
  } else {
    // Si une condition échoue, afficher un message d'erreur
    alert('Transfert échoué. Vérifiez votre solde ou le destinataire.');
  }
});

// 🖱️ Gestionnaire d'événements pour la demande de prêt
btnLoan.addEventListener('click', function (e) {
  e.preventDefault(); // Empêche la soumission du formulaire

  const amount = Number(inputLoanAmount.value);
  if (!isNaN(amount)) {
    console.log(`Le montant est un nombre valide: ${amount}`);
  } else {
    console.log('Erreur: Montant non valide');
  }

  const roundedAmount = Math.round(amount * 100) / 100; // Arrondir a deux decimales
  console.log(`Montant arrondi : ${roundedAmount}`);

  // Réinitialiser le champ après soumission
  inputLoanAmount.value = '';

  // Vérification : l'utilisateur doit avoir un dépôt d'au moins 10 % du montant demandé
  if (
    roundedAmount > 0 &&
    currentAccount.movements.some(mov => mov >= roundedAmount * 0.1)
  ) {
    const now = new Date();
    // Ajouter le montant du prêt aux mouvements de l'utilisateur
    currentAccount.movements.push(roundedAmount);
    currentAccount.mouvementsDates.push(now);

    // Mettre à jour les mouvements, le solde et le résumé
    displayMovements(currentAccount.movements, currentAccount.mouvementsDates);
    calcDisplayBalance(currentAccount);
    calcDisplaySummary(currentAccount);

    // Message de confirmation
    alert('Prêt accordé !');
  } else {
    // Message d'erreur en cas d'échec
    alert(
      'Demande de prêt refusée. Vous devez avoir un dépôt d’au moins 10 % du montant demandé.'
    );
  }
});

// 🖱️ Gestionnaire d'événements pour la clôture de compte
btnClose.addEventListener('click', function (e) {
  e.preventDefault(); // Empêche la soumission du formulaire

  // Vérifier que le nom d'utilisateur et le PIN sont corrects
  if (
    inputCloseUsername.value === currentAccount.owner &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(acc => acc.owner === currentAccount.owner);

    // Supprimer le compte de la liste
    accounts.splice(index, 1);

    // Masquer l'interface utilisateur (déconnexion)
    containerApp.style.opacity = 0;

    // Réinitialiser les champs du formulaire
    inputCloseUsername.value = inputClosePin.value = '';

    // Afficher un message de confirmation
    alert('Votre compte a été supprimé avec succès.');
  } else {
    // Si les informations sont incorrectes, afficher un message d'erreur
    alert('Nom d’utilisateur ou code PIN incorrect.');
  }
});

// Réinitialiser le timer à chaque interaction
const resetTimer = function () {
  if (timer) clearInterval(timer); // Effacer le timer existant
  startLogoutTimer(); // Redémarrer le timer
};

//  Événements à surveiller pour réinitialiser le timer
containerApp.addEventListener('click', resetTimer);
containerApp.addEventListener('mousemove', resetTimer);
containerApp.addEventListener('keydown', resetTimer);

//  Démarrer le timer au moment de la connexion
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    startLogoutTimer(); // Démarrer le timer pour la déconnexion automatique
  }
});

// Fonction pour afficher les mouvements
const displayMovements = function (movements, dates = [], sort = false) {
  // Vider le conteneur avant d'afficher les nouveaux mouvements
  containerMovements.innerHTML = '';

  // Si le tri est activé, trier les mouvements par montant
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  // Parcourir chaque mouvement et l'afficher
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'dépôt' : 'retrait';
    const date = dates[i] ? new Date(dates[i]) : new Date();

    const displayDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
        </div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov}GNF</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Variable pour suivre l'état de tri
let sorted = false;

// Gestionnaire d'événements pour le tri des mouvements
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  // Inverser l'état de tri
  displayMovements(
    currentAccount.movements,
    currentAccount.mouvementsDates,
    !sorted
  );
  sorted = !sorted;
});

// Fonction pour calculer et afficher le solde total
const calcDisplayBalance = function (acc) {
  // Utilisation de reduce() pour calculer le solde
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // Affichage du solde dans l'élément labelBalance
  labelBalance.textContent = `${acc.balance}€`;
};

// Fonction pour calculer et afficher le résumé des transactions
const calcDisplaySummary = function (acc) {
  // Calcul des entrées (dépôts)
  const incomes = acc.movements
    .filter(mov => mov > 0) // Filtrer les dépôts
    .reduce((acc, mov) => acc + mov, 0); // Additionner les dépôts
  labelSumIn.textContent = `${incomes}€`;

  // Calcul des sorties (retraits)
  const out = acc.movements
    .filter(mov => mov < 0) // Filtrer les retraits
    .reduce((acc, mov) => acc + mov, 0); // Additionner les retraits
  labelSumOut.textContent = `${Math.abs(out)}€`; // Afficher les retraits en valeur absolue

  // Calcul des intérêts
  const interest = acc.movements
    .filter(mov => mov > 0) // Filtrer les dépôts
    .map(deposit => (deposit * acc.interestRate) / 100) // Calculer les intérêts sur chaque dépôt
    .filter(int => int >= 1) // Ne conserver que les intérêts supérieurs à 1 euro
    .reduce((acc, int) => acc + int, 0); // Additionner les intérêts
  labelSumInterest.textContent = `${interest}€`;
};

let timer; // Variable pour stocker le compte à rebours

// Fonction pour démarrer le compte à rebours
const startLogoutTimer = function () {
  let time = 300; // Temps en secondes (5 minutes)

  // Fonction qui décrémente le temps et met à jour l'affichage du timer
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');

    // Afficher le temps restant dans l'interface
    labelTimer.textContent = `${min}:${sec}`;

    // Déconnexion automatique lorsque le temps atteint zéro
    if (time === 0) {
      clearInterval(timer);
      alert('Vous avez été déconnecté(e) pour cause d’inactivité.');

      // Masquer l'interface de l'application
      containerApp.style.opacity = 0;

      // Réinitialiser les champs
      inputLoginUsername.value = inputLoginPin.value = '';
    }

    // Décrémenter le temps
    time--;
  };

  // Exécuter la fonction tick toutes les secondes
  tick(); // Appeler immédiatement pour afficher la première mise à jour
  timer = setInterval(tick, 1000); // Appeler tick toutes les 1 seconde
};
