export const technos = [
  "appwrite",
  "expressjs",
  "mongodb",
  "nestjs",
  "nextjs",
  "php",
  "postgresql",
  "react-native",
  "sass",
  "tailwind",
  "typescript",
  "wordpress",
  "javascript",
  "git",
  "flutter",
  "figma",
  "mysql",
  "ubuntu",
  "docker",
  "blender",
  "html",
  "prisma",
  "java",
  "symfony",
];

/**
 * Splits the technos array into `count` slices of roughly equal size,
 * so that each slider gets a unique, non-overlapping subset.
 *
 * @param count - Number of sliders (tracks)
 * @returns Array of `count` techno arrays
 */
export function splitTechnosForTracks ( count: number ): string[][] {
  const total = technos.length;
  const slices: string[][] = [];
  let start = 0;

  for ( let i = 0; i < count; i++ ) {
    // Distribute remainder evenly across the first slices
    const sliceSize = Math.floor( total / count ) + ( i < total % count ? 1 : 0 );
    slices.push( technos.slice( start, start + sliceSize ) );
    start += sliceSize;
  }

  return slices;
}

/**
 * Triples a techno slice so the infinite scroll animation has enough content.
 */
export function tripleSlice ( slice: string[] ): string[] {
  return [ ...slice, ...slice, ...slice ];
}

/**
 * Returns the public image path for a given techno name.
 */
export function getTechnoImagePath ( techno: string ): string {
  return `/images/technos/${techno}.webp`;
}

/**
 * Returns the display label for a given techno name.
 */
export function getTechnoLabel ( techno: string ): string {
  return techno.charAt( 0 ).toUpperCase() + techno.slice( 1 );
}
