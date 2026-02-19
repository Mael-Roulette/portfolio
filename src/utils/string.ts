export interface TextPart {
  text: string;
  isNumber: boolean;
}

export function splitTitleWithNumbers ( text: string ): TextPart[] {
  const parts = text.split( /(\d+)/ );
  return parts.map( ( part ) => {
    if ( /^\d+$/.test( part ) ) {
      return { text: part, isNumber: true };
    }
    return { text: part, isNumber: false };
  } );
}
