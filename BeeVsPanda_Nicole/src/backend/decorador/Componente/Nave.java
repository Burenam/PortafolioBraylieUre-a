package backend.decorador.Componente;

public abstract class Nave {
    private String gasolina;

    public Nave() {
    }

    public Nave(String gasolina) {
        this.gasolina = gasolina;
    }

    public String getGasolina() {
        return gasolina;
    }

    public void setGasolina(String gasolina) {
        this.gasolina = gasolina;
    }

    public abstract String asignarPowerUp();
}
