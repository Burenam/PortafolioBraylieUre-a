package backend.decorador.ComponenteConcreto;

import backend.decorador.Componente.Nave;

public class PoderNave extends Nave {
    public PoderNave(String vida) {
        super(vida);
    }

    @Override
    public String asignarPowerUp() {
        return getGasolina();
    }
}
