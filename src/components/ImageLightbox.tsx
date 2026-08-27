import { useState } from "react";
import { X } from "lucide-react";

type ImageLightboxProps = {
  images: string[];
  title: string;
};

export function ImageLightbox({ images, title }: ImageLightboxProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <button key={image} type="button" onClick={() => setActiveImage(image)} className="group overflow-hidden rounded-2xl border border-border bg-jmv-grey text-left">
            <img src={image} alt={`${title} gallery image ${index + 1}`} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
          </button>
        ))}
      </div>
      {activeImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-jmv-brown/90 p-6" role="dialog" aria-modal="true" aria-label={`${title} enlarged image`}>
          <button type="button" onClick={() => setActiveImage(null)} className="absolute right-5 top-5 rounded-full bg-white p-3 text-jmv-brown" aria-label="Close image">
            <X className="h-5 w-5" />
          </button>
          <img src={activeImage} alt={`${title} enlarged`} className="max-h-[85vh] max-w-full rounded-xl object-contain" />
        </div>
      ) : null}
    </>
  );
}