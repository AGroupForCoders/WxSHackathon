import Gallery from "./_components/gallery";


export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <div className="my-24 h-128 flex flex-col">
        <h1 className="text-6xl font-bold px-28">Gallery</h1>
        <Gallery />
      </div>
    </main>
  );
}
