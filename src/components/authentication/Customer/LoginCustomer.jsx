import React, { Fragment } from 'react';
import { FormSeller } from '../../ui/Forms';
import { BtnSendData } from '../../ui/Buttons';
import { FormGroup, Row } from 'react-bootstrap';
import { BFoodSubTitle, BFoodTitle } from '../../ui/Texts';
import { ContentInputText, InputText } from '../../ui/Fields';

import { ImageSvg } from '../../ui/Images';
import perfilImg from '../../../assets/img/Form/avatar.svg';
import password1Img from '../../../assets/img/Form/pass_1.svg';

import styled from '@emotion/styled';

const ContainerSignIn = styled.div`
  background-color: var(--custom-blue);
  height: 69vh;
  width: 100vw !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginCustomer = () => {
  return (
    <Fragment>
      <ContainerSignIn>
        <Row className="justify-content-center align-items-center p-2 col-12">
          <FormSeller customMaxWidth="45rem" className="col-sm-12 py-4 px-1">
            <div className="col-sm-12 d-flex justify-content-between align-items-center mt-2">
              <BFoodSubTitle customSize="18pt">Único</BFoodSubTitle>

              <BFoodTitle className="ml-3">BFood</BFoodTitle>

              <BFoodSubTitle customSize="18pt">Especial</BFoodSubTitle>
            </div>

            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-10 m-auto">
                <ImageSvg
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                  src={perfilImg}
                />

                <InputText
                  className="col-10 text-left"
                  type="text"
                  placeholder="INGRESE SU USUARIO"
                  name="username"
                />
              </ContentInputText>
            </FormGroup>

            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-10 m-auto">
                <ImageSvg
                  customWidth="2rem"
                  customHeight="2rem"
                  className="ml-1"
                  src={password1Img}
                />

                <InputText
                  className="col-10 text-left"
                  type="password"
                  placeholder="INGRESE SU CONTRASEÑA"
                  name="password"
                />
              </ContentInputText>
            </FormGroup>

            <div className="row col-10 m-auto justify-content-around align-items-center py-2 px-0">
              <BtnSendData className="mt-2 col-5">INGRESAR</BtnSendData>
            </div>
          </FormSeller>
        </Row>
      </ContainerSignIn>
    </Fragment>
  );
};

export default LoginCustomer;
