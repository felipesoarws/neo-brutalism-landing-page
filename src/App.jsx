import "./App.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { GoPlus } from "react-icons/go";
import { BiUser, BiTime } from "react-icons/bi";
import { FaHashtag } from "react-icons/fa";
import { MdEmail, MdDateRange } from "react-icons/md";
import summer_blue from "./assets/summer_menu.png";
import Dish from "./components/Dish";
import MenuPlates from "./components/MenuPlates";

// first plates section
import plate_1 from "./assets/plate_1.png";
import plate_2 from "./assets/plate_2.png";
import plate_3 from "./assets/plate_3.png";
import plate_4 from "./assets/plate_4.png";

// second plates section
import menu_plate_1 from "./assets/menu_1.png";
import menu_plate_2 from "./assets/menu_2.png";
import menu_plate_3 from "./assets/menu_3.png";
import menu_plate_4 from "./assets/menu_4.png";
import menu_plate_5 from "./assets/menu_5.png";
import menu_plate_6 from "./assets/menu_6.png";

// our history section
import image_bg from "./assets/our_history.png";

// cards section
import woman from "./assets/woman.png";
import chef from "./assets/chef.png";

// rating section
import star_full from "./assets/star_full.png";
import star_empty from "./assets/star_empty.png";

const dishes = [
  {
    name: "Santorini Salad",
    img: plate_1,
    weight: "210g",
  },
  {
    name: "Pasta with Squid",
    img: plate_2,
    weight: "360g",
  },
  {
    name: "Moroccan Meat",
    img: plate_3,
    weight: "320g",
  },
  {
    name: "Dessert D'mour",
    img: plate_4,
    weight: "250g",
  },
];

const menu_plates = [
  {
    name: "Snacks",
    img: menu_plate_1,
  },
  {
    name: "Salads",
    img: menu_plate_2,
  },
  {
    name: "Soups",
    img: menu_plate_3,
  },
  {
    name: "Meat dishes",
    img: menu_plate_4,
  },
  {
    name: "Fish dishes",
    img: menu_plate_5,
  },
  {
    name: "Dessert",
    img: menu_plate_6,
  },
];

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="menu_mobile menu">
          <div className="title">
            <h1>
              Forest <span>Coffee</span>
            </h1>
          </div>
          <div className="button">
            <button>Contacts</button>
            <div className="icon_menu">
              <HiMenuAlt3 />
            </div>
          </div>
        </div>
        <div className="menu_desktop menu">
          <div className="title">
            <h1>
              Forest <span>Coffee</span>
            </h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">Menu</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Stocks</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">About us</a>{" "}
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Booking</a>
              </li>
            </ul>
          </nav>
          <div className="button">
            <button>Contacts</button>
            <div className="icon_menu"></div>
          </div>
        </div>
      </header>
      <main>
        <div className="discount">
          <p>
            <span>Discount of 5 and 10% </span>from <span>"Forest Coffee"</span>
          </p>
        </div>
      </main>
      <div className="summer_menu">
        <div className="desc">
          <div className="desc_title">
            <h2>
              Summer<span>Menu</span>drink
            </h2>
            <div className="button">
              <button>Learn More</button>
            </div>
          </div>
        </div>
        <div className="img">
          <img src={summer_blue} alt="" />
        </div>
      </div>
      <div className="chef_signature">
        <div className="chef_signature_title">
          <h1>
            Chef's signature dishes
            <span></span>
          </h1>
        </div>
        <div className="chef_dishes">
          {dishes.map((dish) => (
            <Dish
              name={dish.name}
              url={dish.img}
              weight={dish.weight}
              key={dish.id}
            />
          ))}
        </div>
      </div>
      <div className="booking_container">
        <div className="booking">
          <div className="booking_title">
            <h1>
              Booking
              <span></span>
            </h1>
          </div>
          <div className="booking_inputs">
            <div className="booking_inputs_1">
              <div className="line">
                <div className="input">
                  <div className="icon">
                    <BiUser />
                  </div>
                  <input type="text" placeholder="name" />
                </div>
                <div className="input">
                  <div className="icon">
                    <FaHashtag />
                  </div>
                  <input type="tel" placeholder="phone" />
                </div>
              </div>
              <div className="line">
                <div className="input">
                  <div className="icon">
                    <MdEmail />
                  </div>
                  <input type="email" placeholder="e-mail" />
                </div>
                <div className="input">
                  <div className="icon">
                    <GoPlus />
                  </div>
                  <input type="number" placeholder="how many guests" />
                </div>
              </div>
              <div className="line">
                <div className="input">
                  <div className="icon">
                    <MdDateRange />
                  </div>
                  <input type="date" placeholder="date" />
                </div>
                <div className="input">
                  <div className="icon">
                    <BiTime />
                  </div>
                  <input type="number" placeholder="time (in minutes)" />
                </div>
              </div>
            </div>
            <div className="booking_inputs_2">
              <div className="input">
                <textarea
                  cols="60"
                  rows="12"
                  placeholder="Your dishes"
                ></textarea>
              </div>
              <div className="terms">
                <div className="term">
                  <input type="checkbox" />
                  <p>
                    I agree to <span>the processing of personal data</span>
                  </p>
                </div>
                <p>*mandatory fields and filling</p>
              </div>
            </div>
            <div className="booking_inputs_3 button">
              <button>Book now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="main_menu">
        <div className="main_menu_title">
          <h1>
            Menu
            <span></span>
          </h1>
        </div>
        <div className="main_menu_plates">
          {menu_plates.map((plate) => (
            <MenuPlates name={plate.name} url={plate.img} key={plate.id} />
          ))}
        </div>
      </div>
      <div className="our_history">
        <div className="our_history_video">
          <img src={image_bg} alt="" />
        </div>
        <div className="our_history_content">
          <div className="our_history_content_title">
            <h1>
              Find out our history
              <span></span>
            </h1>
          </div>
          <div className="our_history_content_desc">
            <p>
              We have created our cafe for our own. We meet each guest as our
              old friend. Here you can have a quick and very tasty lunch during
              the day and drink coffee and cocktails. You can slowly and gently
              spend a romantic dinner. You can noisily and cheerfully celebrate
              any celebration your guests with pleasure and gratitude will
              remember this wonderful holiday.
            </p>
            <div className="flex">
              <div className="f1">
                <h1>5 years</h1>
                <p>Successful work</p>
              </div>
              <div className="f2">
                <h1>2 floors</h1>
                <p>Cafe area</p>
              </div>
            </div>
            <div className="flex">
              <div className="f1">
                <h1>20+</h1>
                <p>Varieties of coffee</p>
              </div>
              <div className="f2">
                <h1>3000+</h1>
                <p>Satisfied customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="articles">
        <div className="articles_container">
          <div className="articles_container_promotions">
            <h1>
              Summer promotions <span>on Forest Coffee</span>
            </h1>
            <div className="button">
              <button>Learn More</button>
            </div>
          </div>
          <div className="articles_container_bonuses">
            <div className="articles_container_bonuses_first">
              <div className="blue">
                <h1>
                  Forest Coffee <span>Bonus Card</span>
                </h1>
              </div>
              <div className="pink">
                <h1>
                  800 birthday <span>bonuses</span>
                </h1>
              </div>
            </div>
            <div className="articles_container_bonuses_second">
              <h1>
                Discount on coffee <span>in your mug</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="our_command">
        <div className="our_command_cards">
          <div className="our_command_cards_card_3 card">
            <div className="image"></div>
            <div className="content">
              <h1></h1>
              <p></p>
            </div>
          </div>
          <div className="our_command_cards_card_2 card">
            <div className="image">
              <img src={woman} alt="" />
            </div>
            <div className="content">
              <h1>Helen</h1>
              <p>Barista</p>
            </div>
          </div>
          <div className="our_command_cards_card_1 card">
            <div className="image">
              <img src={chef} alt="" />
            </div>
            <div className="content">
              <h1>Alexandre</h1>
              <p>Chef</p>
            </div>
          </div>
        </div>
        <div className="our_command_content">
          <div className="our_command_content_title">
            <h1>
              Our command
              <span></span>
            </h1>
          </div>
          <div className="our_command_content_desc">
            <p>
              Our cafe staff determines our success, qualified, experiencied,
              responsible, friendly employees, who know to work in a team and
              are ready to develop, to create the right atmosphere in the
              institution. From coherence and efficiency their interaction
              directly affects our success.
              <span>About each in order:</span>
            </p>
            <p>
              <strong>The chef</strong> is one of the most important roles in
              the kitchen depends on the menu that you like to all visitors:
              from the largest to the most small dish.
            </p>
            <p>
              Our <strong>bartender</strong> not only communicates with
              costumers and prepares cocktails to their taste, but also has a
              good understanding of mixology and various methods preparation of
              drinks.
            </p>
            <p>
              <strong>Read more...</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="ratings">
        <div className="ratings_title">
          <h1>
            What they say about us
            <span></span>
          </h1>
        </div>
        <div className="ratings_cards">
          <div className="ratings_cards_card">
            <div className="ratings_cards_card_first">
              <p>25/07/2022</p>
              <div className="stars">
                <img src={star_full} alt="" />
                <img src={star_full} alt="" />
                <img src={star_full} alt="" />
                <img src={star_full} alt="" />
                <img src={star_full} alt="" />
              </div>
            </div>
            <div className="ratings_cards_card_second">
              <p>
                Very fast! I received my order within 10 minutes. Warm salad is
                amazing! Impressed!
              </p>
              <span>Max</span>
            </div>
          </div>

          <div className="ratings_cards_card">
            <div className="ratings_cards_card_first">
              <p>15/05/2022</p>
              <div className="stars">
                <img src={star_full} alt="" />
                <img src={star_full} alt="" />
                <img src={star_full} alt="" />
                <img src={star_full} alt="" />
                <img src={star_empty} alt="" />
              </div>
            </div>
            <div className="ratings_cards_card_second">
              <p>
                The guys are always ready to help with the choice and pick up a
                dish according to your preferences. Amazing cuisine!
              </p>
              <span>Alex</span>
            </div>
          </div>

          <div className="ratings_cards_card">
            <div className="ratings_cards_card_first">
              <p>22/01/2022</p>
              <div className="stars">
                <img src={star_full} alt="" />
                <img src={star_full} alt="" />
                <img src={star_full} alt="" />
                <img src={star_full} alt="" />
                <img src={star_full} alt="" />
              </div>
            </div>
            <div className="ratings_cards_card_second">
              <p>
                It's nice to have access to such a wide range of food close to
                home. Always friendly and pleasant atmosphere.
              </p>
              <span>Sophie</span>
            </div>
          </div>

          <div className="ratings_cards_card">
            <div className="ratings_cards_card_first">
              <p>13/04/2022</p>
              <div className="stars">
                <img src={star_full} alt="" />
                <img src={star_full} alt="" />
                <img src={star_full} alt="" />
                <img src={star_full} alt="" />
                <img src={star_full} alt="" />
              </div>
            </div>
            <div className="ratings_cards_card_second">
              <p>
                Their brunch is awesome, I love the avocado toast and the
                California focaccia.
              </p>
              <span>Alice</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
