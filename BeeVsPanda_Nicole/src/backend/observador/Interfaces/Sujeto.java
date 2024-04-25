package backend.observador.Interfaces;

public interface Sujeto {
    void addObserver(Observador o);
    boolean notifyObservers();
}
