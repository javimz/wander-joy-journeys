import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Nombre es requerido").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  travelDates: z.string().trim().max(100).optional().or(z.literal("")),
  travelers: z.coerce.number().min(1).max(50).default(1),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

interface InquiryFormProps {
  destination: string;
}

const InquiryForm = ({ destination }: InquiryFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDates: "",
    travelers: "2",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

    const result = inquirySchema.safeParse(formData);
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
      const { data, error } = await supabase.functions.invoke("send-inquiry", {
        body: {
          ...result.data,
          destination,
        },
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", travelDates: "", travelers: "2", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error al enviar la solicitud");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
          ¡Solicitud Enviada!
        </h3>
        <p className="text-muted-foreground font-body">
          Nos pondremos en contacto contigo pronto con información sobre {destination}.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-secondary font-semibold hover:underline font-body"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all";
  const errorClass = "text-destructive text-xs font-body mt-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground font-body mb-1.5">
            Nombre completo *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className={inputClass}
            maxLength={100}
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>

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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground font-body mb-1.5">
            Teléfono
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 234 567 890"
            className={inputClass}
            maxLength={20}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground font-body mb-1.5">
            Fechas de viaje
          </label>
          <input
            type="text"
            name="travelDates"
            value={formData.travelDates}
            onChange={handleChange}
            placeholder="Ej: Junio 15 - 25, 2026"
            className={inputClass}
            maxLength={100}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground font-body mb-1.5">
          Número de viajeros
        </label>
        <select
          name="travelers"
          value={formData.travelers}
          onChange={handleChange}
          className={inputClass}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "viajero" : "viajeros"}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground font-body mb-1.5">
          Mensaje o requerimientos especiales
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Cuéntanos qué tipo de experiencia buscas..."
          rows={4}
          className={inputClass + " resize-none"}
          maxLength={2000}
        />
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
            Solicitar Información
          </>
        )}
      </button>
    </form>
  );
};

export default InquiryForm;
