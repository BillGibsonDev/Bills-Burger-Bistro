
// styled
import styled from 'styled-components';

// router
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <StyledNav>
            <h3>Bill's Burger Bistro</h3>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/AboutPage">About</Link>
                <Link to="/OrderPage" id="order-button">Order Now</Link>
            </nav>
        </StyledNav>
    )
}

const StyledNav = styled.div`
height: 10vh;
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
    h3{
        font-size: 2em;
        color: red;
        text-shadow: 1px 1px #00000068;
        font-family: 'Lobster', cursive;
        letter-spacing: 1px;
    }
    nav{
        display: flex;
        justify-content: space-between;
        width: 45%;
        a {
            font-size: 1.5em;
            color: white;
            text-shadow: 1px 1px #00000068;
            &:hover {
                color: lightgray;
                transform: scale(1.1);
                transition: 0.3s;
            }
        }
        #order-button{
            background: red;
            border-radius: 8px;
            padding: 0 12px;
            &:hover{
                background: #313131;
                transition: 0.3s;
            }
        }
    }

`;