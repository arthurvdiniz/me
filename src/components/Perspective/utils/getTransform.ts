export default function getTransformation(x, y, s): string {
  return `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
}
