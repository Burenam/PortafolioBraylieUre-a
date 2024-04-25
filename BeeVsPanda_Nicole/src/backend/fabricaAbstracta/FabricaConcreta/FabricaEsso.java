package backend.fabricaAbstracta.FabricaConcreta;

import backend.fabricaAbstracta.FabricaAbstracta.TipoGasolina;
import backend.fabricaAbstracta.ProductoAbstracto.Gasolina;
import backend.fabricaAbstracta.ProductoConcreto.Esso;

public class FabricaEsso implements TipoGasolina {
    @Override
    public Gasolina crearGasolina() {
        Esso miGsolina =  new Esso();
        miGsolina.setTipo("Esso");

        return miGsolina;
    }
}
