// layout per la parte “applicativa” tipo Spotify: qui dividi lo schermo in 2 colonne:

// colonna principale (contenuto dinamico delle pagine, es. home, explore, playlist…)

// colonna laterale destra (player persistente).


// import Player from "@/components/Player";
// import Navigation from "@/components/Navigation";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* <div className="flex-1 flex flex-col">
        <Navigation />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
      <aside className="w-[400px] border-l">
        <Player />
      </aside> */}
    </div>
  );
}
