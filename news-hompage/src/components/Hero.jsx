import web3 from "../assets/image-web-3-desktop.jpg";

function Hero() {
  return (
    <>
      <section>
        <img src={web3} alt="" />
        <section className="grid lg:gap-10 lg:grid-cols-2">
          <h1 className="text-5xl font-black text-[--very-dark-blue] mt-5">
            The Bright Future of Web 3.0?
          </h1>
          <section>
            <p className="text-[--Grayish-blue] my-5">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling it's promise?
            </p>
            <button className="button">READ MORE</button>
          </section>
        </section>
      </section>
    </>
  );
}

export default Hero;
