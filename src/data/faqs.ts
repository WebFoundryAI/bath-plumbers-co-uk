import { BRAND } from './brand';
import { getLocationHubContent } from './locationHubContent';

export interface FAQ {
  question: string;
  answer: string;
}

export const GENERIC_FAQS: FAQ[] = [
  {
    question: "Do you charge a call-out fee?",
    answer: `No. When you book ${BRAND.brandName}, there is no separate fee just for attending your property. You are only invoiced for the actual drainage work we carry out, and we confirm the price before we start.`,
  },
  {
    question: "How quickly can you arrive in an emergency?",
    answer: `For pressing drainage problems across ${BRAND.serviceAreaLabel}, our nearest available engineer is typically on site within sixty to ninety minutes. Response times may vary during peak periods or severe weather, but we always communicate realistic arrival estimates when you call.`,
  },
  {
    question: "Are you available for emergencies?",
    answer: `Absolutely. Our emergency drainage team operates twenty-four hours a day, seven days a week, including bank holidays. Whether it is a sewage backup at midnight in Bathwick or a flooded manhole on a Sunday morning in Widcombe, call ${BRAND.phoneFormatted} and we will dispatch an engineer immediately.`,
  },
  {
    question: "How much does drain unblocking cost?",
    answer: "Every blockage is different, so we provide a fixed quote based on the access available, the severity of the obstruction, and whether any structural repairs are required. You will know the exact cost before we begin, with no surprise charges added afterwards.",
  },
  {
    question: "What is included in your service visit?",
    answer: "Each visit includes a thorough assessment of the drainage issue, inspection of available access points, clearance of the blockage using appropriate equipment, and practical advice on how to reduce the likelihood of the problem recurring. We also provide a written summary of the work completed.",
  },
  {
    question: "Do you work with landlords and commercial properties?",
    answer: "Yes. We regularly assist private landlords, letting agents, property management companies, restaurants, offices, retail premises, and schools across Bath and Somerset. We can set up ongoing maintenance agreements for properties that require periodic drain jetting or inspection.",
  },
  {
    question: "Do you provide a guarantee on your work?",
    answer: "All drainage work carried out by our engineers is backed by a written guarantee. If the same issue returns within the guarantee period, we will revisit and resolve it at no additional charge.",
  },
];

export const SERVICE_FAQS: Record<string, FAQ[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you clear a blocked drain?",
      answer: "The majority of residential blockages in Bath are resolved within one to two hours of our engineer arriving. More complex obstructions, such as those caused by tree root ingress or collapsed pipe sections, may take longer, and we will give you an honest timeframe after our initial on-site assessment.",
    },
    {
      question: "What causes drains to become blocked?",
      answer: "The most frequent culprits we encounter across Bath and Somerset are accumulated cooking fats and grease, hair and soap residue, tree roots penetrating pipe joints, limescale buildup from Bath's hard water supply, and foreign objects such as wet wipes and sanitary items. A CCTV camera inspection can pinpoint the precise cause.",
    },
    {
      question: "Will clearing a blocked drain damage my pipes?",
      answer: "Not when handled professionally. Our engineers select the appropriate clearing technique based on the pipe material and its condition. For older clay pipes commonly found beneath Bath's Georgian and Victorian properties, we adjust water pressure and nozzle choice to avoid any risk of damage.",
    },
  ],
  "cctv-drain-surveys": [
    {
      question: "What does a CCTV drain survey show?",
      answer: "The camera captures high-definition footage of the interior of your drainage pipes, revealing blockages, cracks, displaced joints, root ingress, limescale accumulation, and any sections that have collapsed or deformed. You receive the full recording along with an annotated written report.",
    },
    {
      question: "Do I need a drain survey before buying a house?",
      answer: "We strongly advise it, particularly for older Bath properties where original clay or pitch fibre pipes may have deteriorated. A pre-purchase survey can uncover hidden defects that would cost thousands to repair, giving you the evidence to renegotiate the price or request the seller to fix the issues before completion.",
    },
    {
      question: "How long does a CCTV drain survey take?",
      answer: "A standard residential survey in Bath typically takes between one and two hours, depending on the length and complexity of the drainage network. We walk you through the findings on site and follow up with the full report and footage, usually within twenty-four hours.",
    },
  ],
  "drain-jetting": [
    {
      question: "Is high-pressure drain jetting safe for old pipes?",
      answer: "Yes, provided it is carried out by experienced engineers who understand the limitations of different pipe materials. We routinely jet clay, cast iron, and PVC pipes across Bath's older housing stock, always calibrating the pressure to suit the pipe type and condition.",
    },
    {
      question: "How often should drains be jetted?",
      answer: "For a typical Bath household, an annual or biannual jetting session keeps pipes in excellent condition and prevents gradual buildup from developing into a blockage. Commercial kitchens, restaurants, and takeaways usually benefit from quarterly jetting due to the higher volume of fats and grease entering the system.",
    },
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to an emergency?",
      answer: `Our target is to have an engineer at your door within one to two hours of your call, covering all areas across ${BRAND.serviceAreaLabel}. For urgent situations such as sewage flooding or multiple blocked fixtures, call ${BRAND.phoneFormatted} and we will prioritise your job.`,
    },
    {
      question: "Do you charge extra for out-of-hours emergencies?",
      answer: "We maintain consistent, competitive pricing regardless of the time of day or night. You will receive a clear fixed quote before any work begins, even at three in the morning. There are no hidden premiums for weekends or bank holidays.",
    },
  ],
};

export function getServiceFAQs(serviceSlug: string): FAQ[] {
  const serviceFaqs = SERVICE_FAQS[serviceSlug] || [];
  return [...serviceFaqs, ...GENERIC_FAQS];
}

export function getLocationFAQs(locationName: string): FAQ[] {
  // Map location name to slug for content lookup
  const locationSlug = locationName.toLowerCase().replace(/\s+/g, '-');
  const hubContent = getLocationHubContent(locationSlug);

  if (hubContent && hubContent.localFAQs) {
    return hubContent.localFAQs as FAQ[];
  }

  // Fallback to generic location FAQs if location-specific content not found
  return [
    {
      question: `Do you cover ${locationName}?`,
      answer: `Yes, ${BRAND.brandName} provides comprehensive drainage services throughout ${locationName} and the surrounding locations of ${BRAND.serviceAreaLabel}.`,
    },
    {
      question: `How quickly can you get to ${locationName}?`,
      answer: `We typically arrive within 1-2 hours for emergency callouts in ${locationName}. For scheduled appointments, we offer flexible booking times.`,
    },
    {
      question: `What drainage services do you offer in ${locationName}?`,
      answer: `We offer all our services in ${locationName} including drain unblocking, CCTV surveys, drain jetting, repairs, and 24/7 emergency callouts.`,
    },
  ];
}

export const PAGE_FAQS: FAQ[] = [
  {
    question: "How quickly can you respond to an emergency callout?",
    answer: 'Our engineers aim to reach your property within sixty to ninety minutes for <a href="/services/emergency-drain-services/" class="text-primary hover:underline">emergency drainage callouts</a> anywhere in <a href="/locations/bath/" class="text-primary hover:underline">Bath</a> and the surrounding Somerset area. The team operates around the clock, so whether your drain backs up at lunchtime or at midnight, help is on its way.'
  },
  {
    question: "Do you charge a call-out fee?",
    answer: "There is no call-out fee. You pay only for the work we actually carry out. Before we begin, we provide a clear, written quote so there are no surprises when the job is finished."
  },
  {
    question: "What locations do you cover?",
    answer: 'We serve the whole of <a href="/locations/bath/" class="text-primary hover:underline">Bath</a> and a wide area of Somerset and Wiltshire, including <a href="/locations/bristol/" class="text-primary hover:underline">Bristol</a>, <a href="/locations/keynsham/" class="text-primary hover:underline">Keynsham</a>, <a href="/locations/bradford-on-avon/" class="text-primary hover:underline">Bradford on Avon</a>, Radstock, Midsomer Norton, Frome, Corsham, Chippenham, Trowbridge, Wells, Shepton Mallet, Melksham, Warminster, and Westbury. Browse <a href="/locations/" class="text-primary hover:underline">all areas we cover</a>.'
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, contactless and chip-and-pin card payments, and bank transfers. Payment is collected once the work is completed to your satisfaction."
  },
  {
    question: "Can you help with commercial drainage problems?",
    answer: 'Certainly. We work with shops, offices, restaurants, pubs, schools, and industrial premises across Bath and Somerset. Services range from routine <a href="/services/drain-jetting/commercial-jetting/" class="text-primary hover:underline">commercial drain jetting</a> and maintenance contracts to emergency <a href="/services/blocked-drains/" class="text-primary hover:underline">blockage clearance</a> and <a href="/services/drain-repairs/" class="text-primary hover:underline">structural repairs</a>.'
  },
  {
    question: "What is a CCTV drain survey and when is it needed?",
    answer: 'A <a href="/services/cctv-drain-surveys/" class="text-primary hover:underline">CCTV drain survey</a> sends a miniature camera through your pipes to capture high-definition footage of their internal condition. It is invaluable for diagnosing recurring blockages, assessing damage before repair work, and providing evidence for insurance claims. We also offer dedicated <a href="/services/cctv-drain-surveys/pre-purchase-survey/" class="text-primary hover:underline">pre-purchase surveys</a> for anyone buying property in Bath.'
  },
  {
    question: "How can I prevent blocked drains?",
    answer: 'Avoid rinsing cooking fats and oils down the sink, fit mesh strainers over plugholes to catch hair and food particles, and never flush wet wipes or sanitary products. Periodic professional <a href="/services/drain-jetting/" class="text-primary hover:underline">drain jetting</a> removes buildup before it becomes a problem. Our <a href="/blog/prevent-blocked-drains-kitchen/" class="text-primary hover:underline">kitchen drain prevention guide</a> covers additional practical steps.'
  },
  {
    question: "Are your engineers qualified and insured?",
    answer: 'Every engineer on our team is fully trained in modern drainage techniques, holds relevant industry qualifications, and is covered by comprehensive public liability insurance. You can learn more about our standards on the <a href="/about/" class="text-primary hover:underline">about us</a> page.'
  }
];

/** Alias used by the homepage */
export const HOMEPAGE_FAQS = PAGE_FAQS;
