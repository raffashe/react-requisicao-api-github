import React, { useState, useContext } from 'react';
import { FiSearch } from 'react-icons/fi';

import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';

import client from '../../services/client';
import { context } from '../../context';

const Header = () => {
    const ctx = useContext(context);
    const [searchedValue, setSearchedValue ] = useState('');

    async function getUserData(){
        try{
            const response = await client.get(`/${searchedValue}`);
            const repos = await client.get(`/${searchedValue}/repos`)
            
            ctx.setUserData(response.data);
            ctx.setRepos(repos.data);
        } catch(err) {
                console.log(err)
            }
    }
    
    return (
    <HeaderSection>
        <HeaderTitle>Github Profile</HeaderTitle>
        <HeaderInputContainer>
            <HeaderInput value={searchedValue} onChange={e => setSearchedValue(e.target.value)} />
            
            <HeaderSearchButton onClick={getUserData} >
                <FiSearch size={15} />
            </HeaderSearchButton>
        </HeaderInputContainer>
    </HeaderSection>
            );

    }

export default Header;