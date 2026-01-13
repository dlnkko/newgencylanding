import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { email, productLink, mediaType, option } = body

    // Validar campos requeridos
    if (!email || !productLink || !mediaType || !option) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Enviar al webhook de n8n
    const webhookUrl = 'https://dlnkkoo.app.n8n.cloud/webhook-test/610e88d8-14ff-4bfc-bc48-0e94eb39b1a9'
    
    const webhookData = {
      email,
      productLink,
      mediaType,
      option,
      timestamp: new Date().toISOString()
    }

    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      })

      if (!webhookResponse.ok) {
        console.error('Error enviando al webhook:', webhookResponse.statusText)
      } else {
        console.log('✅ Solicitud enviada al webhook exitosamente')
      }
    } catch (webhookError) {
      console.error('Error al enviar al webhook:', webhookError)
      // Continuamos aunque falle el webhook para no bloquear la respuesta
    }

    // Log para desarrollo
    console.log('📧 Nueva solicitud de demo:', webhookData)

    return NextResponse.json(
      { 
        success: true,
        message: 'Solicitud recibida correctamente'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing demo request:', error)
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}

