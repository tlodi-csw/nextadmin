"use client"
const SingleScheda = async () => {
  
  const scheda =JSON.parse(` {
    "Title": "Scheda Tom",
    "data": "01/01/2024",
    "tipo": "Ipertrofia",
    "Giorni": [
      {
        "descr": "Gambe e dorso",
        "esercizi": [
          {
            "nome": "leg extentions",
            "ripetizioni": "3x8",
            "recupero": "1.30"
          },
          {
            "nome": "trazioni",
            "ripetizioni": "3x10",
            "recupero": "1.30"
          },
          {
            "nome": "squat",
            "ripetizioni": "3x8",
            "recupero": "1.30"
          },
          {
            "nome": "Rematore",
            "ripetizioni": "3x10",
            "recupero": "1.30"
          }
        ]
      },
      {
        "descr": "Petto e bicipiti",
        "esercizi": [
          {
            "nome": "Spinte",
            "ripetizioni": "3x8",
            "recupero": "1.30"
          },
          {
            "nome": "manubri",
            "ripetizioni": "3x10",
            "recupero": "1.30"
          },
          {
            "nome": "Macchina",
            "ripetizioni": "3x8",
            "recupero": "1.30"
          },
          {
            "nome": "panca piana",
            "ripetizioni": "3x10",
            "recupero": "1.30"
          }
        ]
      }
    ]
  }`);
  var giorni = scheda.Giorni;
  
  console.log(scheda);
  console.log(giorni);
  return <div>
    
  </div>;
};

export default SingleScheda;
