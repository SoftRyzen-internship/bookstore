import { Breadcrumbs } from 'components/Breadcrumbs';
import { Container } from 'components/Containers/Container';
import { FlexWrapper } from 'components/Containers/FlexWrapper';
import { OrderForm } from 'components/Forms/OrderForm';
import { FormUser } from 'components/Forms';

import s from './OrderPageComponent.module.scss';

export const OrderPageComponent = () => {
  return (
    <>
      <Container>
        <FlexWrapper>
          <div className={s.wrapperPageForm}>
            <Breadcrumbs />
            <h2 className={s.title}>Оформлення замовлення</h2>
            <FormUser />
            <OrderForm />
          </div>
        </FlexWrapper>
      </Container>
    </>
  );
};
