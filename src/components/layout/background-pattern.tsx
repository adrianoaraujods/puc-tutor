import { cn } from "@/lib/utils";

export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 z-[-2] h-screen w-screen">
      <div
        className={cn(
          "absolute h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_-33%_50%,rgba(50,120,200,0.3),rgba(255,255,255,0))]"
        )}
      />
      <div
        className={cn(
          "absolute h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_100%_-33%,rgba(50,120,200,0.3),rgba(255,255,255,0))]"
        )}
      />
      <div
        className={cn(
          "absolute h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_100%_130%,rgba(50,120,200,0.3),rgba(255,255,255,0))]"
        )}
      />
    </div>
  );
}
