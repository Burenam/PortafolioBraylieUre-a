package backend.observador.Concreto;

import backend.observador.Interfaces.Observador;

public class ObservadorMarcianos implements Observador {
    @Override
    public boolean verificarCantidad(int value) {
        if(value>=150)//verifica la cantidad de marcianos eliminados
            return true;
        return false;
    }
}
