<script>
    import TokenProccesor from "./lib/TokenProccesor.svelte";
    import automata from './assets/automata.svg'

    const operadores = ['x = y', 'x += y', 'x -= y', 'x *= y', 'x /= y', 'x %= y', 'x **= y', 'x <<= y', 'x >>= y', 'x >>>= y', 'x &= y', 'x ^= y', 'x |= y', 'x &&= y', 'x ||= y', 'x ??= y']
    const palabrasReservadas = ['if', 'else', 'private', 'import', 'void', 'public'];
</script>

<main class="container overflow-auto">
    <h1>
        Miguel Murillo Bernal
    </h1>
    <ul class="list-group">
        <li class="list-group-item">Numeros Enteros</li>
        <li class="list-group-item">Numeros Reales</li>
        <li class="list-group-item">
            <span>
                Operadores de Asignacion
                <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators#asignacion">(En Javascript)</a>
            </span>
            <div class="table-responsive" style="width: 100%;">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        {#each operadores as o}
                            <td>
                                {@html o}
                            </td>
                        {/each}
                    </tr>
                    </thead>
                </table>
            </div>
        </li>
        <li class="list-group-item">
            Palabras Reservadas
            <div class="table-responsive" style="width: 100%;">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        {#each palabrasReservadas as o}
                            <td scope="col">
                                {@html o}
                            </td>
                        {/each}
                    </tr>
                    </thead>
                </table>
            </div>
        </li>
    </ul>
    <div class="my-4">

        <TokenProccesor></TokenProccesor>
    </div>

    <div class="overflow-auto">
        <img src="{automata}" alt="AUTOMATA">
    </div>
</main>

<style>
    td {
    white-space: nowrap;
    }
</style>