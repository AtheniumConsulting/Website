import Image from "next/image";

/*
  Review comp built from docs/design/landing-direction.md.
  No offering has been harvested yet, so unknown content is a visible [value] placeholder.
  The sections stay local until the team approves the direction. They then move to the registry.
*/

function Placeholder({ children }: { children: string }) {
  return <span className="placeholder">[{children}]</span>;
}

const buttonClass =
  "inline-flex min-h-11 items-center rounded-sm bg-white px-6 text-base font-bold text-dark transition-colors duration-150 hover:bg-off-white focus-visible:outline-white";

function SiteHeader() {
  return (
    <header className="mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between px-6">
      <a href="#main" className="shrink-0">
        <Image
          src="/brand/full-white-horizontal.svg"
          alt="Athenium Consulting"
          width={140}
          height={50}
          priority
        />
      </a>
      <nav aria-label="Primary" className="flex items-center gap-8 text-sm">
        <a
          href="#offerings"
          className="hidden min-h-11 items-center text-white/80 hover:text-white sm:inline-flex"
        >
          Offerings
        </a>
        <a
          href="#engagement"
          className="hidden min-h-11 items-center text-white/80 hover:text-white sm:inline-flex"
        >
          Engagement
        </a>
        <a
          href="#insights"
          className="hidden min-h-11 items-center text-white/80 hover:text-white sm:inline-flex"
        >
          Insights
        </a>
        <a
          href="#closing"
          className="inline-flex min-h-11 items-center font-bold text-white"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

function StatementHero() {
  return (
    <section className="flex min-h-[min(800px,100svh)] flex-col bg-dark text-white">
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-6 pb-16">
        <p className="eyebrow">Athenium Consulting</p>
        <h1 className="mt-6 max-w-4xl text-4xl sm:text-6xl sm:leading-[1.1]">
          Technology built for the work of Africa&apos;s resources.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/80">
          Connected technologies meet industry expertise.
        </p>
        <div className="mt-10">
          <a href="#closing" className={buttonClass}>
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}

function EvidenceRow() {
  return (
    <section className="bg-white py-24 text-dark">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-6 lg:grid-cols-[1fr_2fr] lg:items-end">
        <h2 className="text-3xl sm:text-4xl">Results, with their sources.</h2>
        <div>
          <p className="text-6xl font-black leading-none sm:text-8xl">
            <Placeholder>figure</Placeholder>
          </p>
          <p className="mt-6 max-w-xl text-grey">
            <Placeholder>what the figure measures</Placeholder>{" "}
            <Placeholder>source and date</Placeholder>
          </p>
        </div>
      </div>
    </section>
  );
}

function OfferingGroup({ title }: { title: string }) {
  return (
    <div>
      <h3 className="text-2xl">{title}</h3>
      <ul className="mt-6 border-t border-border">
        {[1, 2, 3, 4].map((n) => (
          <li
            key={n}
            className="grid gap-2 border-b border-border py-5 sm:grid-cols-[1fr_2fr]"
          >
            <span className="font-bold">
              <Placeholder>{`${title.toLowerCase()} name`}</Placeholder>
            </span>
            <span className="text-grey">
              <Placeholder>one sentence from the harvest</Placeholder>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Offerings() {
  return (
    <section id="offerings" className="bg-off-white py-24 text-dark">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <h2 className="text-3xl sm:text-4xl">What we offer.</h2>
        <div className="mt-12 grid gap-16 lg:grid-cols-2">
          <OfferingGroup title="Services" />
          <OfferingGroup title="Products" />
        </div>
      </div>
    </section>
  );
}

function IndustryDepth() {
  return (
    <section className="bg-white py-24 text-dark">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-6 lg:grid-cols-[2fr_1fr]">
        <p className="text-3xl font-bold leading-snug sm:text-4xl">
          <Placeholder>
            one statement of 30 words or fewer on why industry expertise changes
            the outcome
          </Placeholder>
        </p>
        <p className="text-grey">
          <Placeholder>supporting text from the positioning record</Placeholder>
        </p>
      </div>
    </section>
  );
}

function Commitment() {
  return (
    <section className="bg-black py-32 text-white">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="h-1 w-16 bg-gold" aria-hidden="true" />
        <p className="mt-10 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl">
          <Placeholder>one sentence that states the commitment</Placeholder>
        </p>
      </div>
    </section>
  );
}

function PhaseTimeline() {
  return (
    <section id="engagement" className="bg-off-white py-24 text-dark">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <h2 className="text-3xl sm:text-4xl">How an engagement runs.</h2>
        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {[1, 2, 3, 4].map((n) => (
            <li key={n} className="relative border-t-2 border-dark pt-8">
              <span
                className="absolute -top-[7px] left-0 size-3 rounded-full bg-dark"
                aria-hidden="true"
              />
              <p className="text-sm font-semibold text-grey">Phase {n}</p>
              <p className="mt-2 font-bold">
                <Placeholder>phase name</Placeholder>
              </p>
              <p className="mt-2 text-grey">
                <Placeholder>
                  what happens and what the client receives
                </Placeholder>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section id="insights" className="bg-white py-24 text-dark">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <h2 className="text-3xl sm:text-4xl">What we are learning.</h2>
        <ul className="mt-12 border-t border-border">
          {[1, 2, 3].map((n) => (
            <li
              key={n}
              className="grid gap-2 border-b border-border py-6 sm:grid-cols-[1fr_4fr]"
            >
              <span className="text-grey">
                <Placeholder>date</Placeholder>
              </span>
              <span className="text-xl font-bold">
                <Placeholder>article title stating the insight</Placeholder>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ClosingAction() {
  return (
    <section id="closing" className="bg-dark py-24 text-white">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-6 lg:grid-cols-[2fr_1fr] lg:items-end">
        <h2 className="text-4xl sm:text-5xl">Begin with one conversation.</h2>
        <div>
          <a href="#closing" className={buttonClass}>
            Start a conversation
          </a>
          <p className="mt-4 text-sm text-white/80">
            <Placeholder>contact route</Placeholder>
          </p>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-dark pb-12 text-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 border-t border-white/20 px-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Image
          src="/brand/full-white-horizontal.svg"
          alt=""
          width={120}
          height={43}
        />
        <p className="text-sm text-white/80">
          <Placeholder>legal line and links</Placeholder>
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:bg-white focus:px-4 focus:py-2 focus:text-dark"
      >
        Skip to content
      </a>
      <main id="main" className="flex flex-1 flex-col">
        <StatementHero />
        <EvidenceRow />
        <Offerings />
        <IndustryDepth />
        <Commitment />
        <PhaseTimeline />
        <Insights />
        <ClosingAction />
      </main>
      <SiteFooter />
    </>
  );
}
