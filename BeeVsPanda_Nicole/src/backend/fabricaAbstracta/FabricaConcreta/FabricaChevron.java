package backend.fabricaAbstracta.FabricaConcreta;

import backend.fabricaAbstracta.FabricaAbstracta.TipoGasolina;
import backend.fabricaAbstracta.ProductoAbstracto.Gasolina;
import backend.fabricaAbstracta.ProductoConcreto.Chevron;

public class FabricaChevron implements TipoGasolina {
    @Override
    public Gasolina crearGasolina() {
        Chevron miGsolina =  new Chevron();
        miGsolina.setTipo("Chevron");

        return miGsolina;
    }
}
