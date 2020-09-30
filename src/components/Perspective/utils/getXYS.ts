export default function getXYS(x: number, y: number): number[] {
  return [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
}
