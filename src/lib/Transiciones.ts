import type {Char} from "./Automata";

const numTo = (n: number) => {
    return {
        "0": n,
        "1": n,
        "2": n,
        "3": n,
        "4": n,
        "5": n,
        "6": n,
        "7": n,
        "8": n,
        "9": n,
    }
}
export const def: Record<Char, number> = {
    "%": 49,
    "&": 49,
    "*": 49,
    "+": 49,
    "-": 49,
    ".": 49,
    "/": 49,
    "0": 49,
    "1": 49,
    "2": 49,
    "3": 49,
    "4": 49,
    "5": 49,
    "6": 49,
    "7": 49,
    "8": 49,
    "9": 49,
    "<": 49,
    ">": 49,
    "?": 49,
    "^": 49,
    "|": 49,
    a: 49,
    b: 49,
    c: 49,
    d: 49,
    e: 49,
    f: 49,
    i: 49,
    l: 49,
    m: 49,
    o: 49,
    p: 49,
    r: 49,
    s: 49,
    t: 49,
    u: 49,
    v: 49,
    '=': 49,
    '~': 49
}

export let transiciones: Record<Char, number>[];
transiciones = [
    {// [0]
        ...def,
        '=': 1, // x = y [1] es Aceptacion
        '+': 2, // x += y
        '-': 3, // x -= y // -d.de-d.d
        '*': 4, // x *= y	x **= y
        '/': 5, // x /= y
        '%': 6, // x %= y
        '<': 7, // x <<= y
        '>': 8, // x >>= y	 x >>>= y
        '&': 9, // x &= y	x &&= y
        '^': 10, // x ^= y
        '|': 11, // x |= y	x ||= y
        '?': 12, // x ??= y

        'i': 13, //if import
        'e': 14, // else
        'p': 15, // private	public
        'v': 16, // void
        ...numTo(17)
    },
    {// [1] =
        ...def,
    },
    {// [2] +
        ...def,
        '=': 20 // +=
    },
    {// [3] -
        ...def,
        ...numTo(17), // -d
        '=': 20, // -=
    },
    {// [4] *
        ...def,
        '=': 20, // *=
        '*': 19  // **
    },
    {// [5] /
        ...def,
        '=': 20, // /=
    },
    {// [6] %
        ...def,
        '=': 20, // %=
    },
    {// [7] <
        ...def,

        '<': 19, // <<
    },
    {// [8] >
        ...def,
        '>': 18, // >>

    },
    {// [9] &
        ...def,
        '=': 20, // &=
        '&': 19, // &&
    },
    {// [10] ^
        ...def,
        '=': 20, // ^=
    },
    {// [11] |
        ...def,
        '=': 20, // |=
        '|': 19, // ||
    },
    {// [12] ?
        ...def,
        '?': 19, // ??
    },
    {// [13] i
        ...def,
        'f': 28, //if
        'm': 44, //im
    },
    {// [14] e
        ...def,
        'l': 30 // el
    },
    {// [15] p
        ...def,
        'r': 31, //pr
        'u': 32, //pu
    },
    {// [16] v
        ...def,
        'o': 33, // vo
    },
    {// [17] \d | -\d
        ...def,
        ...numTo(17), //ESTADO FINAL ENTEROS
        '.': 21, // (\d | -\d).
        'e': 22, // (\d | -\d)e
    },
    {// [18] >>
        ...def,
        '=': 20, // >>=
        '>': 19, // >>>
    },
    {// [19] ** | >>> | << | && | >> | || | ??
        ...def,
        '=': 20
    },
    {// [20]
        ...def, // ESTADO FINAL (Asignación)
    },
    {// [21] (\d | -\d).
        ...def,
        ...numTo(23),
    },
    {// [22] (\d | -\d)e
        ...def,
        '-': 24, // (\d | -\d)e-
        ...numTo(25) // (\d | -\d)e\d
    },
    {// [23] (\d | -\d).\d
        ...def,
        ...numTo(23), // ESTADO FINAL (DECIMALES)
        'e': 22, // (\d | -\d).\de
    },
    {// [24] (\d | -\d)e-
        ...def,
        ...numTo(25) // (\d | -\d)e-\d
    },
    {// [25] {-}?\d{.\d}?e{-}?\d
        ...def,
        ...numTo(25), // ESTADO DE ACEPTACION EXPONENTE ENTERO
        '.': 26,
    },
    {// [26] {-}?\d{.\d}?e{-}?\d.
        ...def,
        ...numTo(27), // {-}?\d{.\d}?e{-}?\d.\d
    },
    {// [27]  {-}?\d{.\d}?e{-}?\d.\d
        ...def,
        ...numTo(27) // ESTADO DE ACEPTAIION EXPOPNENTE DECIMAL
    },
    {// [28] if
        ...def, // ESTADO DE ACEPTACION "IF"
    },
    {// [29] else | private
        ...def, // ESTADO DE ACEPTACION "ELSE" "PRIVATE"
    },
    {// [30] el
        ...def,
        's': 34, // els
    },
    {// [31] pr
        ...def,
        'i': 35, // pri
    },
    {// [32] pu
        ...def,
        'b': 36, // pub
    },
    {// [33] vo
        ...def,
        'i': 37, // voi
    },
    {// [34] els | privat
        ...def,
        'e': 29, // else | private
    },
    {// [35] pri
        ...def,
        'v': 38, //priv
    },
    {// [36] pub
        ...def,
        'l': 39, //publ
    },
    {// [37] voi
        ...def,
        'd': 40 // void
    },
    {// [38] priv
        ...def,
        'a': 41, // priva
    },
    {// [39] publ
        ...def,
        'i': 42, //publi
    },
    {// [40] void
        ...def, // ESTADO DE ACEPTACION VOID
    },
    {// [41] priva
        ...def,
        't': 34 // privat
    },
    {// [42] publi
        ...def,
        'c': 43, // public
    },
    {// [43] public
        ...def, // ESTADO DE ACEPTACION PUBLIC
    },
    {// [44] im
        ...def,
        'p': 45 //imp
    },
    {// [45] imp
        ...def,
        'o': 46 //impo
    },
    {// [46] impo
        ...def,
        'r': 47 // impor
    },
    {// [47] impor
        ...def,
        't': 48 //import
    },
    {// [48] import
        ...def, // ESTADO DE ACEPTACION IMPORT
    },
    def //! [49] ESTADO DE ERROR
];
