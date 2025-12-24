import "./index.css";
import "@fontsource-variable/manrope/index.css";

function App() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <div className="max-w-[700px] mx-auto px-6 py-8 md:py-16">
        {/* logo + quote from the GOAT sun tzu*/}
        <header className="mb-8 md:mb-14">
          <div className="mb-6 md:mb-12">
            <img
              src="/logo-fulltext.png"
              alt="OpenBoxOffice"
              className="h-8 md:h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-zinc-200"></div>
            <div className="pl-6">
              <p className="text-xl md:text-2xl font-light italic leading-relaxed text-zinc-600">
                "Offer the enemy a bait to lure him; feign disorder, and strike
                him."
              </p>
              <footer className="mt-4 text-sm font-mono tracking-wider text-zinc-400 uppercase">
                — Sun Tzu
              </footer>
            </div>
          </div>
        </header>

        <div className="space-y-12 md:space-y-16 font-medium">
          <section>
            <h2 className="text-base font-semibold text-zinc-500">About Us</h2>
            <hr className="border-zinc-200 mt-3 mb-6" />
            <div className="space-y-6 text-lg leading-relaxed text-zinc-700">
              <p>
                OpenBoxOffice is an open-source, community-driven project that
                aims to democratize the ticketing industry without charging
                exorbitant fees or locking users into proprietary systems.
              </p>
              <p>
                It's easy to deploy, use, and customize for any of your needs --
                especially for non-profits or local PTO/PTA organizations. We
                won't charge you anything to use our software or to purchase
                tickets, unlike other ticketing platforms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-500">Manifesto</h2>
            <hr className="border-zinc-200 mt-3 mb-6" />
            <div className="space-y-6 text-lg leading-relaxed text-zinc-700">
              <p>
                There's an issue with the ticketing industry - one that affects
                parents, teachers, and non-profits alike: exorbinant ticket fees
                arbitrarily charged for one simple (but evil) reason. Greed. The most 
                vulnerable (like you!) are unfairly exploited by the ticketing industry
                when they try to see the events they love. Whether it's a school play, a local concert,
                or even a national tour, the fees are unjustifiably high.
              </p>
              <p>
                We're here to fix that - to make events affordable for everyone involved.
                We're building OpenBoxOffice to make ticketing fair, transparent, and 
                accessible for everyone, especially PTO/PTA organizations and non-profits.
              </p>
              <p>
                To accomplish our goal of breaking from the grip of greed, the
                following principles will guide all of our decisions and development:
              </p>
              <ul className="space-y-3 mt-4">
                {[
                  {
                    name: "Be Different.",
                    description: `At the core of OpenBoxOffice, there is the belief to be
                    different from the competition. Ticketing is "good enough for everyone"
                    as is - but that isn't good enough for us. We're going to change the
                    industry for the better by redefining what "good enough" means.`
                  },
                  {
                    name: "Be Agnostic.",
                    description: `No matter who (or what) you are, OpenBoxOffice is the one-stop solution for whatever
                    you need. We won't lock you in with proprietary systems and contracts - after all we're a non-profit!
                    Use whatever you want, whenever you want, with whatever you want. Don't like our software? Use something else
                    or make changes yourself!`,
                  },
                  {
                    name: "Be Cheap.",
                    description: `To use our software or purchase tickets, there shall be no fees. Period. It should
                    be cheap to deploy, use, and maintain. We're not going to nickel and dime you for every little thing
                    (ahem ahem, Eventbrite). Free as in freedom.`,
                  },
                  {
                    name: "Be Open.",
                    description: `Our software must remain open-source and community-driven, ensuring transparency,
                    collaboration, and accessibility for all. The code is available to all, and everyone is welcome to use,
                    study, and contribute to its future.`,
                  },
                  {
                    name: "Be Reliable.",
                    description: `OpenBoxOffice must be reliable and always available. Not only is it
                    catastrophic if OpenBoxOffice has unscheduled downtime, it erodes trust with our users.
                    Reliability will always take precedence.`,
                  },
                  {
                    name: "Be Easy to Use.",
                    description: `Our software must be easy to use and understand
                    It should be simple to set up and use, with a clear and intuitive interface.
                    No technical expertise should be required to use OpenBoxOffice - whether you're
                    a treasurer, a concertgoer, or a non-profit organizer.`,
                  },
                ].map((principle: { name: string; description: string }) => (
                  <li key={principle.name} className="flex gap-3">
                    <span><strong className="text-zinc-900">{principle.name}</strong> {principle.description}</span>
                  </li>
                ))}  
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-500">What's Next</h2>
            <hr className="border-zinc-200 mt-3 mb-6" />
            <div className="space-y-6 text-lg leading-relaxed text-zinc-700">
              <p>
                We're currently in the process of building the first release of
                OpenBoxOffice, which we anticipate will be available in Q1 2026.
                We'll also be releasing updates here in the meantime - stay
                tuned!
              </p>
              <p>
                Have any ideas for features or improvement? Email us at{" "}
                <a
                  href="mailto:hello@openboxoffice.org"
                  className="text-zinc-900 hover:text-zinc-700 transition-colors underline"
                >
                  hello@openboxoffice.org
                </a>
                . You can also contribute to our codebase on our{" "}
                <a
                  href="https://github.com/OpenBoxOffice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900 transition-colors underline"
                >
                  GitHub
                </a>{" "}
                page.
              </p>
            </div>
          </section>
        </div>

        <footer className="mt-16 md:mt-20 pt-8 border-t border-zinc-200 flex justify-between items-center text-xs text-zinc-400">
          <span>OpenBoxOffice &copy; 2025</span>
          <div className="flex gap-6">
            <a
              href="https://github.com/OpenBoxOffice"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
