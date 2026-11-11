import { useEffect, useRef, useState } from 'react';

export default function MaokongTeaFeature({ feature }) {
  const sceneRef = useRef(null);
  const [audioUnavailable, setAudioUnavailable] = useState(!feature?.audio?.src);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return undefined;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reset = () => {
      scene.style.setProperty('--tea-rotate-x', '0deg');
      scene.style.setProperty('--tea-rotate-y', '0deg');
    };
    const move = (event) => {
      if (reduceMotion || event.pointerType !== 'mouse') return;
      const rect = scene.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      const rotateY = Math.max(-5, Math.min(5, x * 5));
      const rotateX = Math.max(-5, Math.min(5, -y * 5));
      scene.style.setProperty('--tea-rotate-y', rotateY.toFixed(2) + 'deg');
      scene.style.setProperty('--tea-rotate-x', rotateX.toFixed(2) + 'deg');
    };
    scene.addEventListener('pointermove', move);
    scene.addEventListener('pointerleave', reset);
    return () => {
      scene.removeEventListener('pointermove', move);
      scene.removeEventListener('pointerleave', reset);
    };
  }, []);

  if (!feature) return null;
  const audio = feature.audio;

  return (
    <>
      <section
        id={feature.id}
        className="maokong-room relative isolate overflow-hidden px-4 py-16 text-rice sm:px-8 sm:py-24"
        aria-labelledby={feature.id + '-title'}
      >
        <div className="maokong-room__ceiling pointer-events-none" aria-hidden="true" />
        <div className="maokong-room__wall pointer-events-none" aria-hidden="true" />
        <div className="maokong-room__horizon pointer-events-none" aria-hidden="true" />
        <div className="maokong-room__floor pointer-events-none" aria-hidden="true" />
        <svg className="maokong-room__floor-lines pointer-events-none" viewBox="0 0 520 260" preserveAspectRatio="none" aria-hidden="true">
          <g className="maokong-room__floor-lines-group" fill="none" stroke="#F5F5F0" strokeLinecap="round">
            <path d="M260 18L8 260M260 18L112 260M260 18L208 260M260 18L312 260M260 18L408 260M260 18L512 260" strokeOpacity=".14" strokeWidth="1.5" />
            <path d="M190 62H330M135 102H385M78 155H442M20 218H500" strokeOpacity=".11" strokeWidth="1.5" />
          </g>
        </svg>

        <div className="relative z-20 mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[.9fr_1.1fr] md:gap-16">
          <div ref={sceneRef} className="maokong-3d-scene relative flex min-h-[15rem] items-center justify-start sm:min-h-[20rem] md:min-h-[25rem]">
            <div className="maokong-3d-shadow pointer-events-none absolute bottom-[10%] left-[8%] h-10 w-[76%] rounded-[50%]" aria-hidden="true" />
            <div className="maokong-3d-highlight pointer-events-none absolute left-[20%] top-[24%] h-24 w-36 rounded-full" aria-hidden="true" />
            <div className="maokong-3d-cup pointer-events-none relative z-10 block w-[min(24rem,86vw)] max-w-full">
              <img src="/images/regions/north-coast-taipei/tea.svg" alt="" aria-hidden="true" className="block h-auto w-full rotate-[-6deg] object-contain" />
            </div>
            <svg className="maokong-steam pointer-events-none absolute left-[31%] top-[5%] z-20 h-auto w-16 sm:left-[33%] sm:w-20" viewBox="0 0 120 110" aria-hidden="true">
              <path d="M45 96C25 78 60 67 43 47 30 31 57 22 48 4" fill="none" stroke="#f5f5f0" strokeLinecap="round" strokeWidth="7" opacity=".46" />
              <path className="maokong-steam--two" d="M79 96C62 76 94 65 78 45 67 29 91 20 84 2" fill="none" stroke="#f5f5f0" strokeLinecap="round" strokeWidth="6" opacity=".32" />
            </svg>
          </div>

          <div className="maokong-room-copy relative z-30 max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[.26em] text-[#c4d4c5]">{feature.eyebrow}</p>
            <h2 id={feature.id + '-title'} className="mt-5 max-w-lg font-display text-[clamp(3rem,7vw,6.8rem)] leading-[.88] tracking-[-.07em] text-rice">{feature.title}</h2>
            <p className="mt-7 max-w-md text-base leading-7 text-rice/65">{feature.body}</p>
            <a href="#planner" className="mt-8 inline-flex min-h-11 items-center rounded-full border border-rice/30 px-5 py-3 text-sm font-semibold text-rice transition hover:border-rice focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rice">Plan the final climb</a>
          </div>
        </div>
      </section>

      <section className="bg-rice px-4 py-7 text-ink sm:px-8 sm:py-9" aria-label="Maokong audio controls">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-y border-ink/15 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[.24em] text-terracotta">Maokong soundscape</p>
            <p className="mt-2 text-sm font-semibold text-ink">{audio?.title ?? 'Audio unavailable'}</p>
          </div>
          {audioUnavailable ? (
            <p role="status" className="text-xs font-semibold text-ink/55">Audio unavailable</p>
          ) : (
            <audio controls loop preload="metadata" className="min-h-11 w-full max-w-xl" aria-label={'Play ' + audio.title} onError={() => setAudioUnavailable(true)}>
              <source src={audio.src} type={audio.type ?? 'audio/mpeg'} />
              Audio unavailable
            </audio>
          )}
        </div>
      </section>
    </>
  );
}
