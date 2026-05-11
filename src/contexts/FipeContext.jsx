import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const FipeContext = createContext();

const API_BASE = 'https://parallelum.com.br/fipe/api/v1/carros';

export const FipeProvider = ({ children }) => {
  const [marcas, setMarcas] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [anos, setAnos] = useState([]);
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erroApi, setErroApi] = useState('');

  useEffect(() => {
    const buscarMarcas = async () => {
      try {
        setLoading(true);
        setErroApi('');
        const resposta = await axios.get(`${API_BASE}/marcas`);
        setMarcas(resposta.data);
      } catch (error) {
        console.error('Erro ao buscar marcas:', error);
        setErroApi('Não foi possível carregar as marcas. Verifique sua internet e tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    buscarMarcas();
  }, []);

  const buscarModelos = async (marcaId) => {
    if (!marcaId) return;

    try {
      setLoading(true);
      setErroApi('');
      setModelos([]);
      setAnos([]);
      setResultado(null);

      const resposta = await axios.get(`${API_BASE}/marcas/${marcaId}/modelos`);
      setModelos(resposta.data.modelos || []);
    } catch (error) {
      console.error('Erro ao buscar modelos:', error);
      setErroApi('Não foi possível carregar os modelos dessa marca. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const buscarAnos = async (marcaId, modeloId) => {
    if (!marcaId || !modeloId) return;

    try {
      setLoading(true);
      setErroApi('');
      setAnos([]);
      setResultado(null);

      const resposta = await axios.get(`${API_BASE}/marcas/${marcaId}/modelos/${modeloId}/anos`);
      setAnos(resposta.data || []);
    } catch (error) {
      console.error('Erro ao buscar anos:', error);
      setErroApi('Não foi possível carregar os anos desse modelo. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const buscarValorFinal = async (marcaId, modeloId, anoId) => {
    if (!marcaId || !modeloId || !anoId) return;

    try {
      setLoading(true);
      setErroApi('');
      setResultado(null);

      const resposta = await axios.get(`${API_BASE}/marcas/${marcaId}/modelos/${modeloId}/anos/${anoId}`);
      setResultado(resposta.data);
    } catch (error) {
      console.error('Erro ao buscar valor final:', error);
      setErroApi('Não foi possível consultar o valor do veículo. Revise os dados e tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FipeContext.Provider
      value={{
        marcas,
        modelos,
        anos,
        resultado,
        loading,
        erroApi,
        buscarModelos,
        buscarAnos,
        buscarValorFinal,
      }}
    >
      {children}
    </FipeContext.Provider>
  );
};
