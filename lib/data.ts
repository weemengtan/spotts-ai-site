import { Step, Problem, Outcome } from './types';

export const steps: Step[] = [
  {
    title: "Perceive",
    desc: "Gathers data from your systems",
    detail: "CRM, email, databases, APIs",
    source: "IBM Research, 2025"
  },
  {
    title: "Reason",
    desc: "Analyzes using AI",
    detail: "Understands context, makes decisions",
    source: "NVIDIA, 2024"
  },
  {
    title: "Act",
    desc: "Executes with oversight",
    detail: "Updates records, routes to humans when needed",
    source: "AWS, 2025"
  },
  {
    title: "Learn",
    desc: "Improves over time",
    detail: "Gets smarter with feedback",
    source: "Google Cloud, 2025"
  }
];

export const problems: Problem[] = [
  {
    title: "Customer support overwhelm",
    stat: "58% adoption rate for automation",
    solution: "AI agents handle routine cases 24/7, escalate complex ones with full context to human teams",
    outcome: "Teams focus on problems requiring human judgment",
    source: "IDC Southeast Asia Survey, 2025",
    sourceUrl: "https://www.manilatimes.net/2025/08/17/business/sunday-business-it/most-asean-organizations-adopting-ai-agents-in-the-next-12-months/2169037"
  },
  {
    title: "Manual processes eating time",
    stat: "50% time reduction achieved",
    solution: "AI agents automate documentation and testing, with human approval for critical decisions",
    outcome: "Automotive supplier: 50% faster test case generation for junior engineers",
    source: "McKinsey Advanced Industries, 2025",
    sourceUrl: "https://www.mckinsey.com/industries/automotive-and-assembly/our-insights/empowering-advanced-industries-with-agentic-ai"
  },
  {
    title: "IT always firefighting",
    stat: "AI agents now deployed in SOCs",
    solution: "AI agents investigate incidents and correlate threats, escalate to human analysts for final decisions",
    outcome: "Proactive threat detection with human oversight for response actions",
    source: "TechTarget Enterprise AI, 2025",
    sourceUrl: "https://www.techtarget.com/searchenterpriseai/feature/Real-world-agentic-AI-examples-and-use-cases"
  },
  {
    title: "Supply chain complexity",
    stat: "20%+ logistics cost reduction",
    solution: "AI agents monitor and optimize, recommend actions to human operators for approval",
    outcome: "Real-time optimization with human oversight on major routing decisions",
    source: "McKinsey Research, 2025",
    sourceUrl: "https://www.mckinsey.com/industries/automotive-and-assembly/our-insights/empowering-advanced-industries-with-agentic-ai"
  }
];

export const outcomes: Outcome[] = [
  {
    company: "Writer Platform",
    metric: "333% ROI",
    detail: "in 3 years, $12.02M net value, <6 month payback",
    source: "Forrester TEI Study, 2025",
    sourceUrl: "https://writer.com/blog/roi-for-generative-ai/"
  },
  {
    company: "Enterprise Deployments",
    metric: "74% achieve ROI",
    detail: "within first year of deployment",
    source: "Google Cloud ROI Report, 2025",
    sourceUrl: "https://cloud.google.com/transform/roi-of-ai-how-agents-help-business"
  },
  {
    company: "Financial Services",
    metric: "85% faster",
    detail: "review processes, 50% agency cost reduction",
    source: "Forrester/Writer Study, 2025",
    sourceUrl: "https://writer.com/blog/roi-for-generative-ai/"
  },
  {
    company: "Manufacturing",
    metric: "20%+ reduction",
    detail: "in logistics and inventory costs",
    source: "McKinsey Research, 2025",
    sourceUrl: "https://www.mckinsey.com/industries/automotive-and-assembly/our-insights/empowering-advanced-industries-with-agentic-ai"
  }
];