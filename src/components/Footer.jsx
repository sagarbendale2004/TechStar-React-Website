import "../styles/footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <h1>TechStar</h1>
        <p>@all rights reserved</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://youtube.com" target={"_blank"}>
            Youtube
          </a>
          <a href="https://instagram.com" target={"_blank"}>
            Instagram
          </a>
          <a href="https://github.com" target={"_blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
