import React from 'react'
import { Button } from '../interactives/ButtonNovoTemplate'
import { motion } from 'framer-motion'
import { MapPin, MessageCircle, Phone, ArrowRight } from 'lucide-react'
import content from '../../content/content'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import ButtonReflexo from '../interactives/ButtonReflexo'

function HeroTemplateNovo() {
  return (
    <SectionArea
      id="home"
      paddingTopAndBottom={false}
      className="bg-transparent"
    >
      <section className="relative min-h-[90vh] w-full pt-[150px] pb-[70px] phone3:pt-[170px] tablet1:pt-[200px] desktop1:pt-[180px] flex items-center justify-center overflow-hidden font-mainFont">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-[-10px] h-full w-[80%] bg-terciary -skew-x-12 translate-x-2/4 z-0" />
        <div className="absolute bottom-0 left-0 w-[40%] h-1/2 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl -translate-x-1/4 translate-y-1/4 z-0" />
        <SectionWrapper>
          <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-8 order-2 lg:order-1 flex flex-col items-start desktop1:items-start"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border shadow-sm text-primary text-xs font-secondFont font-bold tracking-wide uppercase">
                <span>
                  <MapPin className="w-4 h-4" />
                </span>
                {content.texts.hero.miniTag}
              </div>

              <h2 className="text-start desktop1:text-start text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.1] text-foreground tracking-tight">
                {content.texts.hero.title}
              </h2>

              <p className="text-start desktop1:text-start text-lg md:text-xl text-mutedForeground leading-relaxed max-w-lg font-secondFont font-light">
                {content.texts.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row lg:flex-col desktop2:flex-row gap-4 pt-4">
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
                  label={content.texts.hero.ctaButtonText}
                  colorMode="dark"
                />
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
                  label={content.texts.hero.ctaButtonTextSecondary}
                  colorMode="light"
                />
              </div>

              <div className="flex justify-start items-center gap-3 text-sm text-mutedForeground pt-6 border-t border-border/50 w-full">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="font-secondFont font-light">
                  {content.texts.hero.obsHero.text}
                </span>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] md:aspect-[4/5] shadow-2xl lg:aspect-[3/4] border-[8px] border-white ring-1 ring-black/5 bg-gray-100">
                <img
                  src="/lawHero.webp"
                  alt={content.texts.hero.alt}
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                  width={790}
                  height={992}
                  fetchPriority="high"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Card */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-8 left-6 right-6 md:left-8 md:right-8 bg-white/95 backdrop-blur-md p-2 phone3:p-6 rounded-2xl shadow-lg border border-white/50 z-10"
                >
                  <div className="flex items-center gap-4 phone3:gap-5">
                    <div className="flex-shrink-0 w-8 h-8 phone3:w-12 phone3:h-12 bg-secondary rounded-full flex items-center justify-center text-primary">
                      <Phone className="w-4 h-4 phone3:w-6 phone3:h-6" />
                    </div>
                    <div>
                      <p className="text-paragraph1 phone3:text-xs font-secondFont font-bold text-primary tracking-widest uppercase mb-1">
                        Precisa de ajuda?
                      </p>
                      <p className="text-paragraph2 phone3:text-lg font-mainFont font-bold text-foreground leading-none">
                        Consultoria Especializada
                      </p>
                    </div>
                    <div className="ml-auto">
                      <ButtonReflexo
                        padding="p-4"
                        icon={<ArrowRight className="w-4 h-4" />}
                        link={content.texts.links.ctaWhatsapp}
                        colorMode="dark"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 text-primary/10 hidden md:block">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <pattern
                    id="dots"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="2" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#dots)" />
                </svg>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      </section>
    </SectionArea>
  )
}

export default HeroTemplateNovo
