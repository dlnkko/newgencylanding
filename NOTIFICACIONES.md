# Configuración de Notificaciones

El formulario "Free Demo" está configurado para enviar notificaciones cuando alguien completa el formulario.

## Estado Actual

Actualmente, las solicitudes se registran en:
1. **Consola del servidor** (cuando ejecutas `npm run dev`)
2. **API Route** en `/app/api/demo-request/route.ts`

## Opciones para Recibir Notificaciones

### Opción 1: Email con SendGrid (Recomendado)

1. Instala SendGrid:
```bash
npm install @sendgrid/mail
```

2. Configura tu API key en `.env.local`:
```
SENDGRID_API_KEY=tu_api_key_aqui
EMAIL_TO=tu-email@ejemplo.com
```

3. Actualiza `app/api/demo-request/route.ts`:

```typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: NextRequest) {
  // ... código existente ...
  
  // Enviar email
  const msg = {
    to: process.env.EMAIL_TO!,
    from: 'noreply@tudominio.com',
    subject: 'Nueva Solicitud de Demo',
    html: `
      <h2>Nueva Solicitud de Demo</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Producto:</strong> <a href="${productLink}">${productLink}</a></p>
      <p><strong>Tipo:</strong> ${mediaType}</p>
      <p><strong>Opción:</strong> ${option}</p>
      <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
    `
  }
  
  await sgMail.send(msg)
  
  // ... resto del código ...
}
```

### Opción 2: Email con Resend

1. Instala Resend:
```bash
npm install resend
```

2. Configura en `.env.local`:
```
RESEND_API_KEY=tu_api_key_aqui
EMAIL_TO=tu-email@ejemplo.com
```

3. Actualiza la API route con el código de Resend.

### Opción 3: Webhook (Zapier, Make, etc.)

1. Crea un webhook en Zapier o Make.com
2. Actualiza `app/api/demo-request/route.ts`:

```typescript
await fetch('TU_WEBHOOK_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
```

### Opción 4: Base de Datos

Guarda las solicitudes en una base de datos (Supabase, MongoDB, etc.) y configura alertas.

## Ver Solicitudes en Desarrollo

Mientras desarrollas, puedes ver las solicitudes en:
- La consola del servidor cuando ejecutas `npm run dev`
- Los logs de la API route

## Próximos Pasos

1. Elige un método de notificación
2. Configura las variables de entorno
3. Actualiza `app/api/demo-request/route.ts` con tu método elegido
4. Prueba el formulario para verificar que recibes las notificaciones


