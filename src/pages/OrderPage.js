
// styled
import styled from "styled-components"

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


    return (
        <StyledOrderPage>
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
                    <input type="radio" name="White" id="White" />
                </label>
                <label>Wheat
                    <input type="radio" name="Wheat" id="Wheat" />
                </label>
                <label>Brioche
                    <input type="radio" name="Brioche" id="Brioche" />
                </label>
            </div>
            <div className="tabContent" id="Meat">
                <h1>Choose your Meat!</h1>
                <label>Hamburger
                    <input type="radio" name="Hamburger" id="Hamburger" />
                </label>
                <label>Turkey Burger
                    <input type="radio" name="Turkey" id="Turkey" />
                </label>
                <label>Chicken Cutlet
                    <input type="radio" name="Chicken" id="Chicken" />
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
            </div>
            <div className="tabContent" id="Condiments">
                <h1>Add Condiments!</h1>
                <label>Ketchup
                    <input type="radio" name="Ketchup" id="Ketchup" />
                </label>
                <label>Mustard
                    <input type="radio" name="Mustard" id="Mustard" />
                </label>
                <label>Mayo
                    <input type="radio" name="Mayo" id="Mayo" />
                </label>
                <label>BBQ Sauce
                    <input type="radio" name="BBQ" id="BBQ" />
                </label>
            </div>
            <div className="tabContent" id="Sides">
                <h1>Choose a Side!</h1>
                <label>Fries
                    <input type="radio" name="Fries" id="Fries" />
                </label>
                <label>Potato Chips
                    <input type="radio" name="Potato" id="Potato" />
                </label>
                <label>Cole Slaw
                    <input type="radio" name="ColeSlaw" id="ColeSlaw" />
                </label>
            </div>
            <div className="tabContent" id="Beverages">
                <h1>Add a Beverage!</h1>
                <label>Pepsi
                    <input type="radio" name="Pepsi" id="Pepsi" />
                </label>
                <label>Root Beer
                    <input type="radio" name="RootBeer" id="RootBeer" />
                </label>
                <label>Sprite
                    <input type="radio" name="Sprite" id="Sprite" />
                </label>
            </div>
        </StyledOrderPage>
    )
}

const StyledOrderPage = styled.div`
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
`;