import React from 'react'
import content from '../../content/content'
import { Scale } from 'lucide-react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'

const features = Object.values(content.texts.features.cards)

function FeaturesNovaTemplate() {
  return (
    <SectionArea id="feature">
      <SectionWrapper>
        <section className=" bg-white relative font-mainFont ">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/3]">
                  <img
                    src={content.texts.features.imgFeatures}
                    alt={content.texts.features.alt}
                    className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                    width={798}
                    height={798}
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-tr-3xl rounded-bl-3xl shadow-xl max-w-xs">
                  <p className="font-mainFont text-2xl font-bold mb-2">
                    {content.texts.features.titleMessageFeature}
                  </p>
                  <p className="text-sm font-secondFont font-light opacity-90">
                    {content.texts.features.subtitleMessageFeature}
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-8">
                <div>
                  <span className="text-primary font-bold font-secondFont tracking-wider uppercase text-xs mb-2 block">
                    {content.texts.features.miniTag}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-mainFont font-medium text-foreground mb-4">
                    {content.texts.features.title}
                  </h2>
                  <p className="text-mutedForeground font-secondFont font-light">
                    {content.texts.features.subtitle}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="group p-6 rounded-xl bg-quartenary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-white text-primary mb-4 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <h3 className="font-mainFont font-bold text-lg mb-2 text-textPadrao group-hover:text-white transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-mutedForeground font-secondFont font-light group-hover:text-white/90 transition-colors">
                        {feature.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default FeaturesNovaTemplate
