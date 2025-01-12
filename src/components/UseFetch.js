import  { useEffect, useState } from 'react';
import axios from 'axios'; // Assumendo che stai usando Axios per le richieste HTTP.

const useFetch = (url) => {
  const [data, setData] = useState(null); // Per memorizzare i dati.
  const [loading, setLoading] = useState(true); // Stato di caricamento.
  const [error, setError] = useState(null); // Per gestire gli errori.

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url); // Effettua la richiesta.
        setData(response.data); // Imposta i dati ricevuti.
      } catch (err) {
        setError(err); // Imposta l'errore in caso di problemi.
      } finally {
        setLoading(false); // Disabilita il caricamento.
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]); // Esegui ogni volta che l'URL cambia.

  return { data, loading, error }; // Restituisci gli stati.
};

export default useFetch;
