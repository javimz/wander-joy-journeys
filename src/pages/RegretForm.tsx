import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, Loader2, CheckCircle } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const regretSchema = z.object({
  firstName: z.string().trim().min(1, "Nombre es requerido").max(100),
  lastName: z.string().trim().min(1, "Apellido es requerido").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().min(1, "Teléfono es requerido").max(20),
  reservationNumber: z.string().trim().min(1, "Número de reserva es requerido").max(50),
  cancellationReason: z.string().trim().min(1, "Motivo de cancelación es requerido").max(2000),
});

const RegretForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reservationNumber: "",
    cancellationReason: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setErrorMsg("");

    const result = regretSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");

    try {
      const { error } = await supabase.functions.invoke("send-inquiry", {
        body: {
          name: `${result.data.firstName} ${result.data.lastName}`,
          email: result.data.email,
          phone: result.data.phone,
          destination: `Arrepentimiento - Reserva: ${result.data.reservationNumber}`,
          message: result.data.cancellationReason,
        },
      });

      if (error) throw error;

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        reservationNumber: "",
        cancellationReason: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error al enviar la solicitud");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center py-12 max-w-md">
            <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Solicitud Enviada
            </h3>
            <p className="text-muted-foreground font-body">
              Tu solicitud de arrepentimiento ha sido recibida. Nos pondremos en contacto contigo a la brevedad.
            </p>
            <Link
              to="/"
              className="mt-6 inline-block text-secondary font-semibold hover:underline font-body"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all";
  const errorClass = "text-destructive text-xs font-body mt-1";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 container py-16 md:py-24 max-w-2xl pt-28">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Botón de Arrepentimiento
        </h1>
        <p className="text-muted-foreground font-body mb-8">
          Completá el siguiente formulario para solicitar la cancelación de tu reserva. Todos los campos son obligatorios.
        </p>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground font-body mb-1.5">
                  Nombre *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className={inputClass}
                  maxLength={100}
                />
                {errors.firstName && <p className={errorClass}>{errors.firstName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground font-body mb-1.5">
                  Apellido *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Tu apellido"
                  className={inputClass}
                  maxLength={100}
                />
                {errors.lastName && <p className={errorClass}>{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground font-body mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className={inputClass}
                  maxLength={255}
                />
                {errors.email && <p className={errorClass}>{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground font-body mb-1.5">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+54 11 1234 5678"
                  className={inputClass}
                  maxLength={20}
                />
                {errors.phone && <p className={errorClass}>{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground font-body mb-1.5">
                Número de Reserva *
              </label>
              <input
                type="text"
                name="reservationNumber"
                value={formData.reservationNumber}
                onChange={handleChange}
                placeholder="Ej: RES-2026-001"
                className={inputClass}
                maxLength={50}
              />
              {errors.reservationNumber && <p className={errorClass}>{errors.reservationNumber}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground font-body mb-1.5">
                Motivo de Cancelación *
              </label>
              <textarea
                name="cancellationReason"
                value={formData.cancellationReason}
                onChange={handleChange}
                placeholder="Describí el motivo de tu solicitud de cancelación..."
                rows={4}
                className={inputClass + " resize-none"}
                maxLength={2000}
              />
              {errors.cancellationReason && <p className={errorClass}>{errors.cancellationReason}</p>}
            </div>

            {status === "error" && (
              <p className="text-destructive text-sm font-body bg-destructive/10 rounded-lg px-4 py-2">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-secondary px-6 py-4 text-secondary-foreground font-semibold text-lg transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar Solicitud
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegretForm;
