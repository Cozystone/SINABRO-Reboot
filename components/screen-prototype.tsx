import Image from "next/image";
import Link from "next/link";

type Hotspot = {
  href: string;
  label: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

type ScreenPrototypeProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  hotspots?: Hotspot[];
};

export function ScreenPrototype({
  src,
  alt,
  width,
  height,
  hotspots = []
}: ScreenPrototypeProps) {
  return (
    <main className="prototype-shell">
      <section className="prototype-device" style={{ maxWidth: width }}>
        <div
          className="prototype-canvas"
          style={{ aspectRatio: `${width} / ${height}` }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 393px"
            className="prototype-image"
          />
          {hotspots.map((hotspot) => (
            <Link
              key={`${hotspot.href}-${hotspot.label}`}
              href={hotspot.href}
              className="prototype-hotspot"
              aria-label={hotspot.label}
              style={{
                left: `${(hotspot.left / width) * 100}%`,
                top: `${(hotspot.top / height) * 100}%`,
                width: `${(hotspot.width / width) * 100}%`,
                height: `${(hotspot.height / height) * 100}%`
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
