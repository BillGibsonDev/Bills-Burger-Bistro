
// styled
import styled from "styled-components"

// router
import { Link } from 'react-router-dom';

// images
import Hamburger from '../images/hamburger.jpg';
import Slider1 from '../images/sliderImage1.jpg';

export default function HomePage() {
    return (
        <StyledHome>
            <div className="hero-wrapper">
                <div className="hero-image-container">
                    <img src={Hamburger} alt="" />
                    <div className="text-container">
                        <h5>Try our Classic Bacon Cheeseburger!</h5>
                        <Link to="/OrderPage" id="order-button">Order Now</Link>
                    </div>
                </div>
                <div className="hero-text-container">
                    <h3>Welcome to</h3>
                    <h2>Bill's Burger Bistro</h2>
                    <h4>We pride ourselves bringing our customers delish, gourmet burgers</h4>
                </div>
            </div>
            <div className="image-gallery">
                <div className="slide">
                    <div className="slide-text-container">
                        <Link to="/OrderNow">Order</Link>
                    </div>
                    <img src={Slider1} alt="" />
                </div>

            </div>
        </StyledHome>
    )
}

const StyledHome = styled.div`
height: 110vh;
display: flex;
flex-direction: column;
    .hero-wrapper{
        display: flex;
        height: 50%;
        width: 100%;
        margin-bottom: 5em;
        .hero-image-container{
            position: static;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 100%;
                height: 100%;
                border-top-left-radius: 12px;
                border-bottom-left-radius: 12px;
            }
            .text-container{
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: center;
                h5 {
                    color: white;
                    font-size: 1.5em;
                    margin-bottom: 10px;
                }
                #order-button{
                    font-size: 1.5em;
                    background: red;
                    border-radius: 8px;
                    padding: 6px 12px;
                    color: white;
                    &:hover{
                        background: black;
                        transition: 0.3s;
                    }
                }
            }
        }
        .hero-text-container{
            position: static;
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            background: lightgray;
            border-top-right-radius: 12px;
            border-bottom-right-radius: 12px;
            h2 {
                font-size: 2.5em;
            }
            h3 {
                color: #3d3d3d;;
                font-size: 1.5em;
            }
            h4 {
                font-size: 1em;
                color: #3d3d3d;
            }
            h2, h3, h4 {
                width: 75%;
                margin: 0 auto;
            }
        }
    }
    .image-gallery{
        
        .slide{
            display: flex;
            .slide-text-container{
                height: 100%;
                width: 50%;
                background: lightcoral;
            }
            img{
                height: 100%;
                width: 50%;
            }
        }
        
    }
`;
