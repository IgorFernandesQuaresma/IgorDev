import axios from 'axios';

    const api = axios.create({
        baseURL: 'https://api.nasa.gov/planetary'
    });

    const apiKey = 'c4a7ZWfEkm9Ygi7koVtcNnSzAT8Z2vTlclp1LAeY';

    export const buscar = async (url, setDados, headers = {}) => {
        try {
            const resposta = await api.get(`${url}?api_key=${apiKey}`, { headers });
            setDados(resposta.data);
        } catch (error) {
            console.error('Error fetching data from the API:', error);
        }
    };