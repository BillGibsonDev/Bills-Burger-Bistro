
// styled
import styled from "styled-components"

// buns
import BottomBun from '../itemImages/buns/bottomBunWhite.png';
import TopBun from '../itemImages/buns/topBunWhite.png';

// meat
import Hamburger from '../itemImages/meat/hamburger.png';


// bevs
import Pepsi from '../itemImages/beverages/pepsiBottle.png';
import Sprite from '../itemImages/beverages/sprite.png';
import RootBeer from '../itemImages/beverages/rootBeer.png';
// sides
import Chips from '../itemImages/sides/chips.png';
import Fries from '../itemImages/sides/fries.png';
import Cole from '../itemImages/sides/cole.png';

// toppings
import American from '../itemImages/toppings/triangle.png';

// condiments

export default function OrderPage() {

    function openTab(e, tab) {
        let i, tabcontent, tablinks;
      
        tabcontent = document.getElementsByClassName("tabContent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        tablinks = document.getElementsByClassName("tabLinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        document.getElementById(tab).style.display = "block";
        e.currentTarget.className += " active";
    }

    function showBun(e, bun) {
        let i, bunChoice, buns;
      
       bunChoice = document.getElementsByClassName("bunChoice");
        for (i = 0; i < bunChoice.length; i++) {
            bunChoice[i].style.display = "none";
        }
      
        buns = document.getElementsByClassName("bun");
        for (i = 0; i < buns.length; i++) {
            buns[i].className = buns[i].className.replace(" active", "");
        }
      
        document.getElementsByClassName(bun)[0].style.display = "block";
        document.getElementsByClassName(bun)[1].style.display = "block";
        e.currentTarget.className += " active";

        e.preventDefault();
    }

    function showMeat(e, meat) {
        let i, meatChoice, meats;
      
        meatChoice = document.getElementsByClassName("meatChoice");
        for (i = 0; i < meatChoice.length; i++) {
            meatChoice[i].style.display = "none";
        }
      
        meats = document.getElementsByClassName("meat");
        for (i = 0; i < meats.length; i++) {
            meats[i].className = meats[i].className.replace(" active", "");
        }
      
        document.getElementById(meat).style.display = "block";
        e.currentTarget.className += " active";

        e.preventDefault();
    }

    function showTopping(e, topping) {
        let i, toppingChoice, toppings;
      
        toppingChoice = document.getElementsByClassName("toppingChoice");
        for (i = 0; i <toppingChoice.length; i++) {
            toppingChoice[i].style.display = "none";
        }
      
        toppings = document.getElementsByClassName("topping");
        for (i = 0; i < toppings.length; i++) {
            toppings[i].className = toppings[i].className.replace(" active", "");
        }
      
        document.getElementById(topping).style.display = "block";
        e.currentTarget.className += " active";

        e.preventDefault();
    }

    function showCondiment(e, condiment) {
        let i, condimentChoice, condiments;
      
        condimentChoice = document.getElementsByClassName("condimentChoice");
        for (i = 0; i <condimentChoice.length; i++) {
            condimentChoice[i].style.display = "none";
        }
      
        condiments = document.getElementsByClassName("condiment");
        for (i = 0; i < condiments.length; i++) {
            condiments[i].className =condiments[i].className.replace(" active", "");
        }
      
        document.getElementById(condiment).style.display = "block";
        e.currentTarget.className += " active";

        e.preventDefault();
    }


    function showSides(e, side) {
        let i, sideChoice, sides;
      
       sideChoice = document.getElementsByClassName("sideChoice");
        for (i = 0; i < sideChoice.length; i++) {
            sideChoice[i].style.display = "none";
        }
      
        sides = document.getElementsByClassName("side");
        for (i = 0; i < sides.length; i++) {
            sides[i].className = sides[i].className.replace(" active", "");
        }
      
        document.getElementById(side).style.display = "block";
        e.currentTarget.className += " active";

        e.preventDefault();
    }

    function showBeverage(e, bev) {
        let i, bevChoice, bevs;
      
       bevChoice = document.getElementsByClassName("bevChoice");
        for (i = 0; i < bevChoice.length; i++) {
          bevChoice[i].style.display = "none";
        }
      
        bevs = document.getElementsByClassName("bev");
        for (i = 0; i < bevs.length; i++) {
          bevs[i].className = bevs[i].className.replace(" active", "");
        }
      
        document.getElementById(bev).style.display = "block";
        e.currentTarget.className += " active";

        e.preventDefault();
    }


    return (
        <StyledOrderPage>
            <div className="create-container">
                <h1>Create Your Burger!</h1>
                <div className="tabs">
                    <button className="tabLinks"  id="defaultOpen" onClick={(e) => openTab(e, 'Buns')}>Bun</button>
                    <button className="tabLinks" onClick={(e) => openTab(e, 'Meat')}>Meat</button>
                    <button className="tabLinks" onClick={(e) => openTab(e, 'Toppings')}>Toppings</button>
                    <button className="tabLinks" onClick={(e) => openTab(e, 'Condiments')}>Condiments</button>
                    <button className="tabLinks" onClick={(e) => openTab(e, 'Sides')}>Sides</button>
                    <button className="tabLinks" onClick={(e) => openTab(e, 'Beverages')}>Beverage</button>
                </div>
                <div className="tabContent" id="Buns">
                    <h1>Pick your Bun!</h1>
                    <label>White
                        <input type="checkbox" name="White" id="White" onClick={(e) =>{showBun(e, "white")}}/>
                    </label>
                    <label>Wheat
                        <input type="checkbox" name="Wheat" id="Wheat" onClick={(e) =>{showBun(e, "wheat")}}/>
                    </label>
                    <label>Brioche
                        <input type="checkbox" name="Brioche" id="Brioche" onClick={(e) =>{showBun(e, "brioche")}}/>
                    </label>
                </div>
                <div className="tabContent" id="Meat">
                    <h1>Choose your Meat!</h1>
                    <label>Hamburger
                        <input type="checkbox" name="Hamburger" id="Hamburger" onClick={(e) =>{showMeat(e, "hamburger")}}/>
                    </label>
                    <label>Turkey Burger
                        <input type="checkbox" name="Turkey" id="Turkey" />
                    </label>
                    <label>Chicken Cutlet
                        <input type="checkbox" name="Chicken" id="Chicken" />
                    </label>
                </div>
                <div className="tabContent" id="Condiments">
                    <h1>Add Condiments!</h1>
                    <label>Ketchup
                        <input type="checkbox" name="Ketchup" id="Ketchup" />
                    </label>
                    <label>Mustard
                        <input type="checkbox" name="Mustard" id="Mustard" />
                    </label>
                    <label>Mayo
                        <input type="checkbox" name="Mayo" id="Mayo" />
                    </label>
                    <label>BBQ Sauce
                        <input type="checkbox" name="BBQ" id="BBQ" />
                    </label>
                </div>
                <div className="tabContent" id="Toppings">
                    <h1>Add your Toppings!</h1>
                    <label>Lettuce
                        <input type="radio" name="Lettuce" id="Lettuce" />
                    </label>
                    <label>Tomatoe
                        <input type="radio" name="Tomatoe" id="Tomatoe" />
                    </label>
                    <label>Onions
                        <input type="radio" name="Onions" id="Onions" />
                    </label>
                    <label>Bacon
                        <input type="radio" name="Bacon" id="Bacon" />
                    </label>
                    <label>American Cheese
                        <input type="radio" name="American" id="American" onClick={(e) =>{showTopping(e, "american")}}/>
                    </label>
                </div>
                <div className="tabContent" id="Sides">
                    <h1>Choose a Side!</h1>
                    <label>Fries
                        <input type="radio" name="Fries" id="Fries" onClick={(e) =>{showSides(e, "fries")}}/>
                    </label>
                    <label>Potato Chips
                        <input type="radio" name="Potato" id="Chips" onClick={(e) =>{showSides(e, "chips")}} />
                    </label>
                    <label>Cole Slaw
                        <input type="radio" name="ColeSlaw" id="ColeSlaw" onClick={(e) =>{showSides(e, "cole")}}/>
                    </label>
                </div>
                <div className="tabContent" id="Beverages">
                    <h1>Add a Beverage!</h1>
                    <label>Pepsi
                        <input type="radio" name="Pepsi" id="Pepsi" onClick={(e) =>{showBeverage(e, "pepsi")}}/>
                    </label>
                    <label>Root Beer
                        <input type="radio" name="RootBeer" id="RootBeer" onClick={(e) =>{showBeverage(e, "rootBeer")}}/>
                    </label>
                    <label>Sprite
                        <input type="radio" name="Sprite" id="Sprite" onClick={(e) =>{showBeverage(e, "sprite")}}/>
                    </label>
                </div>
            </div>
            <div className="items-container">
                <div className="sides">
                    <img className="sideChoice" src={Fries} id="fries" alt="" />
                    <img className="sideChoice" src={Cole} id="cole" alt="" />
                    <img className="sideChoice" src={Chips} id="chips" alt="" />
                </div>
                <div className="burger">
                    <div className="top-buns">
                        <img className="bunChoice white" src={TopBun} id="white" alt="" />
                    </div>
                    <div className="condiments">

                    </div>
                    <div className="toppings">
                        <img src={American} className="toppingChoice"  id="american" alt="" />
                    </div>
                    <div className="meats">
                        <img  className="meatChoice" src={Hamburger} id="hamburger" alt="" />
                    </div>
                    <div className="bottom-buns">
                        <img  className="bunChoice white" src={BottomBun} id="white" alt="" />
                    </div>
                </div>
                <div className="beverages">
                    <img className="bevChoice" id="pepsi" src={Pepsi} alt="" />
                    <img className="bevChoice" id="rootBeer" src={RootBeer} alt="" />
                    <img className="bevChoice" id="sprite" src={Sprite} alt="" />
                </div>
            </div>
        </StyledOrderPage>
    )
}

const StyledOrderPage = styled.div`
display: flex;
flex-direction: column;
    .create-container{
        width: 50%;
        h1 {
            color: white;
        }
        .tabs {
            overflow: hidden;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
                button {
                    background-color: inherit;
                    float: left;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    padding: 14px 16px;
                    transition: 0.3s;
                        &:hover {
                            background-color: #ddd;
                        }
                    }

                button.active {
                    background-color: #ccc;
                }
            }

            .tabContent {
                display: none;
                padding: 6px 12px;
                border: 1px solid #ccc;
                border-top: none;
                label{
                    color: white;
                    display: flex;
                    align-items: center;
                    margin: 10px 0;
                    input{
                        margin-left: 10px;
                    }
                }
            }
    }
    .items-container{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        img{
            display: none;
            width: 450px;
            height: 150px;
        }
        .sides{
            .sideChoice{
                height: 200px;
            }
        }
        .burger{
            display: flex;
            flex-direction: column;
            position: relative;
            .top-buns{
                .bunChoice{
                    display: none;
                    height: 100px;
                    position: relative;
                    bottom: -60px;
                    z-index: 4;
                }
            }

            .toppings{
                position: relative;
                bottom: -60px;
                .toppingChoice{
                    position: relative;
                    height: 40px;
                    z-index: 3;
                }
            }
            .meats{
                .meatChoice {
                    display: none;
                    height: 100px;
                    position: relative;
                    bottom: -10px;
                    z-index: 2;
                }
            }
            .bottom-buns{
                .bunChoice{
                    display: none;
                    height: 100px;
                    position: relative;
                }
            }
        }
    }
`;
