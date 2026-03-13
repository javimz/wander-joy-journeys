import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, destination, travelDates, travelers, message } =
      await req.json();

    // Validate required fields
    if (!name || !email || !destination) {
      return new Response(
        JSON.stringify({ error: "Nombre, email y destino son requeridos" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Email inválido" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const sanitizedData = {
      name: name.trim().substring(0, 100),
      email: email.trim().substring(0, 255),
      phone: phone?.trim().substring(0, 20) || null,
      destination: destination.trim().substring(0, 100),
      travel_dates: travelDates?.trim().substring(0, 100) || null,
      travelers: Math.min(Math.max(parseInt(travelers) || 1, 1), 50),
      message: message?.trim().substring(0, 2000) || null,
    };

    // Save to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase.from("inquiries").insert(sanitizedData);

    if (dbError) {
      console.error("DB error:", dbError);
      return new Response(
        JSON.stringify({ error: "Error al guardar la solicitud" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send email notification via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      try {
        const emailHtml = `
          <h2>Nueva consulta desde el sitio web</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Destino</td><td style="padding:8px;border:1px solid #ddd;">${sanitizedData.destination}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Nombre</td><td style="padding:8px;border:1px solid #ddd;">${sanitizedData.name}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${sanitizedData.email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Teléfono</td><td style="padding:8px;border:1px solid #ddd;">${sanitizedData.phone || "No proporcionado"}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Fechas</td><td style="padding:8px;border:1px solid #ddd;">${sanitizedData.travel_dates || "No especificadas"}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Viajeros</td><td style="padding:8px;border:1px solid #ddd;">${sanitizedData.travelers}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Mensaje</td><td style="padding:8px;border:1px solid #ddd;">${sanitizedData.message || "Sin mensaje"}</td></tr>
          </table>
        `;

        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Plaza Bohemia Viajes <ventas@plazabohemiaviajes.tur.ar>",
            to: ["ventas@plazabohemiaviajes.tur.ar"],
            subject: `Nueva consulta: ${sanitizedData.destination} - ${sanitizedData.name}`,
            html: emailHtml,
            reply_to: sanitizedData.email,
          }),
        });

        if (!resendRes.ok) {
          const resendError = await resendRes.text();
          console.error("Resend error:", resendError);
        }
      } catch (emailErr) {
        console.error("Email sending error:", emailErr);
        // Don't fail the request if email fails - data is already saved
      }
    } else {
      console.warn("RESEND_API_KEY not configured, skipping email notification");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Solicitud enviada correctamente" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error:", err);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
