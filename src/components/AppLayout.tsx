import { NavLink, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      <aside className="w-64 border-r border-slate-800 bg-slate-900 p-6">
        <div className="text-xl font-semibold">StoryForge</div>
        <nav className="mt-8 space-y-2 text-sm">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `block rounded-md px-3 py-2 transition hover:bg-slate-800 ${
                isActive ? "bg-slate-800 text-white" : "text-slate-300"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `block rounded-md px-3 py-2 transition hover:bg-slate-800 ${
                isActive ? "bg-slate-800 text-white" : "text-slate-300"
              }`
            }
          >
            Login
          </NavLink>
        </nav>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="h-14 border-b border-slate-800 bg-slate-900 px-6 flex items-center justify-between">
          <div className="text-sm text-slate-300">Workspace</div>
          <div className="text-xs text-slate-400">MVP Shell</div>
        </header>
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
