import { useContext } from 'react';
import { Badge, Card, ListGroup } from 'react-bootstrap';
import { FipeContext } from '../contexts/FipeContext';

const Resultado = () => {
  const { resultado } = useContext(FipeContext);

  if (!resultado) return null;

  const azulFipe = '#002f5d';
  const verdeDestaque = '#00a38c';

  return (
    <Card className="mt-4 border-0 shadow-sm overflow-hidden" style={{ borderRadius: '15px' }}>
      <Card.Header className="text-white text-center py-3 border-0" style={{ backgroundColor: azulFipe }}>
        <h5 className="mb-0 fw-bold">Resultado da Consulta</h5>
      </Card.Header>

      <Card.Body className="p-4 text-center">
        <h3 className="fw-bold mb-2" style={{ color: azulFipe }}>
          {resultado.Marca} {resultado.Modelo}
        </h3>

        <Badge pill bg="secondary" className="mb-4 px-3 py-2">
          Ano Modelo: {resultado.AnoModelo}
        </Badge>

        <div
          className="py-3 px-4 mx-auto mb-4 rounded-pill d-inline-block shadow-sm"
          style={{ backgroundColor: verdeDestaque }}
        >
          <h2 className="display-5 fw-bold mb-0 text-white">{resultado.Valor}</h2>
        </div>

        <ListGroup variant="flush" className="text-start mt-2">
          <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 border-bottom px-0">
            <span className="text-muted fw-bold">Código Fipe</span>
            <span>{resultado.CodigoFipe}</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 border-bottom px-0">
            <span className="text-muted fw-bold">Combustível</span>
            <span>{resultado.Combustivel}</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 px-0">
            <span className="text-muted fw-bold">Mês de Referência</span>
            <span>{resultado.MesReferencia}</span>
          </ListGroup.Item>
        </ListGroup>

        <p className="mt-3 mb-0 text-muted" style={{ fontSize: '0.75rem' }}>
          *Preço médio de mercado na data da consulta.
        </p>
      </Card.Body>
    </Card>
  );
};

export default Resultado;
