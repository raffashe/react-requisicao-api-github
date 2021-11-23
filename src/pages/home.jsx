import React, { useContext } from 'react';
import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPicture from '../components/userPicture';
import UserDetails from '../components/userDetails';
import UserNumbers from '../components/userNumbers';

import { context } from '../context';


export default function Home() {
    const ctx = useContext(context);

    return (
        <Container>
            <Header />
            <UserContainer>
                <UserPicture url={ctx.userData?.avatar_url} alternative={ctx.userData?.login} />
                <UserDetails name={ctx.userData?.name} login={ctx.userData?.login} bio={ctx.userData?.bio} />
                <UserNumbers repos={ctx.userData?.public_repos} followers={ctx.userData?.followers} following={ctx.userData?.following} />
            </UserContainer>
        </Container>
    );
}