import { Gallery } from "@/(features)/gallery";

export default function GalleryPage() {
  return (
    <main className="min-h-screen responsive-body">
      <div className="my-24 flex flex-col gap-32">
        <h1 className="text-6xl font-bold">Gallery</h1>
        <Gallery />
      </div>
    </main>
  );
}
