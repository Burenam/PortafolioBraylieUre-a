package backend.decorador.DecoradorConcreto;

import backend.decorador.Componente.Nave;
import backend.decorador.Decorador.ObjetoDecorado;

public class VelocidadAlta extends ObjetoDecorado {

    public VelocidadAlta(Nave nave) {
        super(nave);
    }

    @Override
    public String asignarPowerUp() {
        return nave.getGasolina();
    }
}
