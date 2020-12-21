import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    font-size: 12;
    margin-top: 100px;
    margin-left: 200px;
    margin-right: 200px;
    
`

const Edit = (props) => {
    return (
        <Wrapper>
            <form>
                <h1 style={{textAlign: 'center'}}>Filmo pridėjimas</h1>
            </form>
        </Wrapper>
    )
}

export default Edit;