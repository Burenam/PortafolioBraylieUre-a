package backend.observador.Principal;

import backend.observador.Concreto.Marcianos;
import backend.observador.Concreto.ObservadorMarcianos;

public class GestorObservador {
    ObservadorMarcianos observadorMarcianos = new ObservadorMarcianos();
    Marcianos marcianos = new Marcianos();

    public GestorObservador() {
        marcianos.addObserver(observadorMarcianos);
    }

    public boolean verificador(int valor) {
        return marcianos.setState(valor);
    }
}
