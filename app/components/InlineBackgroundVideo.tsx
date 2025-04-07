"use client";

export default function InlineBackgroundVideo() {
  return (
    <div className="absolute inset-0 w-full h-full bg-black">
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <video
            autoplay
            loop
            muted
            playsinline
            class="absolute w-full h-full object-cover"
          >
            <source src="/videos/reel.mp4" type="video/mp4" />
          </video>
          <div class="absolute inset-0 bg-black bg-opacity-30"></div>
        `,
        }}
      />
    </div>
  );
}
