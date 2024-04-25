package backend.decorador.Principal;

import backend.decorador.Componente.Nave;
import backend.decorador.ComponenteConcreto.PoderNave;
import backend.decorador.DecoradorConcreto.VelocidadAlta;
import backend.decorador.DecoradorConcreto.VelocidadBaja;
import backend.decorador.DecoradorConcreto.Vida;

public class GestorDecorador {

    public String tipoGasolina(String tipo) {
        Nave miNave = null;
        switch(tipo) {
            case "Chevron":
                miNave = new PoderNave("Vida");
                new Vida(miNave);
                break;

            case "Esso":
                miNave = new PoderNave("Alta");
                new VelocidadAlta(miNave);
                break;

            case "Exxon":
                miNave = new PoderNave("Baja");
                new VelocidadBaja(miNave);
                break;
        }
        return miNave.getGasolina();
    }
}
