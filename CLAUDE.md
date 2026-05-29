# CLAUDE.md -- cryptoaz-landing
Leé este archivo antes de tocar cualquier cosa. Sin este archivo el agente inventa. Con este archivo ejecuta.
Actualizado: 2026-05-29

---

## Identidad del repo
- Owner GitHub: cursoscryptoaz-ale
- Repo: https://github.com/cursoscryptoaz-ale/cryptoaz-landing
- Autor commits (siempre --local): Alexis Zeballos <cursos.crypto.az@gmail.com>
- Branch principal: main
- Deploy: Vercel conectado al repo (push a main = deploy automatico)
- URL produccion: https://cryptoaz.com.ar

---

## Proposito del repo
Landing institucional del ecosistema Crypto AZ. Sitio estatico, sin BD propia, sin auth. Punto de entrada para conocer la academia, derivar trafico a:
- cryptoaz.store -- punto de venta
- cryptoaz.online -- campus educativo

NO replica funcionalidad del store ni del campus. Solo presentacion institucional + captura newsletter.

---

## Stack
| Capa | Tecnologia | Version |
|---|---|---|
| Framework | Next.js | 14.2.35 |
| Lenguaje | TypeScript | ^5.x |
| Estilos | Tailwind CSS | ^3.4 |
| Iconos | lucide-react | 1.14.0 (no incluye iconos de redes sociales, se usan SVG inline) |
| Deploy | Vercel | plan gratuito |
| DNS | DonWeb | registros A y CNAME apuntando a Vercel |

---

## Dominios e infraestructura
- cryptoaz.com.ar -> registro A @ apunta a 216.198.79.1 (Vercel)
- www.cryptoaz.com.ar -> registro CNAME apunta a ca5f2f1952c3d3c9.vercel-dns-017.com
- cryptoaz-landing.vercel.app -> deploy automatico de Vercel

CRITICO: los registros MX (Google Workspace), TXT (Resend DKIM, SPF, DMARC, Google site-verification), NS, SOA en DonWeb son criticos para el funcionamiento de email institucional. NO TOCAR.

---

## Estructura del proyecto
```
cryptoaz-landing/
├── app/
│   ├── api/
│   │   └── newsletter/
│   │       └── route.ts        -- POST email, por ahora console.log, destino pendiente
│   ├── quienes-somos/
│   │   └── page.tsx            -- pagina del equipo con placeholders de fotos
│   ├── globals.css             -- variables CSS y animacion ticker
│   ├── layout.tsx              -- metadata OpenGraph, html lang="es"
│   └── page.tsx                -- Hero + Ticker + About + Offerings + SocialLinks + Newsletter + Footer
├── components/
│   ├── About.tsx               -- seccion sobre nosotros, 2 columnas
│   ├── Footer.tsx              -- links + "Desarrollado por AIZ Solutions"
│   ├── Hero.tsx                -- logo + eyebrow + headline + CTA al store
│   ├── Newsletter.tsx          -- formulario email, llama a /api/newsletter
│   ├── Offerings.tsx           -- 3 cards: membresias, capacitaciones sueltas, comunidad
│   ├── SocialLinks.tsx         -- Instagram, Facebook, YouTube, LinkedIn con SVG inline
│   ├── Team.tsx                -- (DEPRECADO, no se usa en index, se mantiene por si hace falta)
│   └── Ticker.tsx              -- marquesina top 10 CoinGecko, actualizacion 60s
├── tailwind.config.ts          -- animacion ticker definida
├── package.json
└── .gitignore                  -- incluye prompt.md
```

---

## Variables CSS
Definidas en app/globals.css:
- --brand: #a78bfa (violeta principal)
- --brand-dark: #6B3FE7
- --pink: #FF4FA3
- --bg: #080810 (fondo)
- --surface: #0f0f1a
- --surface-card: #13131f
- --text: #f0f0f8
- --text-muted: rgba(240,240,248,0.5)
- --border: rgba(255,255,255,0.08)

Clases utilitarias:
- .gradient-text -- texto con gradiente violeta a rosa
- .gradient-btn -- botones con gradiente de la marca

---

## Newsletter
La API route src/app/api/newsletter/route.ts actualmente solo hace console.log del email recibido. La definicion de destino final esta pendiente:
- Opciones evaluadas: Resend list, Mailchimp, tabla en BD propia
- Tambien pendiente: evaluar si pedir mas datos ademas del email (nombre, intereses, pais)
- Decision: pendiente confirmacion del chat central

Mientras tanto los emails recibidos solo quedan en logs de Vercel, no se almacenan.

---

## Equipo
Las cards del equipo estan en /quienes-somos (no en el index, decision de UX).
Miembros actuales:
- Alexis Zeballos -- Fundador y docente principal
- Marcos Zocaro -- Mgter., Instructor Workshop Tributos
- Agustin Castro Fox -- Profesor invitado, Trading e Inversiones
- Julian Maccaferri -- Profesor invitado, Trading e Inversiones

Las fotos son placeholders (inicial del nombre sobre fondo gradiente). Fotos reales pendientes de recibir.

---

## Redes sociales
URLs hardcodeadas en components/SocialLinks.tsx:
- Instagram: https://www.instagram.com/_crypto.az/
- Facebook: https://www.facebook.com/people/Crypto-AZ/100087331395148/
- YouTube: https://www.youtube.com/@CryptoAZ-classvideos
- LinkedIn: https://www.linkedin.com/company/az-crypto/

Los iconos son SVG inline porque lucide-react 1.14.0 no incluye iconos de redes sociales.

---

## Ticker de precios
components/Ticker.tsx consume CoinGecko API publica:
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false

- Sin API key (rate limit publico de CoinGecko)
- Actualizacion cada 60 segundos
- Animacion CSS infinita (clase animate-ticker)
- Si la API falla, el componente devuelve null y no se renderiza

---

## Reglas tecnicas -- SIEMPRE

### Git
- git config --local siempre, nunca --global para identidad
- Conventional Commits: feat/fix/docs/chore/security(scope)
- Verificar identidad antes de push: git log --format="%h %an <%ae> %s" -1

### Codigo
- NUNCA hardcodear credenciales (aunque este repo no las usa)
- NUNCA subir .env si se llegan a usar variables
- Paginas con datos dinamicos -> export const dynamic = "force-dynamic"
- Usar variables CSS definidas en globals.css, no hardcodear colores en componentes

### Claude Code en Windows -- CRITICO
- Guarda archivos .tsx/.ts con UTF-8 BOM automaticamente
- REGLA PERMANENTE: despues de cualquier sesion de Claude Code que modifique .tsx/.ts, correr limpieza BOM antes de commitear
- Script BOM:
```python
files = ['archivo1.ts', 'archivo2.tsx']
BOM = b'\xef\xbb\xbf'
for f in files:
    with open(f, 'rb') as fh: raw = fh.read()
    if raw.startswith(BOM):
        with open(f, 'wb') as fh: fh.write(raw[3:])
        print('Fixed:', f)
    else:
        print('Clean:', f)
```

### PowerShell
- Rutas con espacios -> entre comillas
- Prompts largos para Claude Code: guardar en prompt.md en la raiz (en .gitignore)

---

## Historial de sesiones
| Sesion | Fecha | Commits | Descripcion |
|---|---|---|---|
| Tecnico 3 parte 5 | 2026-05-09 | 80f3c55, 72b7ceb | Setup inicial + landing completa con secciones, quienes-somos, redes sociales, AIZ Solutions footer |

---

## Pendientes
- Fotos reales del equipo para /quienes-somos
- Definir destino final del newsletter (Resend list / Mailchimp / tabla BD)
- Evaluar si pedir mas datos ademas del email
- Agregar link a /quienes-somos desde footer del index (actualmente la pagina existe pero no esta linkeada)
- GA4 para cryptoaz.com.ar (cuando se decida)

---

## Contexto del ecosistema
Para entender como encaja este repo en el ecosistema completo (campus, store, automatizaciones), consultar el CLAUDE.md del repo cryptoaz (campus + store).

Login admin del campus: alexiszeballos@live.com
Logo activo del ecosistema: https://iili.io/qtxa2hG.png
