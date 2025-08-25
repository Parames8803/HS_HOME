import { v4 as uuidv4 } from "uuid";

export interface Conversation {
  clientChallenge: string;
  hynoxResponse: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  title: string;
  initialConversation: string;
  overview: string;
  detailedConversations: Conversation[];
  caseStudyContent: string;
  userStory: string;
  outcomes: string[];
  whyItMatters: string;
  callToAction: string;
  finalSolution: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "9e7f2d4b-1b67-4e2e-9c42-zyden-0001",
    clientName: "Zyden Clothing",
    title:
      "From Investment Idea to Global Brand with the Hynox Subscription Model",
    initialConversation:
      "An investor from Tiruchengodu, Tamil Nadu approached Hynox with funds but no clear direction on where to invest. We proposed the Hynox Clothing Subscription Model, explaining the A–Z process of setup, branding, operations, and ROI. Impressed, they chose to start a store with us.",
    overview:
      "Zyden Clothing began as an investment inquiry and evolved into a global clothing brand under the Hynox ecosystem. We guided the client through investment planning, brand creation, product selection, operational setup, and performance marketing—leading to profitable international sales.",
    detailedConversations: [
      {
        clientChallenge:
          "We have money to invest, but we’re not sure which business is sustainable and profitable long term.",
        hynoxResponse:
          "We recommended the Hynox Clothing Subscription Model and walked you through the complete A–Z roadmap—investment breakdown, brand setup, sourcing, operations, and ROI expectations—so you could make a confident, low-risk decision.",
      },
      {
        clientChallenge:
          "What products should we choose and how do we create a strong brand identity?",
        hynoxResponse:
          "We ran market and trend analysis, shortlisted high-demand categories, and facilitated a brand naming workshop. We finalized the name ‘Zyden Clothing’ and delivered a positioning + pricing + audience strategy report.",
      },
      {
        clientChallenge:
          "We’re new to clothing operations—how do we handle suppliers, production, and logistics?",
        hynoxResponse:
          "We provided end-to-end consulting: vetted vendor connections in Tirupur, sourcing strategies, cost controls, QC checkpoints, and logistics workflows to enable a smooth, on-time launch.",
      },
      {
        clientChallenge:
          "How do we reach customers beyond Tamil Nadu and start selling globally?",
        hynoxResponse:
          "We set up a global-ready e-commerce stack and launched performance marketing on Meta and Google. We used a full-funnel approach—awareness, retargeting, and conversion campaigns—to acquire buyers internationally.",
      },
      {
        clientChallenge:
          "How do we ensure repeat customers and predictable revenue?",
        hynoxResponse:
          "We implemented subscription mechanics, loyalty tiers, referral incentives, and lifecycle marketing (email & remarketing automations) to boost retention and LTV.",
      },
    ],
    caseStudyContent:
      "The Zyden engagement started as an investment consultation and matured into a full-stack brand build. Hynox delivered investment clarity, a distinctive brand identity, data-backed product selection, operational playbooks, and performance marketing execution. The result: Zyden launched from Tiruchengodu and quickly expanded to global sales with protected margins and growing repeat customers.",
    userStory:
      "As a first-time investor, I want an end-to-end clothing brand solution—from investment planning and brand creation to operations and marketing—so I can launch confidently and scale to global markets without being overwhelmed.",
    outcomes: [
      "Successful launch of Zyden Clothing under the Hynox Subscription Model",
      "Global-ready e-commerce and logistics setup from Tiruchengodu to international markets",
      "Performance marketing delivered profitable growth with a 300% ROI within 6 months",
      "Data-backed product mix and pricing improved conversions and margins",
      "Retention systems (subscriptions, loyalty, email automations) increased repeat purchases",
    ],
    whyItMatters:
      "This case shows how Hynox transforms an investor’s uncertainty into a scalable global brand—combining investment clarity, brand strategy, robust operations, and performance marketing to deliver sustainable profitability.",
    callToAction:
      "Have capital and a vision, but need a proven path? Launch your clothing brand with the Hynox Subscription Model and scale globally—confidently.",
    finalSolution:
      "A complete A–Z brand-build for Zyden Clothing: investment planning and ROI mapping, brand identity and product strategy, Tirupur-based sourcing and production workflows, global e-commerce infrastructure, and performance marketing for profitable international growth.",
  },
  {
    id: "b7a23f4a-5f92-4d89-9df7-2aa6c915e872",
    clientName: "NSK Tex",
    title: "Scaling an E-commerce Clothing Brand with Performance Marketing",
    initialConversation:
      "NSK Tex, a Tamil Nadu-based clothing brand targeting Gen Z fashion shoppers, approached us with inconsistent sales, high returns, and fake COD orders. They had a trendy and affordable product line but struggled with digital marketing and profitability.",
    overview:
      "NSK Tex is an e-commerce clothing brand built for Gen Z. Despite having trendy, affordable fashion products, the brand faced inconsistent sales and major operational challenges like high return rates and fake COD orders. With a limited budget, they needed smart, results-driven marketing and operational solutions.",
    detailedConversations: [
      {
        clientChallenge:
          "We know Gen Z loves fast fashion. We’ve built a trendy and affordable product line—but sales are inconsistent. We can’t seem to crack digital marketing, and our budget is so limited.",
        hynoxResponse:
          "You don’t need a big budget. You need smart, performance-driven campaigns. We’ll test, optimize, and focus only on strategies that bring orders.",
      },
      {
        clientChallenge:
          "We tried running ads before, but clicks didn’t convert. We don’t want to waste money again.",
        hynoxResponse:
          "Instead of broad ads, we hyper-targeted Gen Z by their interests, fashion trends, and purchase intent. Every rupee went toward attracting real buyers. Plus, we tracked campaigns in real time—switching immediately if anything underperformed.",
      },
      {
        clientChallenge:
          "Good news: sales are coming in. Bad news: over 100 returns already! Plus, fake COD orders. We’re bleeding money on logistics.",
        hynoxResponse:
          "That’s common in COD-heavy markets. We didn’t remove COD but made it smarter—customers choosing COD paid 5–10% upfront. Fake buyers won’t pay, genuine buyers will. This acted as a filter system.",
      },
    ],
    caseStudyContent:
      "We helped NSK Tex scale their e-commerce clothing brand by solving both sales and operational challenges. First, we launched performance-driven marketing campaigns hyper-targeting Gen Z shoppers, which generated 300+ confirmed orders with minimal spend. Then, we tackled their returns and COD issues by implementing a partial advance COD system, eliminating fake orders and returns. This improved logistics efficiency, protected margins, and increased customer trust.",
    userStory:
      "As an e-commerce clothing brand, I want to increase sales through cost-effective marketing while eliminating fake COD orders and high returns, so I can grow profitably and build long-term customer trust.",
    outcomes: [
      "300+ confirmed orders generated at minimal ad spend",
      "100% reduction in fake COD orders",
      "Zero returns after implementing partial advance COD system",
      "Logistics costs saved, profit margins protected",
      "Improved brand trust and repeat customers gained",
    ],
    whyItMatters:
      "This collaboration shows how Hynox helps e-commerce brands not only drive sales but also ensure sustainable profitability. By combining performance marketing with operational fixes, NSK Tex moved from inconsistent sales and losses to building a trusted, scalable fashion brand.",
    callToAction:
      "Want to grow your e-commerce brand profitably like NSK Tex? Let’s build it together.",
    finalSolution:
      "A complete e-commerce growth solution featuring performance marketing campaigns, real-time optimization, partial advance COD system to eliminate fake orders and returns, and long-term customer trust-building strategies.",
  },
  {
    id: "c0f2db8e-64b1-4e5f-9ac6-91e5fa7e9f21",
    clientName: "JP Aluminium Interior",
    title: "Transforming Interior Business with Automation",
    initialConversation:
      "JP Aluminium Interior, a Tamil Nadu-based interior and aluminium works company, approached us with multiple operational challenges. They were losing leads, juggling multiple tools for quotations and invoices, and struggling with worker updates at sites and customer communication.",
    overview:
      "JP Aluminium Interior is a leading interior and aluminium works provider in Tamil Nadu. Their challenges revolved around managing leads, quotations, and site updates using manual methods and multiple platforms. They needed an integrated solution that simplified operations, improved customer satisfaction, and eliminated human errors.",
    detailedConversations: [
      {
        clientChallenge:
          "We often forget or lose customer details after calls. Leads are written in notebooks or Excel, and sometimes never followed up.",
        hynoxResponse:
          "We built a dedicated lead capture form on a Hynox subdomain exclusively for JP Aluminium Interior. After every call, staff send the link to the customer. Customers just enter their Name and City, and the data automatically updates in the app's Leads Section.",
      },
      {
        clientChallenge:
          "We use different platforms for quotations and invoices, which wastes time and looks unprofessional.",
        hynoxResponse:
          "We integrated a quotation and invoice generator inside their app. Now, JP Aluminium Interior can prepare and send professional quotations and invoices in minutes from a single system.",
      },
      {
        clientChallenge:
          "Once workers go to the site, we don’t get proper updates. We rely on phone calls or WhatsApp, which is not reliable.",
        hynoxResponse:
          "We created a Worker Login system. Each worker can log in and update daily progress with measurements, materials used, photos, and notes. Admin can monitor real-time updates directly in the app.",
      },
      {
        clientChallenge:
          "Customers keep calling daily to ask about project updates. This interrupts work and creates unnecessary pressure.",
        hynoxResponse:
          "We developed a Customer Login portal. Once a project begins, customers can track work progress directly. Every worker update is visible to both admin and customer, reducing the need for constant calls.",
      },
    ],
    caseStudyContent:
      "We provided JP Aluminium Interior with a custom all-in-one automation solution. From solving their lead management problem with an exclusive subdomain form to integrating quotations and invoices, building worker login for site updates, and creating a customer login for project transparency, we transformed their workflow. This streamlined operations, reduced manual errors, saved time, and improved customer trust.",
    userStory:
      "As an interior business owner, I want a single platform to manage leads, create quotations, monitor workers, and keep customers updated, so I can run my business more efficiently and improve client satisfaction without constant manual work.",
    outcomes: [
      "100% lead capture with zero data loss",
      "Quotations and invoices generated 70% faster in one app",
      "Real-time worker updates from project sites",
      "50% fewer customer calls due to transparent updates",
      "Improved professionalism and client trust",
    ],
    whyItMatters:
      "This collaboration shows how Hynox helps local businesses modernize their operations. With automation and a single integrated app, JP Aluminium Interior eliminated inefficiencies, improved productivity, and gained a competitive edge in their industry.",
    callToAction:
      "Want to automate your interior or construction business like JP Aluminium Interior? Let's build it together.",
    finalSolution:
      "A complete business automation app for JP Aluminium Interior featuring lead management, integrated quotations and invoices, worker login for site updates, customer login for project transparency, and full operational support—allowing the business to save time, boost client trust, and focus on growth.",
  },
  {
    id: "8f610bcd-5e57-40c2-9ff1-2be6ef7c132f",
    clientName: "Graasp",
    title: "Taking a Clothing Brand Global",
    initialConversation:
      "Graasp, a Finland-based client, approached us wanting to start their own clothing brand with unique geographical challenges - managing operations from Finland while producing in India and targeting the UK market.",
    overview:
      "Graasp is a Finland-based startup looking to establish a global clothing brand with production in Tirupur, India, and target market in the UK. They needed comprehensive support to bridge geographical gaps and create a sustainable, globally-focused brand identity.",
    detailedConversations: [
      {
        clientChallenge:
          "We want to start our own clothing brand. But our base is in Finland, and production will be in Tirupur, India. How can we manage this distance without losing control?",
        hynoxResponse:
          "We assured them of end-to-end support—from fabric sourcing, design, and sampling to production and export. With our local presence in Tirupur, we became their eyes and ears on the ground, ensuring smooth communication and real-time updates.",
      },
      {
        clientChallenge:
          "Our target market is the UK. But we don't know the right product mix, sizing, and trends that will work there.",
        hynoxResponse:
          "We conducted market research for the UK, adapted to international size charts, and guided them with fashion-forward yet practical designs. This ensured Graasp's collection would connect instantly with UK consumers.",
      },
      {
        clientChallenge:
          "Logistics worry us. How do we move products from India to the UK efficiently while we manage things from Finland?",
        hynoxResponse:
          "We created a streamlined supply chain, working with trusted shipping partners to handle everything from customs clearance to last-mile delivery in the UK. This gave Graasp the confidence to focus on brand building instead of operational headaches.",
      },
      {
        clientChallenge:
          "We don't just want to sell clothes. We want to build a strong brand identity with a global story.",
        hynoxResponse:
          "We positioned Graasp as Finland-born, India-powered, and globally focused. We designed a brand book that covered logo, colors, and storytelling—highlighting sustainability, premium quality, and affordability.",
      },
    ],
    caseStudyContent:
      "We provided comprehensive end-to-end support for Graasp's global clothing brand venture. Starting with their geographical challenge of managing operations from Finland while producing in Tirupur, India, we became their local presence and operational backbone. Our services included fabric sourcing, design consultation, sampling, production management, and export coordination. We conducted thorough UK market research to understand consumer preferences, sizing requirements, and fashion trends, then adapted their product line accordingly. For logistics, we established a streamlined supply chain with trusted shipping partners, handling customs clearance and last-mile delivery to the UK market. Beyond operations, we crafted their brand identity, positioning Graasp as a Finland-born, India-powered, globally-focused brand with emphasis on sustainability, premium quality, and affordability.",
    userStory:
      "As an international entrepreneur starting a clothing brand, I want to establish production in India while maintaining control from Finland and successfully enter the UK market, so I can build a sustainable global brand without getting overwhelmed by operational complexities.",
    outcomes: [
      "Graasp now has a production-ready supply chain from Tirupur to the UK",
      "The brand is set to launch with a global identity and sustainable positioning",
      "With Hynox handling backend operations, the founders can fully concentrate on growing sales and brand presence in Europe",
    ],
    whyItMatters:
      "This collaboration shows how Hynox helps international entrepreneurs turn an idea into a global clothing brand. Whether you're in Finland, the UK, or anywhere in the world, we bridge the gap between your vision and India's textile strength.",
    callToAction:
      "Ready to start your brand like Graasp? Let's build it together.",
    finalSolution:
      "A complete global clothing brand solution featuring production-ready supply chain from Tirupur to UK, comprehensive brand identity with sustainable positioning, market-research-driven product development, and full operational support allowing founders to focus entirely on sales and brand growth in European markets.",
  },
];
