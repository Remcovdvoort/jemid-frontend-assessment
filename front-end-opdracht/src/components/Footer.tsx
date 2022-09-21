import monstera from "../img/monstera.jpg";

export default function Footer() {
  return (
    <div>
      <div
        style={{
          width: "100vw",
          height: "40%",
          position: "absolute",
          background:
            "linear-gradient(rgba(0,0,0, 0.1), rgba(0,0,0, 0.1)), url(" +
            monstera +
            ")",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: "-1",
        }}
      >
        <div className="footer__text">
          <h1 className="footer__h1">Kwekerij Annie</h1>
          <p className="footer__p">&copy; 2022</p>
        </div>
      </div>
    </div>
  );
}
