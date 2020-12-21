import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    font-size: 12;
    margin-top: 100px;
    margin-left: 200px;
    margin-right: 200px;
    `
const AddMovie = () => {
    return (
        <Wrapper>
            <h1 style={{textAlign: 'center'}}>Filmo pridėjimas</h1>
            <form class="forma">
                <label for="adult">Filmo suagusiems: </label>
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
                <input style={{width: '400px', height: '100px', marginTop: '10px'}}type="text" placeholder="Filmo aprašymas"/>
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
                <input type="submit" value="Pridėti filmą"/>
            </form>
        </Wrapper>
    )
}

export default AddMovie;