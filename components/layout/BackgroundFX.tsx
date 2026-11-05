/**
 * Fixed, decorative background layer: an animated violet→teal gradient mesh
 * plus a few softly floating blurred shapes. Pure CSS animation (no JS
 * per-frame work) so it stays cheap even on lower-end devices. Disabled
 * automatically for prefers-reduced-motion via globals.css.
 */
export default function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void"
    >
      {/* Base gradient mesh */}
      <div className="absolute inset-0 opacity-70">
        <div className="animate-gradient-shift absolute left-[-10%] top-[-15%] h-[60vw] w-[60vw] max-w-[900px] rounded-full bg-violet/25 blur-[120px]" />
        <div
          className="animate-gradient-shift absolute right-[-15%] top-[10%] h-[55vw] w-[55vw] max-w-[800px] rounded-full bg-teal/20 blur-[130px]"
          style={{ animationDelay: "-7s" }}
        />
        <div
          className="animate-gradient-shift absolute bottom-[-20%] left-[15%] h-[50vw] w-[50vw] max-w-[700px] rounded-full bg-amber/10 blur-[140px]"
          style={{ animationDelay: "-14s" }}
        />
      </div>

      {/* Fine grid, evokes a design canvas / blueprint */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Floating accent shapes */}
      <div className="animate-float-slow absolute left-[8%] top-[28%] h-2 w-2 rounded-full bg-teal shadow-[0_0_12px_2px_var(--color-teal)]" />
      <div className="animate-float-slower absolute right-[12%] top-[18%] h-1.5 w-1.5 rounded-full bg-violet shadow-[0_0_10px_2px_var(--color-violet)]" />
      <div className="animate-float-slow absolute bottom-[22%] right-[22%] h-2 w-2 rounded-full bg-amber shadow-[0_0_12px_2px_var(--color-amber)]" />
      <div className="animate-float-slower absolute bottom-[35%] left-[20%] h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_10px_2px_var(--color-teal)]" />

      {/* Vignette to keep content readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--color-void)_92%)]" />
    </div>
  );
}
