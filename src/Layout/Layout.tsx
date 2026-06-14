
import { NavLink, Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden">
      {/* Glow Effects */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10">
        <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 text-white">
            <div>
              <h1 className="text-xl font-semibold">Careflick</h1>
              <p className="text-sm text-slate-400">Manage patients and forms quickly</p>
            </div>
            <nav className="flex flex-wrap items-center gap-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/users", label: "Users" },
                { to: "/forms", label: "Forms" },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 transition ${
                      isActive
                        ? "bg-slate-200 text-slate-950"
                        : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}