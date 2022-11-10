/**
 * 1. Se caminho 5km E corro 2km, passo o dia bem:
 *     R -> caminho_5km&&corro_2km, passo_o_dia_bem
 * 
 * 2. Se levanto cedo OU antes das 8h, saio tranquilo
 *     R -> levanto_cedo||antes_das_8h
 * 
 * 3. Se NÃO termino o trabalho OU não tenho compromisso, saio tarde
 *     R -> !termino_o_trabalho || não_tenho_compromisso, saio tarde
 */

var caminhada 
var corrida
var horaQueAcordei = 7
var termineiTrabalho = true
var tenhoCompromisso 

if (caminhada == 5 && corrida == 2) {
    console.log("Passo o dia Bem")
}

if (horaQueAcordei <= 8) {
    console.log("Saio Tranquilo")
}

if (!termineiTrabalho || tenhoCompromisso) {
    console.log('Saio Tarde')
}


