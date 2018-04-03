(function() {
  var moment = (typeof require !== 'undefined' && require !== null) && !require.amd ? require('moment') : this.moment;

  moment.holidays.poland = {
    "Nowy Rok": {
      date: '1/1'
    },
    "Święto Trzech Króli": {
      date: '1/6'
    },
    "Niedziela Wielkanocna": {
      date: "easter"
    },
    "Drugi dzień Wielkanocy": {
      date: "easter+1"
    },
    "Święto Pracy": {
      date: "5/1"
    },
    "Święto Narodowe Trzeciego Maja": {
      date: "5/3"
    },
    "Zielone Świątki": {
      date: "easter+49"
    },
    "Uroczystość Najświętszego Ciała i Krwi Chrystusa": {
      date: "easter+60"
    },
    "Wniebowzięcie Najświętszej Maryi Panny": {
      date: "8/15"
    },
    "Wszystkich świętych": {
      date: '11/1'
    },
    "Narodowe Święto Niepodległości": {
      date: '11/11'
    },
    "Pierwszy dzień Bożego Narodzenia": {
      date: '12/25'
    },
    "Drugi dzień Bożego Narodzenia": {
      date: '12/26'
    }
  };
  if ((typeof module !== 'undefined' && module !== null ? module.exports : void 0) != null) { module.exports = moment; }
}).call(this);
