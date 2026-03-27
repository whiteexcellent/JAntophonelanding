import * as Accordion from "@radix-ui/react-accordion";
import { MotionReveal } from "./MotionReveal";
import { SectionHeading } from "./SectionHeading";
import { SectionBackdrop } from "./SectionBackdrop";

export function FAQSection({ section }) {
  return (
    <section className="section faq-section" id={section.id}>
      <SectionBackdrop variant={section.backdropMode} />
      <div className="container">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} />
        <Accordion.Root className="faq-list" type="single" collapsible defaultValue={section.items[0]?.question}>
          {section.items.map((item, index) => (
            <MotionReveal key={item.question} className="faq-item-wrap" delay={index * 60}>
              <Accordion.Item className="faq-item" value={item.question}>
                <Accordion.Header>
                  <Accordion.Trigger className="faq-question">
                    <span>{item.question}</span>
                    <span className="faq-toggle" aria-hidden="true"></span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="faq-answer">
                  <p>{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </MotionReveal>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
