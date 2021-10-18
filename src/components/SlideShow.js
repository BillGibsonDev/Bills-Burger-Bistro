
// styled
import styled from "styled-components";

// router
import { Link } from 'react-router-dom';

// images
import Slider1 from '../images/sliderImage1.jpg';

export default function SlideShow() {

    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("slides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 2000); // Change image every 2 seconds

    }
    return (
        <StyledShow>
            <div className="image-gallery">
                <div className="slides">
                    <div className="slide-text-container">
                        <Link to="/OrderNow">Order</Link>
                    </div>
                    <img src={Slider1} alt="" />
                </div>
                <div className="slides">
                    <div className="slide-text-container">
                        <Link to="/OrderNow">Order</Link>
                    </div>
                    <img src={Slider1} alt="" />
                </div>
                <div className="slides">
                    <div className="slide-text-container">
                        <Link to="/OrderNow">Order</Link>
                    </div>
                    <img src={Slider1} alt="" />
                </div>
            </div>
        </StyledShow>
    )
}

const StyledShow = styled.div`
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