import { useContext, useMemo, useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { FipeContext } from '../contexts/FipeContext';

const Formulario = () => {
  const {
    marcas,
    modelos,
    anos,
    loading,
    erroApi,
    buscarModelos,
    buscarAnos,
    buscarValorFinal,
  } = useContext(FipeContext);

  const [marcaSel, setMarcaSel] = useState('');
  const [modeloSel, setModeloSel] = useState('');
  const [anoSel, setAnoSel] = useState('');
  const [erroValidacao, setErroValidacao] = useState('');

  const azulFipe = '#002f5d';
  const azulClaro = '#00a1df';

  const marcasOrdenadas = useMemo(() => {
    return [...marcas].sort((a, b) => a.nome.localeCompare(b.nome));
  }, [marcas]);

  const formularioCompleto = useMemo(() => {
    return Boolean(marcaSel && modeloSel && anoSel);
  }, [marcaSel, modeloSel, anoSel]);

  const handleMarcaChange = (event) => {
    const marcaId = event.target.value;
    setMarcaSel(marcaId);
    setModeloSel('');
    setAnoSel('');
    setErroValidacao('');

    if (marcaId) {
      buscarModelos(marcaId);
    }
  };

  const handleModeloChange = (event) => {
    const modeloId = event.target.value;
    setModeloSel(modeloId);
    setAnoSel('');
    setErroValidacao('');

    if (modeloId) {
      buscarAnos(marcaSel, modeloId);
    }
  };

  const handleAnoChange = (event) => {
    setAnoSel(event.target.value);
    setErroValidacao('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!marcaSel) {
      setErroValidacao('Selecione uma marca antes de consultar.');
      return;
    }

    if (!modeloSel) {
      setErroValidacao('Selecione um modelo antes de consultar.');
      return;
    }

    if (!anoSel) {
      setErroValidacao('Selecione o ano do veículo antes de consultar.');
      return;
    }

    buscarValorFinal(marcaSel, modeloSel, anoSel);
  };

  return (
    <div className="bg-white p-4 p-md-5 rounded shadow-sm border-0">
      <h4 className="fw-bold mb-4 text-center" style={{ color: azulFipe }}>
        Selecione o Veículo
      </h4>

      {erroValidacao && <Alert variant="warning">{erroValidacao}</Alert>}
      {erroApi && <Alert variant="danger">{erroApi}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-4">
          <Form.Label className="small fw-bold text-uppercase text-muted">1. Marca</Form.Label>
          <Form.Select
            value={marcaSel}
            style={{ borderLeft: `4px solid ${azulClaro}`, borderRadius: '8px' }}
            onChange={handleMarcaChange}
            aria-label="Selecione a marca do veículo"
          >
            <option value="">Selecione a marca...</option>
            {marcasOrdenadas.map((marca) => (
              <option key={marca.codigo} value={marca.codigo}>
                {marca.nome}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label className="small fw-bold text-uppercase text-muted">2. Modelo</Form.Label>
          <Form.Select
            value={modeloSel}
            style={{ borderLeft: `4px solid ${azulClaro}`, borderRadius: '8px' }}
            disabled={!marcaSel || loading || !modelos.length}
            onChange={handleModeloChange}
            aria-label="Selecione o modelo do veículo"
          >
            <option value="">Selecione o modelo...</option>
            {modelos.map((modelo) => (
              <option key={modelo.codigo} value={modelo.codigo}>
                {modelo.nome}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label className="small fw-bold text-uppercase text-muted">3. Ano Modelo</Form.Label>
          <Form.Select
            value={anoSel}
            style={{ borderLeft: `4px solid ${azulClaro}`, borderRadius: '8px' }}
            disabled={!modeloSel || loading || !anos.length}
            onChange={handleAnoChange}
            aria-label="Selecione o ano do veículo"
          >
            <option value="">Selecione o ano...</option>
            {anos.map((ano) => (
              <option key={ano.codigo} value={ano.codigo}>
                {ano.nome}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button
          type="submit"
          className="w-100 fw-bold py-3 mt-2 shadow-sm border-0"
          style={{
            backgroundColor: azulFipe,
            borderRadius: '10px',
            transition: '0.3s',
          }}
          disabled={loading}
          onMouseOver={(event) => {
            event.currentTarget.style.filter = 'brightness(1.2)';
          }}
          onMouseOut={(event) => {
            event.currentTarget.style.filter = 'brightness(1)';
          }}
        >
          {loading ? (
            <>
              <Spinner animation="border" size="sm" className="me-2" />
              CONSULTANDO...
            </>
          ) : formularioCompleto ? (
            'CONSULTAR PREÇO'
          ) : (
            'PREENCHA OS CAMPOS'
          )}
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
