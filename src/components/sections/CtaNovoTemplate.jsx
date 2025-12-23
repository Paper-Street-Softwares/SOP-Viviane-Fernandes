import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import { Button } from '../interactives/ButtonNovoTemplate'
import { MessageCircle } from 'lucide-react'
import content from '../../content/content'
import ButtonReflexo from '../interactives/ButtonReflexo'

function CtaNovoTemplate() {
  return (
    <div className="bg-primary">
      <SectionArea className="relative z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5 bg-repeat z-0"></div>

        <SectionWrapper className="relative z-10 ">
          <section className="relative overflow-hidden">
            <div className="container mx-auto relative z-10 text-center">
              <span className="font-bold font-secondFont text-white tracking-wider uppercase text-xs mb-2 block">
                {content.texts.ctaSecondary.miniTag}
              </span>
              <h2 className="text-4xl md:text-[48px] leading-[48px] font-mainFont font-light text-white mb-6">
                {content.texts.ctaSecondary.title}
              </h2>
              <p className="text-white/80 text-lg font-secondFont font-light md:text-xl max-w-2xl mx-auto mb-10">
                {content.texts.ctaSecondary.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center py-2">
                <ButtonReflexo
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                    </svg>
                  }
                  link={content.texts.links.ctaWhatsapp}
                  label={content.texts.ctaSecondary.ctaButtonText}
                  colorMode="light"
                />
              </div>
            </div>
          </section>
        </SectionWrapper>
      </SectionArea>
    </div>
  )
}

export default CtaNovoTemplate
