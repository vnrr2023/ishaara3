import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="h-screen bg-black flex items-center justify-center">
      <Spline
        scene="https://prod.spline.design/XrWz5x7Wpm29cGo6/scene.splinecode"
        className="w-full h-full"
      />
    </main>
  );
}
