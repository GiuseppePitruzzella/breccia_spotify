import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

export default function Home() {
  return (
    <div className="
      bg-neutral-900
      rounded-lg
      h-full
      w-full
      overflow-hidden
      overflow-y-auto
    ">
      <Header>
        <div className="mb-2 px-6 pt-4">
          <h1 className="text-white text-3xl font-semibold">
            Welcome Back
          </h1>
          <p className="text-neutral-400">
            Listen to your favorite songs
          </p>
        </div>
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          xl:grid-cols-3 
          2xl:grid-cols-4 
          gap-3
          mt-4">
          {/* List of songs */}
          <ListItem></ListItem>
        </div>
      </Header>
    </div>
  );
}
