import { Inter, Roboto, Russo_One, Exo_2 } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
})

export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const russoOne = Russo_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-russo-one'
})

export const exo2 = Exo_2({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-exo2'
})