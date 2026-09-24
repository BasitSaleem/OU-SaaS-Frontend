declare module "threejs-components/build/cursors/tubes1.min.js" {
  interface TubesController {
    setColors: (colors: string[]) => void;
    setLightsColors: (colors: string[]) => void;
  }

  interface TubesCursorApp {
    tubes: TubesController;
    dispose: () => void;
  }

  interface TubesCursorOptions {
    tubes?: {
      colors?: string[];
      lights?: { intensity?: number; colors?: string[] };
    };
  }

  export default function TubesCursor(
    canvas: HTMLCanvasElement,
    options?: TubesCursorOptions
  ): TubesCursorApp;
}
