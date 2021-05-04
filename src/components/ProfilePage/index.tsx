import React from 'react';
import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <>
      <Container>
        <Banner>
          <Avatar />
        </Banner>
        <ProfileData>
          <EditButton outlined>Editar Perfil</EditButton>
          <h1>Weslley Hendz</h1>
          <h2>@h_hendz</h2>

          <p>
            
            Developer at <a>@hendz</a>
          </p>

          <ul>
            <li>
              <LocationIcon />
              Porto Alegre, Brasil
            </li>
            <li>
              <CakeIcon />
              Nascido(a) em 24/09/1996
            </li>
          </ul>
          <Followage>
            <span>
              seguindo<strong>94</strong>
            </span>
            <span>
              <strong>1999 </strong> seguidores
            </span>
          </Followage>
        </ProfileData>
        <Feed />
      </Container>
    </>
  );
};

export default ProfilePage;
