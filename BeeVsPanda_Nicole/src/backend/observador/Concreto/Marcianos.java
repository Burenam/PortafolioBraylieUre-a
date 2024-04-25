package backend.observador.Concreto;

import backend.observador.Interfaces.Observador;
import backend.observador.Interfaces.Sujeto;

import java.util.ArrayList;
import java.util.List;

public class Marcianos implements Sujeto {
    private List<Observador> observers = new ArrayList<Observador>();
    private int value;

    public int getValue() {
        return value;
    }

    public boolean setState(int value) {
        this.value = value;
        return notifyObservers();
    }

    @Override
    public void addObserver(Observador o) {
        this.observers.add(o);
    }

    @Override
    public boolean notifyObservers() {
        for (Observador ob : observers) {
            return ob.verificarCantidad(getValue());
        }
        return false;
    }

}
