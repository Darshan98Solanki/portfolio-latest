import Orb from "./components/Orb";

export default function Loading() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Orb
          hoverIntensity={0}
          rotateOnHover
          hue={3}
          forceHoverState={false}
          backgroundColor="#000000"
        />
      </div>
    </div>
  );
}
