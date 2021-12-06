import React, { useState } from "react";
import "./components/styles.css";

const INITIAL_STATE = [
  { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
  { id: 2, baslik: "Fatura ode", tamamlandi: true }
];

export default function App() {
  const [liste, setListe] = useState(INITIAL_STATE);
  const [yeniBaslik, setYeniBaslik] = useState('');

  console.log ("Yeni Baslik: " , yeniBaslik);
  return (
    <div className="App">
      <h1>Alışveriş Listesi</h1>
      <div className="ekleme_formu">
        <input
         value= {yeniBaslik} 
         onChange={(event) => setYeniBaslik(event.target.value)}   placeholer="listeye ekle" />
        <button 
        onClick={() => 
          {
        setListe([
          ...liste, 
          {id: Date.now(), baslik: yeniBaslik, completed: false}
          ]);
          setYeniBaslik("");
        }
          }
          >
            Ekle
            </button>
      </div>
      <div className="liste">
        {liste.map(item => (
          <div
          key={item.id}
           onClick={() => {
            setListe(liste.map(eleman => eleman.id === item.id ? {...eleman, tamamlandi: !eleman.tamamlandi} : eleman))
          }}  className={item.tamamlandi ? "yapildi" : ""}>{item.baslik}</div>
        ))}
        
      </div>
      <button onClick={() => setListe(liste.filter(item => !item.tamamlandi))}
      className="temizle">Alınanları Temizle</button>
    </div>
  );
}
