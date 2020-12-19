import React from "react";
import styled from "styled-components"
import {useFirebase} from "../../../Context/firebase/FirebaseContext";
const Wrapper = styled.div`
    font-size: 12;
    `
const FilmuIstrinimas = (props) => {
    const { history } = props;
    const {  removeMovie } = useFirebase();

    return (
        <Wrapper>
            <form>
                <p>Filmų ištrinimas</p>
            </form>
        </Wrapper>
    )
}

export default FilmuIstrinimas;