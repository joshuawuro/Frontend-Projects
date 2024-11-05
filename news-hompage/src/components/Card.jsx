import { Link } from "react-router-dom";

function Card() {
  return (
    <>
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
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </article>
      </section>
    </>
  );
}

export default Card;
