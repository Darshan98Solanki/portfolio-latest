export default function ScrollIndicator() {
  return (
    <div
      className="
        fixed
        bottom-8
        left-1/2
        -translate-x-1/2
        z-50
        flex
        flex-col
        items-center
        gap-2
        pointer-events-none
      "
    >
      {/* Mouse outline */}
      <div
        className="
          h-10
          w-6
          rounded-full
          border
          border-white/70
          flex
          justify-center
          pt-2
        "
      >
        {/* Scroll dot */}
        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-white/70
            animate-scroll
          "
        />
      </div>
    </div>
  );
}
