import {def, transiciones} from "./Transiciones";

export type Char = '=' |
    // Numeros
    '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0' |
    // Reales
    'e' | '-' | '.' |
    // Simbolos Asignacion
    '%' | '*' | '/' | '|' | '+' | '<' | '>' | '?' | '^' | '&' |
    // Palabras Reservadas if	else	private	import	void	public
    'i' | 'f' | //if
    'l' | 's' | //else
    'p' | 'r' | 'v' | 'a' | 't' |  // private
    'm' | 'o' | // import
    'd' | //void
    'u' | 'b' | 'c' | // public
    '~' // Otro Caracter

const parseChar = (c: string): string => {
    const s = [
        '=' ,
    '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '0' ,
    'e' , '-' , '.' ,
    '%' , '*' , '/' , '|' , '+' , '<' , '>' , '?' , '^' , '&' ,
    'i' , 'f' , //if
    'l' , 's' , //else
    'p' , 'r' , 'v' , 'a' , 't' ,  // private
    'm' , 'o' , // import
    'd' , //void
    'u' , 'b' , 'c' , // public
    '~'
    ]
    return s.includes(c) ? c : '~'
}
export const A = [17, 20, 23, 25, 27, 28, 29, 40, 43, 48]
export const evaluateAFD = (s: string): number[] => {
    let estado = 0
    const ans = [0]
    for (const c of s) {
        //console.log({c, s, estado}, parseChar(c))
        estado = transiciones[estado][parseChar(c)]
        ans.push(estado)
    }
    console.log(s, ans)
    return ans
}

