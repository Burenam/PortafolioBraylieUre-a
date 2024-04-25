package backend.fabricaAbstracta.FabricaConcreta;

import backend.fabricaAbstracta.FabricaAbstracta.TipoGasolina;
import backend.fabricaAbstracta.ProductoAbstracto.Gasolina;
import backend.fabricaAbstracta.ProductoConcreto.Exxon;

public class FabricaExxon implements TipoGasolina {
    @Override
    public Gasolina crearGasolina() {
        Exxon miGsolina =  new Exxon();
        miGsolina.setTipo("Exxon");

        return miGsolina;
    }
}
