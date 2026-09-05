// components/ui/brand-logo.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export function BrandLogo() {
  const [transparentLogoSrc, setTransparentLogoSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/assets/logo.webp";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      let minX = canvas.width;
      let minY = canvas.height;
      let maxX = 0;
      let maxY = 0;
      let hasContent = false;

      // Scan all pixels: turn black background into 100% transparent
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // If pixel is near-black background (threshold <= 28)
        if (r < 28 && g < 28 && b < 28) {
          data[i + 3] = 0; // Set Alpha = 0 (Transparent)
        } else {
          // Calculate tight bounding box to crop empty padding
          const px = (i / 4) % canvas.width;
          const py = Math.floor((i / 4) / canvas.width);
          if (px < minX) minX = px;
          if (px > maxX) maxX = px;
          if (py < minY) minY = py;
          if (py > maxY) maxY = py;
          hasContent = true;
        }
      }

      ctx.putImageData(imgData, 0, 0);

      // Auto-crop to the actual text boundary so logo renders large and sharp
      if (hasContent && maxX > minX && maxY > minY) {
        const cropW = maxX - minX;
        const cropH = maxY - minY;
        const croppedCanvas = document.createElement("canvas");
        croppedCanvas.width = cropW;
        croppedCanvas.height = cropH;
        const cropCtx = croppedCanvas.getContext("2d");
        
        if (cropCtx) {
          cropCtx.drawImage(canvas, minX, minY, cropW, cropH, 0, 0, cropW, cropH);
          setTransparentLogoSrc(croppedCanvas.toDataURL("image/png"));
          return;
        }
      }

      setTransparentLogoSrc(canvas.toDataURL("image/png"));
    };
  }, []);

  return (
    <Link href="/" className="flex items-center select-none shrink-0 group">
      <div className="relative h-10 md:h-12 w-44 md:w-52 flex items-center justify-start">
        {transparentLogoSrc ? (
          <img
            src={transparentLogoSrc}
            alt="Techprinto — Turning Ideas Into Technology"
            className="w-full h-full object-contain object-left transition-opacity duration-200"
          />
        ) : (
          /* Graceful instant fallback while rendering */
          <div className="flex items-baseline font-black tracking-tight text-xl text-white">
            Techprint<span className="text-[#FF8A00]">o</span>
          </div>
        )}
      </div>
    </Link>
  );
}