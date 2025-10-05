import SourceLink from '@/components/shared/SourceLink';

export default function StatsBar() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50 border-y border-gray-100" id="stats" aria-label="Key statistics">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
        <div>
          <div className="text-4xl font-light mb-2" style={{ color: '#78350F' }}>
            333% ROI
          </div>
          <div className="text-sm font-light text-gray-600">
            Forrester study, 3-year average
            <SourceLink
              source="Forrester Total Economic Impact Study, 2025"
              url="https://writer.com/blog/roi-for-generative-ai/"
              index="stat1"
            />
          </div>
        </div>
        <div>
          <div className="text-4xl font-light mb-2" style={{ color: '#78350F' }}>
            74%
          </div>
          <div className="text-sm font-light text-gray-600">
            Achieve ROI within year one
            <SourceLink
              source="Google Cloud ROI Report, 2025"
              url="https://cloud.google.com/transform/roi-of-ai-how-agents-help-business"
              index="stat2"
            />
          </div>
        </div>
        <div>
          <div className="text-4xl font-light mb-2" style={{ color: '#78350F' }}>
            78%
          </div>
          <div className="text-sm font-light text-gray-600">
            Use AI but need better implementation
            <SourceLink
              source="McKinsey AI State Report, 2025"
              url="https://www.mckinsey.com/capabilities/quantumblack/our-insights/seizing-the-agentic-ai-advantage"
              index="stat3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}