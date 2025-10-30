import React from "react";

// otomatis import semua gambar di folder assets/images
const images = import.meta.glob(
  "/src/assets/images/*.{jpg,jpeg,png,webp,svg}",
  {
    eager: true,
    import: "default",
  },
);

interface ImageProps {
  name: string; // nama file tanpa ekstensi
  alt?: string;
  caption?: string;
  rounded?: boolean;
  shadow?: boolean;
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  name,
  alt,
  caption,
  rounded = false,
  shadow = false,
  className = "",
}) => {
  // cari gambar berdasarkan nama
  const imageSrc = Object.entries(images).find(([path]) =>
    path.includes(`${name}.`),
  )?.[1] as string | undefined;

  if (!imageSrc) {
    console.warn(`Image "${name}" not found in /src/assets/images`);
    return (
      <div className="text-sm text-red-500 text-center">
        Gambar "{name}" tidak ditemukan
      </div>
    );
  }

  return (
    <figure className={`flex flex-col items-center ${className}`}>
      <img
        src={imageSrc}
        alt={alt || name}
        className={`
          object-cover
          w-full
          ${rounded ? "rounded-xl" : ""}
          ${shadow ? "shadow-md" : ""}
          transition-transform duration-300
        `}
      />
      {caption && (
        <figcaption className="text-sm text-gray-500 mt-2 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default Image;
