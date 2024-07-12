import "../styles/home.scss";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="home">
        <main>
          <h1>TechStar.</h1>
          <p>solutions to all your Problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are Your one and only Solution to the tech Problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Amet, quibusdam! Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Qui, expedita.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            repudiandae. Rem magni, earum, est tenetur quaerat omnis error
            dolorem fugiat provident enim maiores accusamus doloremque
            cupiditate voluptatem neque vitae placeat laborum qui quisquam
            minima nam expedita! Sunt nostrum alias doloremque voluptas? Quis
            neque natus delectus sequi ratione tempore nobis dolor! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: " 0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: " 0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: " 0.7s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

            <div
              style={{
                animationDelay: " 1s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
