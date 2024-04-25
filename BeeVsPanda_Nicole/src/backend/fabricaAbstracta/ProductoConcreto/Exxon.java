package backend.fabricaAbstracta.ProductoConcreto;

import backend.fabricaAbstracta.ProductoAbstracto.Gasolina;

public class Exxon implements Gasolina {
    private String tipo;

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
    @Override
    public String tipoGasolina() {
        return getTipo();
    }
}
