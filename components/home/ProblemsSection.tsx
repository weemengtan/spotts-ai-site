import SourceLink from '@/components/shared/SourceLink';
import { problems } from '@/lib/data';

export default function ProblemsSection() {
  return (
    <section className="py-12 sm:py-24 px-4 sm:px-8 bg-gray-50" id="problems">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-light mb-4">What problems does this solve?</h2>
        <p className="text-base sm:text-lg font-light text-gray-600 mb-12 sm:mb-16 max-w-3xl leading-relaxed">
          Real business issues where AI agents are delivering measurable results—with human oversight maintaining control.
        </p>

        <div className="space-y-6">
          {problems.map((problem, i) => (
            <div key={i} className="bg-white p-4 sm:p-8 rounded-lg border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                <div className="lg:col-span-3 mb-4 lg:mb-0">
                  <div className="text-base sm:text-lg font-normal mb-2">{problem.title}</div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    {problem.stat}
                    <SourceLink
                      source={problem.source}
                      url={problem.sourceUrl}
                      index={`problem${i}`}
                    />
                  </div>
                </div>
                <div className="lg:col-span-5 mb-4 lg:mb-0">
                  <div className="text-xs sm:text-sm font-normal mb-2 text-gray-600">What AI agents do</div>
                  <div className="text-xs sm:text-sm font-light">{problem.solution}</div>
                </div>
                <div className="lg:col-span-4">
                  <div className="text-xs sm:text-sm font-normal mb-2" style={{ color: '#78350F' }}>
                    Business outcome
                  </div>
                  <div className="text-xs sm:text-sm font-light">{problem.outcome}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg border border-gray-200">
          <div className="text-base font-normal mb-4">The reality about jobs and AI</div>
          <div className="text-sm font-light text-gray-700 leading-relaxed space-y-3">
            <p>
              AI agents don&rsquo;t replace your team—they handle the repetitive work that drains energy and time. That automotive supplier saw junior engineers move from documentation to actual engineering work. Support teams solve complex problems instead of resetting passwords.
            </p>
            <p>
              <strong className="font-normal">The truth:</strong> Your team becomes more strategic, not redundant. AI handles the grunt work. Humans handle judgment, relationships, and decisions that require context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}