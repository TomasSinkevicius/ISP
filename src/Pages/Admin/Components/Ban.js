import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    font-size: 12;
    margin-top: 100px;
    margin-left: 200px;
    margin-right: 200px;
    display: flex;
    flex-direction: column;
    .naudotojas{
        
    }
    
`

const Ban = () => {
    return (
        <Wrapper>
            <h1>Naudotojų sarašas: </h1>
            <div class="naudotojas">
                tadas.brazaitis@gmail.com
                <button> Užblokuoti </button>
                <button> Atblokuoti </button>
                <button> Užtildyti </button>
            </div>
        </Wrapper>
    )
}

export default Ban;