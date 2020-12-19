import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import Header from '../../Components/Header/header.js';

import FilmuPridejimas from "./Components/FilmuPridejimas";
import FilmuRedagavimas from "./Components/FilmuRedagavimas";
import FilmuIstrinimas from "./Components/FilmuIstrinimas";
import VartotojuUztildymas from "./Components/VartotojuUztildymas";
import VartotojuAtblokavimas from "./Components/VartotojuAtblokavimas";
import VartotojuBlokavimas from "./Components/VartotojuBlokavimas";
import {user, useFirebase} from "../../Context/firebase/FirebaseContext";

import {useHistory} from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    .functions{
        margin-top: 50px;
        margin-left: 200px;
    }
    .aPanel{
        margin-top: 20px;
        font-size: 30px;
        text-align: center;
    }
`
const AdminScreen = () => {
    return (
        <Wrapper>
            <Header/>
            <div className="aPanel">
                Admin panelė
            </div>
            <div className="functions">
                <FilmuPridejimas/>
                <FilmuIstrinimas/>
                <FilmuRedagavimas/>
                <VartotojuBlokavimas/>
                <VartotojuAtblokavimas/>
                <VartotojuUztildymas/>
            </div>
        </Wrapper>
    )
}

export default AdminScreen;