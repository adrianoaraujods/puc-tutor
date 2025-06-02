import { AppFooter } from "@/components/layout/app-footer";
import { AppNavbar } from "@/components/layout/app-navbar";
import { BackgroundPattern } from "@/components/layout/background-pattern";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col [--navbar-height:calc(theme(spacing.14))]">
      <AppNavbar />

      <main className="grow">
        {children}

        <BackgroundPattern />
      </main>

      <AppFooter />
    </div>
  );
}
