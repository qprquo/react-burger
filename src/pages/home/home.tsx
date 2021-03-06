import React from 'react';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import Col from '../../components/grid/col/col';
import Row from '../../components/grid/row/row';
import Base from '../../components/layout/base/base';
import WithLoader from '../../components/with-loader/with-loader';

const Home: React.FC = () => {
  const isLoading = useSelector((store: any) => store.order.isLoading);

  return (
    <WithLoader isLoading={isLoading}>
      <Base>
        <DndProvider backend={HTML5Backend}>
          <Row>
            <Col mod="6">
              <BurgerIngredients />
            </Col>
            <Col mod="6">
              <BurgerConstructor />
            </Col>
          </Row>
        </DndProvider>
      </Base>
    </WithLoader>
  );
};

export default Home;
