// import React from 'react'
// import SectionArea from '../sectionElements/SectionArea'
// import SectionWrapper from '../sectionElements/SectionWrapper'
// import {
//   Accordion,
//   AccordionItem,
//   AccordionTrigger,
//   AccordionContent,
// } from '../interactives/FaqNovo'
// import content from '../../content/content'

// function FaqNovoTemplate() {
//   const faqs = Object.values(content.texts.faq.questions)
//   return (
//     <SectionArea id="faq">
//       <SectionWrapper>
//         <section className=" bg-white w-full">
//           <div className="container mx-auto max-w-3xl">
//             <div className="text-center mb-6">
//               <span className="text-primary font-bold font-secondFont tracking-wider uppercase text-xs mb-2 block">
//                 {content.texts.faq.miniTag}
//               </span>
//               <h2 className="text-3xl md:text-4xl font-mainFont font-medium text-foreground">
//                 {content.texts.faq.title}
//               </h2>
//             </div>

//             <Accordion type="single" collapsible className="w-full">
//               {faqs.map((faq, idx) => (
//                 <AccordionItem
//                   key={idx}
//                   value={`item-${idx}`}
//                   className="border-b border-border"
//                 >
//                   <AccordionTrigger className="text-lg font-medium font-mainFont text-left text-textPadrao hover:text-primary py-6">
//                     {faq.question}
//                   </AccordionTrigger>
//                   <AccordionContent className="text-mutedForeground font-secondFont font-light pb-6 leading-relaxed">
//                     {faq.answer}
//                   </AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>
//         </section>
//       </SectionWrapper>
//     </SectionArea>
//   )
// }

// export default FaqNovoTemplate
