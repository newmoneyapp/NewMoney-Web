# NewMoney Landing (estática)

Dominio: **www.newmoneyservicios.cl** (GitHub Pages + Cloudflare)

## Publicación en GitHub Pages
1. Sube estos archivos a la raíz del repo (`main`).
2. En **Settings → Pages**: `Deploy from a branch` → `main` + `/ (root)`.
3. Custom domain: `www.newmoneyservicios.cl` (o mantené el archivo `CNAME`).

## DNS en Cloudflare
- `CNAME` **www** → `TU_USUARIO.github.io` (DNS only al principio).
- `A` **apex** (`newmoneyservicios.cl`) → GitHub Pages IPs (4 registros):
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

Cuando el certificado de GitHub esté OK, activa **Enforce HTTPS** y opcionalmente el proxy naranja en Cloudflare.
