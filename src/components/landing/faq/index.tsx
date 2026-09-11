import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import JapaneseBrushHeading from "@/components/ui/JapaneseBrushHeading";

const FAQSection = () => {
  const faqData = [
    {
      question: "What is HACKWAVE?",
      answer:
        "A 36-hour hackathon for dedicated builders and innovators. It's one part party, one part work-hard overnight battle against the clock and the competition.",
    },
    {
      question: "When and where is HACKWAVE 3.0?",
      answer:
        "HACKWAVE 3.0 will take place from October 10-12, 2026 at Chameli Devi Group of Institutions (CDGI), Indore.",
    },
    {
      question: "Who can participate?",
      answer:
        "Students currently enrolled in any course in college can participate. Teams must consist of 3 to 5 members.",
    },
    {
      question: "How do I register?",
      answer: (
        <span>
          Registration is live on UNSTOP. Click the button below to register your team.
          <br />
          <a
            href="https://unstop.com/hackathons/hackwave-30-chameli-devi-group-of-institutions-1750278"
            className="inline-block mt-3 px-6 py-2 bg-[#141414] text-[#fcf2e8] rounded-md font-semibold text-base transition-colors hover:bg-[#F52222] text-center shadow-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register on Unstop
          </a>
        </span>
      ),
    },
    {
      question: "How many rounds are there?",
      answer: (
        <span>
          Two rounds:
          <br />
          🖥️ <b>Round 1 – Online Screening (Free):</b> Submit a PPT of a past project your team built on Unstop.
          <br />
          🏫 <b>Round 2 – 36-Hour Offline Finale:</b> Selected teams build a brand new project from scratch at CDGI, Indore.
          <br />
          <br />
          💸 Only teams selected for Round 2 pay a one-time ₹500 registration fee per team to confirm their spot. Meals and stay are covered!
        </span>
      ),
    },
    {
      question: "What do we need to submit in Round 1?",
      answer: (
        <span>
          A PPT (max 10 slides) of a previous project your team has built including:
          <br />
          <ul className="list-disc ml-6 mt-1 space-y-1">
            <li>Team intro</li>
            <li>Project overview</li>
            <li>Features & tech stack</li>
            <li>Screenshots or live links</li>
          </ul>
          <br />
          💡 <b>Note:</b> This project is for screening only and cannot be reused in Round 2!
        </span>
      ),
    },
    {
      question: "Will food and accommodation be provided?",
      answer:
        "Yes! Meals and basic accommodation will be fully arranged for all participants selected for the offline finale.",
    },
    {
      question: "What are the prizes and perks?",
      answer:
        "₹1 Lakh+ prize pool, exclusive swags, national recognition, mentorship from industry experts, and official certificates for all participants.",
    },
  ];

  return (
    <div className="bg-[#141414] text-[#fcf2e8] py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto mt-14">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 flex flex-col items-center">
          <JapaneseBrushHeading>Frequently Asked Questions</JapaneseBrushHeading>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#ccc] max-w-3xl mx-auto px-2 mt-4 sm:mt-6">
            Everything you need to know about HACKWAVE 3.0. Can't find what
            you're looking for? Reach out to us on social media or email.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto px-2 sm:px-4">
          <Accordion
            type="single"
            collapsible
            className="space-y-3 sm:space-y-4"
          >
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#fcf2e8] text-[#141414] rounded-lg sm:rounded-xl border border-[#141414]/10 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-left font-jansina font-normal text-[#141414] hover:text-[#141414]/80 transition-colors text-base sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="text-[#141414]/80 leading-relaxed font-medium text-sm sm:text-base">
                    {typeof faq.answer === "string" ? faq.answer : faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 sm:mt-16 px-2 sm:px-4">
          <div className="bg-[#fcf2e8] text-[#141414] rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto border border-[#141414]/10 sm:mx-auto">
            <h3 className="text-xl sm:text-2xl font-black text-[#141414] mb-3 sm:mb-4">
              Still have questions?
            </h3>
            <p className="text-[#141414]/80 mb-4 sm:mb-6 font-medium text-sm sm:text-base">
              We're here to help! Reach out to our team and we'll get back to
              you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=eds@cdgi.edu.in"
                target="blank"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-[#141414] text-[#fcf2e8] rounded-lg font-medium hover:bg-[#141414]/90 transition-colors text-sm sm:text-base"
              >
                Email Us
              </a>
              <a
                href="https://www.instagram.com/echelondevsociety"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-[#141414] text-[#141414] rounded-lg font-medium hover:bg-[#141414] hover:text-[#fcf2e8] transition-colors text-sm sm:text-base"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
