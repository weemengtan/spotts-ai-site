import SourceLink from '@/components/shared/SourceLink';
import { outcomes } from '@/lib/data';

export default function OutcomesSection() {
  return (
    <section className="py-24 px-8" id="outcomes">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light mb-4">Does it actually work?</h2>
        <p className="text-lg font-light text-gray-600 mb-16 max-w-3xl leading-relaxed">
          Here&rsquo;s what companies are seeing. Every number is sourced and verifiable.
        </p>

        <div className="grid grid-cols-2 gap-8 mb-16">
          {outcomes.map((outcome, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-lg">
              <div className="text-3xl font-light mb-2" style={{ color: '#78350F' }}>
                {outcome.metric}
              </div>
              <div className="text-sm font-light text-gray-600 mb-4">{outcome.detail}</div>
              <div className="text-xs font-normal text-gray-500 pt-4 border-t border-gray-200 flex items-center justify-between">
                <span>{outcome.company}</span>
                <SourceLink
                  source={outcome.source}
                  url={outcome.sourceUrl}
                  index={`outcome${i}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-10 mb-12">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <div className="text-2xl font-light mb-6">The pattern: Start small, scale fast</div>
              <div className="space-y-6">
                <div>
                  <div className="text-base font-normal mb-2">Weeks 1-4: Prototype</div>
                  <div className="text-sm font-light text-gray-600">
                    Pick one workflow, build it, test with real data
                  </div>
                </div>
                <div>
                  <div className="text-base font-normal mb-2">Month 2-3: Deploy & Measure</div>
                  <div className="text-sm font-light text-gray-600">
                    Production deployment with human oversight protocols
                  </div>
                </div>
                <div>
                  <div className="text-base font-normal mb-2">Month 6-12: ROI Realized</div>
                  <div className="text-sm font-light text-gray-600">
                    74% of companies see returns by year one
                    <SourceLink
                      source="Google Cloud, 2025"
                      url="https://cloud.google.com/transform/roi-of-ai-how-agents-help-business"
                      index="timeline"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-2xl font-light mb-6">Why most AI projects fail</div>
              <div className="text-sm font-light text-gray-700 leading-relaxed space-y-3">
                <p>
                  78% of companies use AI. 80% see no ROI. Why?
                  <SourceLink
                    source="McKinsey, 2025"
                    url="https://www.mckinsey.com/capabilities/quantumblack/our-insights/seizing-the-agentic-ai-advantage"
                    index="paradox"
                  />
                </p>
                <p>
                  <strong className="font-normal">The problem:</strong> They deploy ChatGPT for emails instead of automating actual business processes.
                </p>
                <p>
                  <strong className="font-normal">What works:</strong> Identifying complete workflows where AI can take full ownership (with human oversight) and measuring real impact—time saved, costs reduced, revenue increased.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-lg">
          <div className="text-sm font-normal mb-3">Our commitment to transparency</div>
          <div className="text-sm font-light text-gray-700 leading-relaxed">
            Every metric on this page links to its source. We don&rsquo;t make up numbers. If we can&rsquo;t verify it, we don&rsquo;t claim it. Hover over any [source] tag to see the research behind the data.
          </div>
        </div>
      </div>
    </section>
  );
}