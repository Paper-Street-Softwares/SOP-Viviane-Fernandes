import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './styles/utilities.css'
// import './index.css'

// import content from './content/content.jsx'

import Index from './pages/Index.jsx'
// import Lp01 from './pages/Lp01.jsx'

// import WhatsAppLinks from './components/interactives/WhatsappLinks.jsx'

// Layout fixo para o modo "site"
// import SiteLayout from './pages/SiteLayoult.jsx'
// import Features from "./components/sections/Features.jsx";
// import About from "./components/sections/About.jsx";
// import Faq from "./components/sections/Faq.jsx";

// import Maps from './components/sections/Maps.jsx'
// import AboutSocial from './components/sections/AboutSocial.jsx'
// import CartaoSocio from './components/sections/CartaoSocio.jsx'
import { ColorModeProvider } from './assets/context/ColorModeContext.jsx'
// import IndexLpi from './pages/IndexLpi.jsx'

// Altere aqui para "LP" ou "site"
const mode = 'LP' // só muda isso e o resto se adapta

// Função para normalizar o nome (remover acentos e espaços)
// function formatarNome(nome) {
//   return nome
//     ?.normalize('NFD') // separa acentos
//     .replace(/[\u0300-\u036f]/g, '') // remove acentos
//     .replace(/\s+/g, '') // remove espaços
//     .trim()
// }
// const socioNome = content?.texts?.socios?.socio1?.nome || ''
// const socioRota = socioNome ? formatarNome(socioNome) : ''

ReactDOM.createRoot(document.getElementById('root')).render(
  <ColorModeProvider>
    {' '}
    <Router>
      <Routes>
        <Route path="/" element={<Index mode={mode} />} />

        {/* <Route path="/:nome" element={<CartaoSocio />} /> */}
      </Routes>
    </Router>
  </ColorModeProvider>
)
