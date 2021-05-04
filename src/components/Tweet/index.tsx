// import { Description } from '@styled-icons/material-outlined';
import React from 'react';
import { 
    Container, 
    Retweeted, 
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon,
 } from './styles';

// import { Container } from './styles';

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <RocketseatIcon />
              Você retueetou
          </Retweeted>

            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>Weslley Hendz</strong>
                        <span>@h_hendz</span>
                        <Dot />
                        <time>30 de abril</time>
                    </Header>
                    <Description>Foguete não tem ré 🚀</Description>
                    <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon />
                          18
                      </Status>
                      <Status>
                          <RetweetIcon />
                          10
                      </Status>
                      <Status>
                          <LikeIcon />
                          10
                      </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
}

export default Tweet;