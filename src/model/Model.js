import { szenvedoMondatok } from "./angol";

class Model {
    #mondatokLista = [];
    #cim = "";
    #hossz = 0;
    #sugoSzoveg = "";
    #aktObj = {};
    #aktElem = 2;
    #pontok = 0;

    constructor() {
        this.#mondatokLista = szenvedoMondatok;
        this.#cim = this.#mondatokLista[0];
        this.#hossz = this.#mondatokLista.length - 2;
        this.#sugoSzoveg = this.#mondatokLista[1];

        this.aktMOndatOsszerak(this.#aktElem);
        this.aktJoValasz(this.#aktElem);

        //this.kovetkezoElem(this.aktElem);

    }

    joBeiras(valasz, index) {
        if (valasz == this.aktJoValasz(index)) {
            this.#pontok++;
        }
    }

    kovetkezoElem() {
        console.log("mondat " + this.#aktElem);
        this.#aktElem += 1;
        return this.#aktElem;
    }

    /**if (this.#aktElem <= this.#hossz) {
            this.aktElem = 2;
        } else {
            this.#aktElem += 1;
        }
        return this.#aktElem; */
    setAktElem(ujElem) {
        this.#aktElem = ujElem;
    }

    aktMOndatOsszerak(index) {
        //console.log(index)
        let egeszMondat = this.#mondatokLista[index].mondat;
        let spliteltM = egeszMondat.split(" ");
        //console.log(spliteltM);
        return spliteltM;
    }

    aktJoValasz(index) {
        //console.log(this.#mondatokLista[index].valasztas[1]);
        return this.#mondatokLista[index].valasztas[0];
    }

    get aktElem() {
        return this.#aktElem;
    }

    get cim() {
        return this.#cim;
    }

    get sugoSzoveg() {
        return this.#sugoSzoveg;
    }

    get hossz() {
        return this.#hossz;
    }

    get pontok() {
        return this.pontok;
    }
}
export default Model;