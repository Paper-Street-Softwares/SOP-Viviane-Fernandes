import { lazy, Suspense } from 'react'
import { useColorMode } from '../assets/context/ColorModeContext'

// CRÍTICO — carregamento imediato (LCP)
import NavbarNovaTemplate from '../components/sections/NavbarNovaTemplate'
import HeroTemplateNovo from '../components/sections/HeroTemplateNovo'

// Lazy — abaixo da dobra
const FeaturesNovaTemplate = lazy(() =>
  import('../components/sections/FeaturesNovaTemplate')
)
const CtaNovoTemplate = lazy(() =>
  import('../components/sections/CtaNovoTemplate')
)
const AboutNovoTemplate = lazy(() =>
  import('../components/sections/AboutNovoTemplate')
)
const FooterNovoTemplate = lazy(() =>
  import('../components/sections/FooterNovoTemplate')
)
const WhatsappAnimated = lazy(() =>
  import('../components/interactives/WhatsAppAnimated')
)

export default function Index() {
  const { colorMode, setColorMode } = useColorMode()

  return (
    <>
      {/* Render imediato */}
      <NavbarNovaTemplate />

      <main>
        {/* LCP — NÃO usar lazy */}
        <HeroTemplateNovo />

        {/* Lazy sections */}
        <Suspense fallback={null}>
          <FeaturesNovaTemplate />
          <CtaNovoTemplate />
          <AboutNovoTemplate />
          <FooterNovoTemplate mapa={false} />
          <WhatsappAnimated />
        </Suspense>
      </main>
    </>
  )
}
