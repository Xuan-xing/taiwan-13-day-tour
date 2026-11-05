import { forwardRef, useImperativeHandle, useRef } from 'react';

const TransitionBike = forwardRef(function TransitionBike(_props, ref) {
  const rootRef = useRef(null);
  const rearWheelRef = useRef(null);
  const frontWheelRef = useRef(null);
  const crankRef = useRef(null);

  useImperativeHandle(ref, () => ({
    root: rootRef.current,
    wheels: [rearWheelRef.current, frontWheelRef.current],
    crank: crankRef.current,
  }), []);

  return (
    <svg ref={rootRef} className="transition-bike" viewBox="0 0 320 180" role="presentation" aria-hidden="true">
      <g ref={rearWheelRef} className="transition-bike__wheel" transform="translate(70 128)">
        <circle r="34" fill="none" stroke="#F5F5F0" strokeWidth="3" />
        <circle r="3" fill="#F5F5F0" />
        <path d="M0 -30V30M-30 0H30M-21 -21L21 21M21 -21L-21 21" stroke="#F5F5F0" strokeWidth="1" opacity=".58" />
      </g>
      <g ref={frontWheelRef} className="transition-bike__wheel" transform="translate(250 128)">
        <circle r="34" fill="none" stroke="#F5F5F0" strokeWidth="3" />
        <circle r="3" fill="#F5F5F0" />
        <path d="M0 -30V30M-30 0H30M-21 -21L21 21M21 -21L-21 21" stroke="#F5F5F0" strokeWidth="1" opacity=".58" />
      </g>
      <g fill="none" stroke="#F5F5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M70 128L116 72L170 128L70 128L145 128L116 72" />
        <path d="M170 128L250 128L218 73L170 128" />
        <path d="M116 72L103 55L91 55" />
        <path d="M218 73L230 55L248 55" />
        <path d="M230 55L250 46" />
      </g>
      <g ref={crankRef} className="transition-bike__crank" transform="translate(145 128)" stroke="#F5F5F0" strokeWidth="3" strokeLinecap="round">
        <circle r="9" fill="#8A3324" />
        <path d="M0 0L16 -13M16 -13h10M0 0L-13 16M-13 16h-10" />
      </g>
      <path d="M93 53h28M238 45h20" stroke="#F5F5F0" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
});

export default TransitionBike;
