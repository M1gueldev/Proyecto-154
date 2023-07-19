<script>
    import {writable} from "svelte/store";
    import {evaluateAFD, A} from "./Automata";

    let tokens = new writable('')
    let aux = []
    let aux1 = []

    tokens.subscribe((x) => {
        aux1 = x.split(' ')
        aux = []
        for (let token of aux1) {
            aux = [...aux, evaluateAFD(token)]
        }
    })
</script>
<div>
    <label for="exampleFormControlTextarea1" class="form-label">Ingrese Tokens</label>
    <textarea bind:value={$tokens} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
{#each aux1 as a, i}
    <ul class="list-group my-4">
        <li class="list-group-item">{a}
            <span>
            {#if A.includes(aux[i][aux[i].length - 1])}
                Aceptada
                {:else}
                Rechazada
                {/if}
            </span>
        </li>
        {#each aux[i] as b, j}
            <li class="list-group-item">q{b}, {a.charAt(j)}</li>
        {/each}
    </ul>
{/each}