import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { X } from 'lucide-react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import {
  // Instagram,
  // Facebook,
  // Linkedin,
  MapPin,
  Phone,
  Mail,
  // Map,
} from 'lucide-react'
import content from '../../content/content'
import { Link } from 'react-scroll'
import FooterSocialIcons from '../sectionElements/footer/FooterSocialIcons'

function FooterNovoTemplate({ mapa }) {
  const labels = content.texts.navbar.menuItems
  const ids = content.texts.navbar.menuId
  const [visible, setVisible] = useState(false)
  const abrirModal = () => {
    setVisible(true)
  }

  const openDialog = async () => {
    await import('primereact/resources/themes/lara-light-cyan/theme.css')
    setVisible(true)
  }

  const grid = mapa ? 'lg:grid-cols-4' : 'lg:grid-cols-3'

  return (
    <SectionArea className="bg-white pb-4" paddingbot={false}>
      <SectionWrapper>
        <footer className="text-black/70">
          <div className="container mx-auto">
            <div
              className={`grid md:grid-cols-3 ${grid} items-start gap-12 mb-8 w-full`}
            >
              <div className="space-y-6">
                <img
                  src={content.texts.navbar.logo.img}
                  alt={content.texts.navbar.logo.alt}
                  className="w-[60%] tablet1:w-[70%] desktop1:w-[50%]"
                  width={187}
                  height={119}
                />
                <p className="text-black/70 leading-relaxed font-secondFont font-light">
                  {content.texts.footer.footerText}
                </p>
                <div className="flex gap-4">
                  <FooterSocialIcons
                    instagram={true}
                    facebook={true}
                    linkedin={true}
                    tiktok={true}
                    x={true}
                    youtube={true}
                  />
                </div>
              </div>

              <div>
                <h1 className="font-bold font-mainFont text-black/70 text-lg mb-6">
                  Links Rápidos
                </h1>
                <ul className="space-y-4 font-secondFont font-light">
                  {labels.map((item, index) => (
                    <li key={item}>
                      <Link
                        to={ids[index]}
                        aria-label={`Link para ${item}`}
                        smooth={true}
                        duration={500}
                        offset={-90}
                        spy={true}
                        hashSpy={true}
                        tag="a"
                        href={`#${ids[index]}`}
                        className="cursor-pointer bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 hover:bg-[length:100%_2px]"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h1 className="font-bold font-mainFont text-black/70 text-lg mb-6">
                  Contato
                </h1>
                <ul className="space-y-4 text-black/70">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 shrink-0 text-black/70" />
                    <span className="font-secondFont font-light">
                      {content.texts.infos.adress}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 shrink-0 text-black/70" />
                    <span className="font-secondFont font-light">
                      {content.texts.infos.phone}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 shrink-0 text-black/70" />
                    <span className="font-secondFont font-light text-paragraph3 tablet1:text-paragraph1 desktop1:text-paragraph3">
                      {content.texts.infos.emailSecundario}
                    </span>
                  </li>
                </ul>
                <p className="my-6 text-paragraph3">
                  {content.texts.footer.fraseObsFooter}
                </p>
              </div>

              {mapa && (
                <div className="h-64 rounded-xl overflow-hidden bg-white/5">
                  <iframe
                    src={content.texts.maps.embedsrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
              )}
            </div>

            <div className="border-t border-white/10 text-center font-secondFont text-sm text-black/70">
              <div className="desktop2:flex gap-8 justify-center">
                {' '}
                <p>&copy; {content.texts.footer.copyrightLine}</p>
                <br />
                <div className="text-sm text-black/70 font-secondFont ">
                  <button
                    onClick={openDialog}
                    aria-label="Abre um Modal com os termos da Política de privacidade"
                    className="underline cursor-pointer"
                  >
                    Políticas de privacidade
                  </button>{' '}
                  - Desenvolvido com excelência por{' '}
                  <a
                    target="_blank"
                    href="https://paperstreet.com.br"
                    className="underline"
                  >
                    Paper Street
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Dialog
            className="font-secondFont"
            closeIcon={<X size={20} />}
            // header={
            //   <span className="text-black/70">Políticas de privacidade</span>
            // }
            visible={visible}
            onHide={() => setVisible(false)}
            style={{ width: '50vw' }}
            breakpoints={{
              '4000px': '641px',
              '1024px': '641px',
              '641px': '85vw',
            }}
          >
            {content.texts.footer.privacidade}
          </Dialog>
        </footer>
      </SectionWrapper>
    </SectionArea>
  )
}

export default FooterNovoTemplate

// comentario