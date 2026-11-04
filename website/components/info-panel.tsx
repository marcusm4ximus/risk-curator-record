export function InfoProse() {
  return (
    <div className="prose">
      <section>
        <h3>Rationale</h3>
        <p>
          Curator Watch and DeFiLlama&apos;s investor pages already show sourced
          figures such as TVL. But they do not cover a curator&apos;s
          background and there is no published page of what curators did when
          something went bad. As long as this continues, there&apos;s not
          really an incentive for them to be accountable. I thought this work
          would be valuable to both depositors and the projects that want to
          work with them. While DeFiLlama&apos;s investor pages are verified
          by the curators, this work is independent.
        </p>
      </section>
      <section>
        <h3>What&apos;s included</h3>
        <p>
          Incidents that created friction in curator operations and loss for
          depositors: Oracle failures, collateral exposures, exploits and
          operational failures. Each row has a short description of what
          happened and the curator&apos;s response. The aim of this work is
          showing the history and giving an idea about the impact and
          curators&apos; communication, not a full post-mortem.
        </p>
      </section>
      <section>
        <h3>Where the information comes from</h3>
        <p>
          The curators are whitelisted names from Morpho and Euler. Incidents
          were first collected with Grok, because it can read X and depositor
          comments, giving more independent information. Then they&apos;re
          comprehensively checked again through the open web, more than once
          with different models. They&apos;re also reviewed manually.
        </p>
      </section>
      <section>
        <h3>How current the data is</h3>
        <p>
          The first check started on 26 Sep 2026. In addition to manual
          reviews, a bot will check a few times in a month to see if
          there&apos;s a new event occured and checking if any of these
          curators had any exposure. I wil then update manually. For the
          resolution changes or adjustments, there&apos;s a need of notice
          from curators.
        </p>
      </section>
      <section>
        <h3>Glossary</h3>
        <ul>
          <li>
            Score (S): Every event counts. High is 3, medium is 2, low is 1,
            on both direct and indirect. Direct adds 1. Unresolved adds 1.
          </li>
          <li>
            High (H), medium (M), low (L), none (N): Size of loss. N is a
            recorded action with no priced impact.
          </li>
          <li>
            Direct (D) and indirect (I): Direct means basic diligence should
            have caught it. For example, AlphaPing&apos;s broken market
            parameters, Stream&apos;s recursive mint and every MainStreet
            event are direct. Indirect means the exposure was real and
            diligence would not have shown it, such as the rsETH exposure. The
            same collateral failure can be direct for one curator and indirect
            for another.
          </li>
        </ul>
      </section>
      <section>
        <h3>Disclosure</h3>
        <p>
          Educational record of public incidents. Not investment, legal, or
          tax advice, and not an offer to buy or sell. Sources can be
          incomplete or wrong. An empty page is not proof a curator is safe.
          You are responsible for your own decision to engage with curators.
        </p>
      </section>
    </div>
  );
}

export function InfoPanel() {
  return (
    <div className="page-fill">
      <div className="panel panel-fill">
        <InfoProse />
      </div>
    </div>
  );
}
