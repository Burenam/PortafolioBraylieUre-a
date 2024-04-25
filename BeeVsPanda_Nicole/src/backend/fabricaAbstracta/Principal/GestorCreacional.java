package backend.fabricaAbstracta.Principal;

import backend.fabricaAbstracta.FabricaAbstracta.TipoGasolina;
import backend.fabricaAbstracta.FabricaConcreta.FabricaChevron;
import backend.fabricaAbstracta.FabricaConcreta.FabricaEsso;
import backend.fabricaAbstracta.FabricaConcreta.FabricaExxon;
import backend.fabricaAbstracta.ProductoAbstracto.Gasolina;

public class GestorCreacional {

    public static String CrearFabricaDeGasolina(TipoGasolina pFabrica) {
        Gasolina objGas= pFabrica.crearGasolina();
        return objGas.tipoGasolina();
    }

    public static String procesarFuncion(int pOpc) {
        String sMensaje ="";
        TipoGasolina moGas;
        switch (pOpc) {

            case 1:
                moGas  = new FabricaChevron();
                sMensaje = CrearFabricaDeGasolina(moGas);
                break;

            case 2:
                moGas  = new FabricaEsso();
                sMensaje = CrearFabricaDeGasolina(moGas);
                break;

            case 3:
                moGas  = new FabricaExxon();
                sMensaje = CrearFabricaDeGasolina(moGas);
                break;

            default:
                sMensaje = "";
                break;
        }
        return sMensaje ;
    }
}
