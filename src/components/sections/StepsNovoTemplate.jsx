// import React from 'react'
// import SectionArea from '../sectionElements/SectionArea'
// import content from '../../content/content'
// import SectionWrapper from '../sectionElements/SectionWrapper'

// function StepsNovoTemplate() {
//   const steps = Object.values(content.texts.steps.cards)

//   return (
//     <SectionArea className="bg-secondary/20">
//       <SectionWrapper>
//         <section>
//           <div className="container mx-auto">
//             <div className="grid lg:grid-cols-2 gap-16 items-center">
//               <div className="order-2 lg:order-1 relative">
//                 <div className="absolute inset-0 bg-primary/5 rounded-[2rem] rotate-6 opacity-110 " />
//                 <img
//                   src={content.texts.steps.img}
//                   alt={content.texts.steps.alt}
//                   className="relative rounded-[2rem] shadow-xl w-[90%] m-auto scale-105 hover:scale-100 transition-transform duration-700"
//                   width={726}
//                   height={726}
//                 />
//               </div>

//               <div className="order-1 lg:order-2 space-y-12">
//                 <div>
//                   <span className="text-primary font-bold font-secondFont tracking-wider uppercase text-xs mb-2 block">
//                     {content.texts.steps.miniTag}
//                   </span>
//                   <h2 className="text-3xl md:text-4xl font-mainFont font-medium text-foreground mb-6">
//                     {content.texts.steps.title}
//                   </h2>
//                 </div>

//                 <div className="space-y-8">
//                   {steps.map((item, idx) => (
//                     <div key={idx} className="flex gap-6 relative">
//                       {idx !== 3 && (
//                         <div className="absolute left-[1.65rem] top-12 bottom-0 w-0.5 bg-primary/20" />
//                       )}
//                       <div className="w-14 h-14 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center text-xl font-bold font-mainFont shrink-0 shadow-sm z-10">
//                         {item.stepNumber}
//                       </div>
//                       <div className="pt-2">
//                         <h3 className="text-xl font-bold font-mainFont mb-2 text-textPadrao">
//                           {item.cardTitle}
//                         </h3>
//                         <p className="text-mutedForeground font-secondFont font-light">
//                           {item.cardDescription}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </SectionWrapper>
//     </SectionArea>
//   )
// }

// export default StepsNovoTemplate
