var currentTemplate = 'welcome';


function onLoad(_input, output) {
  output.currentSet = 1;

  output.homeScore = 0;
  output.awayScore = 0;



  output.set1Home = null;
  output.set1Away = null;
  output.set2Home = null;
  output.set2Away = null;
  output.set3Home = null;
  output.set3Away = null;

  output.setsHome = 0;
  output.setsAway = 0;

  output.matchFinished = 0;



  output.lastWinner = -1
}

function onEvent(_input, output, eventId) {
  var setWon = false;
  // ==================================================
  // 1. Modification du score
  // ==================================================

  switch (eventId) {
    case 0:
      //on est sur l'écran d'accueil, on passe au démarrage du jeu
      changeView('t');
      break;

    // +1 HOME
    case 1:

      if (output.matchFinished == 0) {
        output.homeScore++;
        output.lastWinner = 1;
      }
      if ((output.homeScore == 8 && output.awayScore < 8) && output.currentSet == 3) {
        changeView('changeside');
      }
      break;

    // +1 AWAY
    case 2:
      output.lastWinner = 0;

      if (output.matchFinished == 0) {
        output.awayScore++;
      }
      if ((output.awayScore == 8 && output.homeScore < 8) && output.currentSet == 3) {
        changeView('changeside');
      }
      break;

    // -1 HOME
    case 3:
      if (output.matchFinished == 0 &&
        output.homeScore > 0) {
        output.homeScore--;
      }
      break;

    // -1 AWAY
    case 4:
      if (output.matchFinished == 0 &&
        output.awayScore > 0) {
        output.awayScore--;
      }
      break;
    case 5:
      output.matchFinished = 0;

      changeView('t');
      break;
    case 9: //end sed
      output.matchFinished = 0;
      // Nouveau set
      output.homeScore = 0;
      output.awayScore = 0;
      output.currentSet++;
      
      changeView('t');
      break;
    case 10: //cancel last set
      output.matchFinished = 0;

      //on réinit les variables 

      setWon = false;

      if (output.lastWinner == 1) {
        output.homeScore--;
        output.setsHome--;
      }
      else {
        output.awayScore--;
        output.setsAway--;
      }

      if (output.currentSet == 1) {

        output.set1Home = null;
        output.set1Away = null;
      }
      else if (output.currentSet == 2) {

        output.set2Home = null;
        output.set2Away = null;
      }
      else if (output.currentSet == 3) {

        output.set3Home = null;
        output.set3Away = null;
      }

      //output.currentSet--; 

      changeView('t');
      break;
    case 11:
      //clic depuis l'écran de notification changement de coté.
      changeView('t');
      break;
  }


  // ==================================================
  // 2. Vérification de la fin du set
  // ==================================================

  if (output.matchFinished == 0) {




    // ------------------------------------------------
    // Avant 14-14 :
    // premier à 15
    // ------------------------------------------------

    if (output.homeScore >= 15 &&
      output.awayScore <= 13) {

      setWon = true;
      output.lastWinner = 1;
    }

    else if (output.awayScore >= 15 &&
      output.homeScore <= 13) {

      setWon = true;
      output.lastWinner = 0;
    }


    // ------------------------------------------------
    // À partir de 14-14 :
    // 2 points d'écart
    // ou 21 atteint
    // ------------------------------------------------

    else if (output.homeScore >= 14 &&
      output.awayScore >= 14) {

      var difference =
        output.homeScore - output.awayScore;




      // 20-20 : le prochain point gagne
      if (output.homeScore >= 20 &&
        output.awayScore >= 20) {

        if (output.homeScore == 21 ||
          output.awayScore == 21) {

          setWon = true;
        }
      }

      // Sinon : 2 points d'écart
      else if (difference >= 2 ||
        difference <= -2) {

        setWon = true;
      }
    }


    // ==================================================
    // 3. Fin du set
    // ==================================================

    if (setWon) {

      //output.currentSet++;     

      // ----------------------------------------------
      // Enregistrement du score
      // ----------------------------------------------

      if (output.currentSet == 1) {

        output.set1Home = output.homeScore;
        output.set1Away = output.awayScore;

      }
      else if (output.currentSet == 2) {

        output.set2Home = output.homeScore;
        output.set2Away = output.awayScore;
      }
      else if (output.currentSet == 3) {

        output.set3Home = output.homeScore;
        output.set3Away = output.awayScore;
      }



      // ----------------------------------------------
      // Déterminer le vainqueur du set
      // ----------------------------------------------

      if (output.homeScore > output.awayScore) {
        output.setsHome++;
      }
      else {
        output.setsAway++;
      }


      // ----------------------------------------------
      // Match terminé ?
      // ----------------------------------------------

      if (output.setsHome == 2 || output.setsAway == 2) {

        output.matchFinished = 1;
        changeView('endmatch');

      }
      else {

        changeView('endset');
        // setText("#winnerLastSet", "World");
      }


    }
  }
}

var changeView = function (template) {
  currentTemplate = template;
  unload('_cm'); // Unload & reload the screen to run getUserInterface
};

function evaluate(_input, output) {
  //  setText('#lbl-active', output.activeTeam == 0 ? 'HOME' : 'AWAY');
}

// function getUserInterface() {  
//   return { template: 't' ,
//      bottom: { input: '/Activity/Activity/-1/Duration/Current', format: 'Duration_Training' }
//   };
// }

function getUserInterface() {

  return {
    template: currentTemplate,
    bottom: { input: '/Activity/Activity/-1/Duration/Current', format: 'Duration_Training' }
  };

}

function getSummaryOutputs(_input, output) {
  return [
    { id: 'a', name: 'Home wins', format: 'Count_Twodigits', value: output.setsHome },
    { id: 'b', name: 'Away wins', format: 'Count_Twodigits', value: output.setsAway },

  ];
}