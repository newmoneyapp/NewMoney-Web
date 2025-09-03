# NewMoney Landing (estática)

Landing estática lista para publicar en GitHub Pages.

## Estructura
- `index.html` — HTML principal.
- `styles.css` — estilos extraídos del `<style>` inline.
- `script.js` — JS (año del footer + menú móvil).

## Cómo publicar en GitHub Pages
1. Crea un repositorio en GitHub (por ejemplo: `newmoney-landing`).
2. Sube estos 3 archivos a la raíz del repo (`index.html`, `styles.css`, `script.js`).
3. En GitHub: **Settings → Pages**.
   - **Build and deployment**: *Source*: `Deploy from a branch`.
   - *Branch*: `main` y *folder*: `/ (root)` → **Save**.
4. La URL quedará como `https://TU_USUARIO.github.io/newmoney-landing/` (o la que GitHub indique).
5. Si usarás **dominio propio** con Cloudflare/NIC:
   - En **Pages → Custom domain**, agrega tu dominio o subdominio (ej. `www.newmoney.cl`).
   - Crea en tu DNS un **CNAME** hacia `TU_USUARIO.github.io` (si es subdominio como `www`).
   - Si es **apex/root** (ej. `newmoney.cl`), usa registros **A** de GitHub Pages (IP oficiales) y un **ALIAS/ANAME** si tu proveedor lo soporta.

## Personalizaciones rápidas
- Reemplaza `wa.me/569XXXXXXXX` por tu número.
- Cambia `og:image`, `logo`, y `canonical`.
- Edita valores de planes en la sección **Precios**.

---

Si quieres convertir esta landing en un proyecto con build (Vite/React/Angular), o agregar un formulario con backend (Netlify Forms, Cloudflare Turnstile, etc.), abre un issue y lo dejo montado.
