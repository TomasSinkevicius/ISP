import React from "react";
import styled from "styled-components"

import {useFirebase} from '../../../Context/firebase/FirebaseContext';
import {useHistory} from 'react-router-dom';

const Wrapper = styled.div`
    font-size: 12;
    margin-top: 100px;
    margin-left: 200px;
    margin-right: 200px;
    display: flex;
    flex-direction: column;
    .btn {
        color: black;
        padding: 5px 5px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 12px;
        margin-left: 3px;
        border-width: thin;
    }
    .naudotojas {
        margin-bot: 15px;
    }   
`

const Ban = () => {
    const history = useHistory();
    const {listAllUsers} = useFirebase();
    return (
        <Wrapper>
            <h1>Naudotojų sarašas:</h1>
            <div class="naudotojas">
                tadas.brazaitis@gmail.com
                <button class="btn" onClick={() => {history.push('/admin'); alert("Vartotojas užblokuotas")}}>Užblokuoti</button>
                <button class="btn" onClick={() => {history.push('/admin'); alert("Vartotojas atblokuotas")}}>Atblokuoti</button>
                <button class="btn" onClick={() => {history.push('/admin'); alert("Vartotojas užtildytas")}}>Užtildyti</button>
            </div>
            <div class="naudotojas">
                gedgau@admin.com
                <button class="btn" onClick={() => {history.push('/admin'); alert("Vartotojas užblokuotas")}}>Užblokuoti</button>
                <button class="btn" onClick={() => {history.push('/admin'); alert("Vartotojas atblokuotas")}}>Atblokuoti</button>
                <button class="btn" onClick={() => {history.push('/admin'); alert("Vartotojas užtildytas")}}>Užtildyti</button>
            </div>
            <div class="naudotojas">
                tomas1@gmail.com
                <button class="btn" onClick={() => {history.push('/admin'); alert("Vartotojas užblokuotas")}}>Užblokuoti</button>
                <button class="btn" onClick={() => {history.push('/admin'); alert("Vartotojas atblokuotas")}}>Atblokuoti</button>
                <button class="btn" onClick={() => {history.push('/admin'); alert("Vartotojas užtildytas")}}>Užtildyti</button>
            </div>
            <div class="naudotojas">
                tomas123@gmail.com
                <button class="btn" onClick={() => {history.push('/admin'); alert("Vartotojas užblokuotas")}}>Užblokuoti</button>
                <button class="btn" onClick={() => {history.push('/admin'); alert("Vartotojas atblokuotas")}}>Atblokuoti</button>
                <button class="btn" onClick={() => {history.push('/admin'); alert("Vartotojas užtildytas")}}>Užtildyti</button>
            </div>
            <div class="naudotojas">
                favoritas@test.lt
                <button class="btn" onClick={() => {history.push('/admin'); alert("Vartotojas užblokuotas")}}>Užblokuoti</button>
                <button class="btn" onClick={() => {history.push('/admin'); alert("Vartotojas atblokuotas")}}>Atblokuoti</button>
                <button class="btn" onClick={() => {history.push('/admin'); alert("Vartotojas užtildytas")}}>Užtildyti</button>
            </div>
        </Wrapper>
    )
}

export default Ban;