import React from "react";
import styled from "styled-components"

import {useHistory} from 'react-router-dom';

const Wrapper = styled.div`
    font-size: 12;
    margin-top: 100px;
    margin-left: 200px;
    margin-right: 200px;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    input[type=text], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    .btn{
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .btn:hover {
        background-color: #45a049;
        opacity: 1.2;
}

}
    `
const AddMovie = () => {
    const history = useHistory();
    return (
        <Wrapper>
            <h1 style={{textAlign: 'center'}}>Filmo pridėjimas</h1>
            <form class="forma">
                <input type="text" placeholder="doc id"/>
                <br/>
                <label for="adult">Filmas suagusiems: </label>
                <select id="adult" name="adult">
                    <option value="true">Taip</option>
                    <option value="false">Ne</option>
                </select>
                <br/>
                <input type="text" placeholder="Nuotraukos nuoroda"/>
                <br/>
                <input type="text" placeholder="nuoroda"/>
                <br/>
                <input type="text" placeholder="zanro id"/>
                <br/>
                <input type="text" placeholder="id"/>
                <br/>
                <input type="text" placeholder="kaina taskais"/>
                <br/>
                <label for="lang">Filmo kalba: </label>
                <select id="lang" name="lang">
                    <option value="en">Anglų kalba</option>
                    <option value="lt">Lietuvių kalba</option>
                    <option value="rus">Rusų kalba</option>
                </select>
                <br/>
                <input type="text" placeholder="Pilnas pavadinimas"/>
                <br/>
                <input type="text" placeholder="Filmo aprašymas"/>
                <br/>
                <input type="text" placeholder="Populiarumas"/>
                <br/>
                <input type="text" placeholder="Posterio nuoroda"/>
                <br/>
                <input type="text" placeholder="nuoroda"/>
                <br/>
                <input type="text" placeholder="Išleidimo data"/>
                <br/>
                <input type="text" placeholder="Pavadinimas"/>
                <br/>
                <input type="text" placeholder="Anonso nuoroda"/>
                <br/>
                <label for="video">video: </label>
                <select id="video" name="video">
                    <option value="true">Taip</option>
                    <option value="false">Ne</option>
                </select>
                <br/>
                <input type="text" placeholder="Filmo ivertinimas"/>
                <br/>
                <input type="text" placeholder="Balsavimu skaicius"/>
                <br/>
                <input class="btn" type="submit" value="Pridėti filmą" onClick={() => {history.push('/admin'); alert("Filmas pridėtas")}}/>
            </form>
        </Wrapper>
    )
}

export default AddMovie;