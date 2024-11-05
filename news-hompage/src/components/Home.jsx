import { Link } from "react-router-dom";
import web3 from "../assets/image-web-3-desktop.jpg";
import RetroGame from "../assets/image-retro-pcs.jpg";
import Keyboard from "../assets/image-top-laptops.jpg";
import Game from "../assets/image-gaming-growth.jpg";

function Home() {
  return (
    <>
      <section className="w-full max-w-[1240px] mx-auto  px-4 lg:px-0 mb-10">
        <section className="grid gap-10 md:grid-cols-3">
          <section className="md:col-span-2">
            <img src={web3} alt="" />
            <section className="grid lg:gap-10 lg:grid-cols-2">
              <h1 className="text-5xl font-black text-[--very-dark-blue] mt-5">
                The Bright Future of Web 3.0?
              </h1>
              <section>
                <p className="text-[--Grayish-blue] my-5">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling it's promise?
                </p>
                <button className="button">READ MORE</button>
              </section>
            </section>
          </section>
          <section>
            <section className="bg-[--very-dark-blue] text-[--off-white] py-4 px-4 h-full flex flex-col justify-center">
              <h1 className="text-2xl font-bold text-[--soft-orange]">New</h1>
              <article className="py-4">
                <Link
                  to="/"
                  className="font-bold md:text-2xl hover:text-[--soft-orange]"
                >
                  Hydrogen VS Electric Cars
                </Link>
                <p className="my-2 text-[--Dark-grayish-blue]">
                  Will hydrogen-fueled cars eve catch up to EV's?
                </p>
              </article>
              <article className="py-4 border-y border-[--Dark-grayish-blue]">
                <Link
                  to="/"
                  className="font-bold md:text-2xl hover:text-[--soft-orange]"
                >
                  The Downside of AI Artistry
                </Link>
                <p className="my-2 text-[--Dark-grayish-blue]">
                  What are the possible adverse effect of on-demand AI image
                  generation?
                </p>
              </article>
              <article className="py-4">
                <Link
                  to="/"
                  className="font-bold md:text-2xl hover:text-[--soft-orange]"
                >
                  Is VC Functioning Up?
                </Link>
                <p className="my-2 text-[--Dark-grayish-blue]">
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </article>
            </section>
          </section>
        </section>
      </section>

      {/* NEWS SECTION */}
      <section className="w-full max-w-[1240px] mx-auto  px-4 lg:px-0 mb-10">
        {" "}
        <section className="grid md:grid-cols-3  gap-5">
          <section className="grid grid-cols-3 gap-4">
            <img src={RetroGame} alt="Retro pc with RGB lights" />
            <section className="grid col-span-2">
              <h1 className="text-2xl lg:text-4xl font-bold text-[--Soft-red]">
                01
              </h1>
              <Link
                to="/"
                className="lg:text-xl text-[--very-dark-blue] font-bold hover:text-[--Soft-red]"
              >
                Reviving Retro PCs
              </Link>
              <p className="text-sm lg:text-lg text-[--Dark-grayish-blue]">
                What happens when old PCs are given mordern upgrades?
              </p>
            </section>
          </section>
          <section className="grid grid-cols-3 gap-4">
            <img src={Keyboard} alt="Retro pc with RGB lights" />
            <section className="grid col-span-2">
              <h1 className="text-2xl lg:text-4xl font-bold text-[--Soft-red]">
                02
              </h1>
              <Link
                to="/"
                className="lg:text-xl text-[--very-dark-blue] font-bold hover:text-[--Soft-red]"
              >
                Top 10 Laptops of 2024
              </Link>
              <p className="text-sm lg:text-lg text-[--Dark-grayish-blue]">
                Our best picks for various needs and budgets
              </p>
            </section>
          </section>

          <section className="grid grid-cols-3 gap-4">
            <img src={Game} alt="Retro pc with RGB lights" />
            <section className="grid col-span-2">
              <h1 className="text-2xl lg:text-4xl font-bold text-[--Soft-red]">
                03
              </h1>
              <Link
                to="/"
                className="lg:text-xl text-[--very-dark-blue] font-bold hover:text-[--Soft-red]"
              >
                The Growth of Gaming
              </Link>
              <p className="text-sm lg:text-lg text-[--Dark-grayish-blue]">
                How the pandemic has sparked fresh opportunities
              </p>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default Home;
