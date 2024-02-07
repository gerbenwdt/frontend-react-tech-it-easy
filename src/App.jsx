import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import {calculateProductsToSell, sumPurchasedProducts, sumSoldProducts} from './helpers/helpers.js'
import {
    calcAvailableSizes,
    formatBrandTypeName,
    formatPrice,
    formatScreensizes
} from "./helpers/generateBestSellingTV.js";
import {
    arrayOfTvTypes,
    available65PlusTvs,
    soldOutTvs,
    tvsAmbilight,
    tvsHighRefreshRate
} from "./helpers/arraymethods.js";


function App() {
    const findNH3216SMART = inventory.find((product) => product.type === `NH3216SMART`)
  return (
      <main>
          <h1>Eerst de technische opdrachten:</h1>
          <h2>Deel 1</h2>
          <p>Opdracht 1a: Aantal verkochte producten: {sumSoldProducts(inventory)}</p>
          <p>Opdracht 1c: Aantal ingekochte producten: {sumPurchasedProducts(inventory)}</p>
          <p>Opdracht 1d: Aantal te verkopen producten: {calculateProductsToSell(inventory)}</p>
          <p>Opdracht 2a: [merk] [type] - [naam]: {formatBrandTypeName(bestSellingTv)}</p>
          <p>Opdracht 2b: Prijs in €100,- formaat: {formatPrice(bestSellingTv)}</p>
          <p>Opdracht 2c: String voor schermgroottes van één tv: {formatScreensizes(bestSellingTv)}</p>
          <p>Opdracht 2c: String voor schermgroottes van één tv: {calcAvailableSizes(bestSellingTv.availableSizes)}</p>
          <p></p>
          <h2>Deel 2</h2>
          <p>Opdracht 1a: Lijst met tv-type namen: zie console log{console.log(arrayOfTvTypes(inventory))}</p>
          <p>Opdracht 1b: Lijst met uitverkochte TVs: zie console log{console.log(soldOutTvs(inventory))}</p>
          <p>Opdracht 1c: Haal informatie van NH3216SMART op: zie console log{console.log(findNH3216SMART)}</p>
          <p>Opdracht 1d: TVs met meer dan 100Hz verversingssnelheid: zie console
              log{console.log(tvsHighRefreshRate(inventory))}</p>
          <p>Opdracht 1e: Verzamel TVs die beschikbaar zijn en 65 inch en groter zijn: zie console
              log{console.log(available65PlusTvs(inventory))}</p>
          <p>Opdracht 1f: Verzamel TVs die over ambilight beschikken: zie console log{console.log(tvsAmbilight(inventory))}</p>

      </main>
  )
}

export default App
