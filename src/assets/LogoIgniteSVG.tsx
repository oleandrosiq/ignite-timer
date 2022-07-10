import * as React from "react"
import { SVGProps } from "react"

export const LogoIgniteSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      opacity={0.5}
      d="m39.99.27-9.787 36.563a.219.219 0 0 1-.364.1l-6.553-6.556 4.91-18.323a.211.211 0 0 0-.265-.265L9.618 16.7 3.1 10.18a.22.22 0 0 1 .1-.366L39.725.005c.166-.034.315.116.265.265Z"
      fill="#00B37E"
    />
    <path
      opacity={0.5}
      d="m23.286 30.377-2.521 9.46a.219.219 0 0 1-.365.1L.063 19.605a.22.22 0 0 1 .1-.365l9.455-2.54 13.668 13.677Z"
      fill="#00B37E"
    />
    <path
      d="m28.196 12.054-4.91 18.323L9.617 16.7l18.313-4.913c.166-.05.315.1.266.266Z"
      fill="#00B37E"
    />
  </svg>
)
