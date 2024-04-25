import java.io.*;
public class Entregable4_SanchezUrena {
    static PrintStream out = System.out;
    static BufferedReader in = new BufferedReader(new InputStreamReader(System.in));

    public static void main(final String[] args) throws Exception {
        int opcion, numProductores=0, i, j, cantidadEntregas, idProductor, cantidadBotellas, totalBotellas;
        int montoPorBotella=0, precioBotella=0, premio=0, pagoPremio=0, productorBuscado, botellasProductor;
        int contMayor1=0, contMayor2=0, contMayor3=0,productorMayorEntrega, sumaTotalBotellas=0;
        int pago, totalPagos=0, pagoProductor, ganancia, promedio, sumaTotalEntregas=0;
        int listaEntregas[], listaProductores[], botellasPorEntrega[], listaBotellas[], listaPagos[];

        //Inicializo los arreglos en 0 para evitar inconsistencias en el switch
        listaEntregas = new int [0];
        listaProductores = new int [0];
        listaBotellas = new int [0];
        listaPagos = new int [0];

        //Seleccionar Opcion del Menu 
        imprimirMenu();
        opcion = Integer.parseInt(in.readLine());
        while(opcion != 11){
            switch(opcion){
                case 1: 

                    //Asigna a la variable el valor retornado por la funcion 
                    numProductores = leerProductores(); 
                    montoPorBotella = leerMontoPorBotella();
                    precioBotella = leerPrecioBotella();
                    premio = leerPremio();

                    //Reserva de espacio en memoria para los arreglos, segun la variable anteriormente asignada
                    listaEntregas = inicializarListaEntregas(numProductores);
                    listaProductores = inicializarListaProductores(numProductores);
                    listaBotellas = inicializarListaBotellas(numProductores);
                    listaPagos = inicializarListaPagos(numProductores);

                break;
                case 2: 

                    //Ciclo que genera la informacion de cada productor
		            for(i=0; i<numProductores; i++){
                        idProductor = leerIdProductor(); //Asigna a la variable el valor retornado por la funcion
                        listaProductores[i] = idProductor; //Asigna al indice del arreglo el valor de la variable
                        cantidadEntregas = leerCantidadEntregas(idProductor); //Asigna a la variable el valor retornado por la funcion
                        listaEntregas[i] = cantidadEntregas; //Asigna al indice del arreglo el valor de la variable
                        botellasPorEntrega = new int [cantidadEntregas];

                        for(j=0, totalBotellas=0; j<cantidadEntregas; j++){
                            cantidadBotellas = leerCantidadBotellas(idProductor, j); //Asigna a la variable el valor retornado por la funcion
                            botellasPorEntrega[j]= cantidadBotellas; //Asigna al indice del arreglo el valor de la variable
                            totalBotellas = totalBotellas+cantidadBotellas; //Acumulador de las botellas entregadas en cada entrega
                        }

                        listaBotellas[i] = totalBotellas; //Asigna al indice del arreglo el valor de la variable

                        //Acumulador las mayores entregas
                        switch(numProductores){
                            case 1: case 2: case 3: case 4: case 5:
                                if (contMayor1<listaBotellas[i]){
                                    contMayor1 = listaBotellas[i];
                                }
                            break;
                            case 6: case 7: case 8: case 9: case 10:
                                if (contMayor1<listaBotellas[i]){
                                    if(contMayor2<contMayor1){
                                        contMayor2 = contMayor1;
                                    }
                                    contMayor1 = listaBotellas[i];
                                }
                            break;
                            default:
                            if (contMayor1<listaBotellas[i]){
                                if(contMayor2<contMayor1){
                                    if(contMayor3<contMayor2){
                                        contMayor3 = contMayor2;
                                    }
                                    contMayor2 = contMayor1;
                                }
                                contMayor1 = listaBotellas[i];
                            }else if(contMayor2<listaBotellas[i]){
                                if(contMayor3<contMayor2){
                                    contMayor3 = contMayor2;
                                }
                                contMayor2 = listaBotellas[i];
                            }else if(contMayor3<listaBotellas[i]){
                                contMayor3 = listaBotellas[i];
                            }
                             break;
                        }

                        sumaTotalBotellas = sumaTotalBotellas+totalBotellas;
                        sumaTotalEntregas = sumaTotalEntregas+listaEntregas[i];
		            }
                break;
                case 3: 

                    //Imprime la cantidad total de botellas que entregó un productor específico
                    System.out.println("Ingrese el ID del productor del que desea ver el total de botellas entregadas: ");
                    productorBuscado = Integer.parseInt(in.readLine());
                    botellasProductor = buscarBotellasProductor(listaProductores, listaBotellas, productorBuscado);
                    System.out.println("El total de botellas que entregó el productor de ID_"+productorBuscado+" es de: "+botellasProductor);
                    
                break;
                case 4: 

                    //Imprime el productor que más entregas realizó
                    productorMayorEntrega = mayorEntrega(listaBotellas, listaProductores, contMayor1);
                    System.out.println("El productor que realizó más entregas es el productor de ID_"+productorMayorEntrega+" con la siguiente cantidad de entregas: "+contMayor1);
                
                break;
                case 5: 

                    //Reserva el promedio de entregas de todos los productores   
                    promedio = CalcularPromedioEntregas(sumaTotalBotellas, numProductores);
                    System.out.println("El promedio general es: "+promedio+"%");

                break;
                case 6: 
                    //Asignamos los productores con mayor entrega 
                    switch(numProductores){
                        case 1: case 2: case 3: case 4: case 5:
                            productorMayorEntrega = mayorEntrega(listaBotellas, listaProductores, contMayor1);
                            System.out.println("El productor que realizó más entregas es el productor de ID_"+productorMayorEntrega+" con la siguiente cantidad de entregas: "+contMayor1);
                        break;
                        case 6: case 7: case 8:
                            productorMayorEntrega = mayorEntrega(listaBotellas, listaProductores, contMayor1);
                            System.out.println("El productor que realizó más entregas es el productor de ID_"+productorMayorEntrega+" con la siguiente cantidad de entregas: "+contMayor1);
                            productorMayorEntrega = mayorEntrega(listaBotellas, listaProductores, contMayor2);
                            System.out.println("El segundo productor en realizar más entregas es el productor de ID_"+productorMayorEntrega+" con la siguiente cantidad de entregas: "+contMayor2);
                        break;
                        default:
                            productorMayorEntrega = mayorEntrega(listaBotellas, listaProductores, contMayor1);
                            System.out.println("El productor que realizó más entregas es el productor de ID_"+productorMayorEntrega+" con la siguiente cantidad de entregas: "+contMayor1);
                            productorMayorEntrega = mayorEntrega(listaBotellas, listaProductores, contMayor2);
                            System.out.println("El segundo productor en realizar más entregas es el productor de ID_"+productorMayorEntrega+" con la siguiente cantidad de entregas: "+contMayor2);
                            productorMayorEntrega = mayorEntrega(listaBotellas, listaProductores, contMayor3);
                            System.out.println("El tercer productor en realizar más entregas es el productor de ID_"+productorMayorEntrega+" con la siguiente cantidad de entregas: "+contMayor3);
                        break;
                    }
                break;
                case 7: 
                    //Calculamos el pago y pagoPremio
                    for(i=0; i<numProductores; i++){
                        pagoPremio = CalcularPremio(premio, listaBotellas, i, contMayor1, contMayor2, contMayor3);
                        pago = CalcularPago(pagoPremio, montoPorBotella, listaBotellas, i);
                        listaPagos[i] = pago;
                        totalPagos = totalPagos+pago;
                        System.out.println("Al productor de ID_"+listaProductores[i]+" se le realizará un pago total de: ₡"+pago+".00");
                    }
                    
                break;
                case 8: 
                    //Imprime el pago de un productor específico
                    System.out.println("Ingrese el ID del productor del que desea ver el total de botellas entregadas: ");
                    productorBuscado = Integer.parseInt(in.readLine());
                    pagoProductor = pagoProductor(listaProductores, listaPagos, productorBuscado);
                    System.out.println("El pago total del productor de ID_"+productorBuscado+" es de: "+pagoProductor);
                break;
                case 9: 
                    //Imprime el total a pagar a todos los productores
                    System.out.println("El total a pagar a todos los productores es de: ₡"+totalPagos+".00");
                break;
                case 10: 
                    //Imprime la ganancia total de la cooperativa
                    ganancia = gananciaTotal(precioBotella, sumaTotalBotellas);
                    System.out.println("La ganancia total de la cooperativa es de: ₡"+ganancia+".00");

                break;
                default:
                    System.out.println("La opcion no es valida");
                break;
            }

            imprimirMenu();
            opcion = Integer.parseInt(in.readLine());

            System.out.println("");
        }
    }

    //Imprimir Opciones del Menu
    static void imprimirMenu(){
        System.out.println("---------------------------------------------------------------------------------------------");
        System.out.println("|                                                                                           |");
        System.out.println("|                                      Menú de Opciones                                     |");
        System.out.println("|   1- Iniciar el programa                                                                  |");
        System.out.println("|   2- Registrar productor                                                                  |");
        System.out.println("|   3- Imprimir la cantidad total de botellas que entregó un productor específico           |");
        System.out.println("|   4- Imprimir el productor que más entregas realizó                                       |");
        System.out.println("|   5- Imprimir el promedio de entregas de todos los productores                            |");
        System.out.println("|   6- Imprimir los productores que realizaron más entregas que el promedio de entregas     |");
        System.out.println("|   7- Realizar el pago a los productores                                                   |");
        System.out.println("|   8- Imprimir el total de dinero que le debe pagar un productor específico                |");
        System.out.println("|   9- Imprimir el total que debe pagar a todos los productores                             |");
        System.out.println("|   10- Imprimir la ganancia total de la cooperativa                                        |");
        System.out.println("|   11- Salir del programa                                                                  |");
        System.out.println("|                                                                                           |");
        System.out.println("---------------------------------------------------------------------------------------------");
    }

    //Funcion que retorna la cantidad de productores del periodo
    static int leerProductores() throws Exception{
        int numProductores;

        //Leer la cantidad de productores que ingrese el usuario
        System.out.println("Ingrese la cantidad de productores del período: ");
        numProductores = Integer.parseInt(in.readLine());

        return numProductores;
    }

    //Funcion que retorna el monto que se le va a pagar a cada productor por cada botella entregada
    static int leerMontoPorBotella() throws Exception{
        int montoPorBotella;

        //Leer el monto a pagar por botella
        System.out.println("Indique el monto que se le va a pagar a cada productor por cada botella entregada: ");
        montoPorBotella = Integer.parseInt(in.readLine());

        return montoPorBotella;
    }

    //Funcion que retorna el precio al que se venderá cada botella
    static int leerPrecioBotella() throws Exception{
        int precioBotella;

        //Leer el precio por botella
        System.out.println("Indique el precio al que se venderá cada botella: ");
        precioBotella = Integer.parseInt(in.readLine());

        return precioBotella;   
    }

    //Funcion que retorna el premio en dinero que se le va a pagar al productor que realice más entregas que el promedio de entregas general
    static int leerPremio() throws Exception{
        int premio;

        //Leer el premio
        System.out.println("Indique el premio en dinero que se le va a pagar al productor que realice más entregas que el promedio de entregas general ");
        premio = Integer.parseInt(in.readLine());

        return premio;
    }

    //Funcion que inicializa el arreglo listaEntregas
    static int[] inicializarListaEntregas(int pNumProductores) {
        int listaEntregas[];

        listaEntregas = new int [pNumProductores];

        return listaEntregas; 
    }

    //Funcion que inicializa el arreglo listaProductores
    static int[] inicializarListaProductores(int pNumProductores) {
        int listaProductores[];

        listaProductores = new int [pNumProductores];

        return listaProductores;
    }

    //Funcion que inicializa el arreglo listaBotellas
    static int[] inicializarListaBotellas(int pNumProductores) {
        int listabotellas[];

        listabotellas = new int [pNumProductores];

        return listabotellas;
    }

    //Funcion que inicializa el arreglo listaEntregas
    static int[] inicializarListaPagos(int pNumProductores) {
        int listaPagos[];

        listaPagos = new int [pNumProductores];

        return listaPagos; 
    }

    //Funcion que retorna el id del productor
    static int leerIdProductor() throws Exception {
        int idProductor;

        //Leer el id del productor que ingrese el usuario
        System.out.println("Ingrese el id del productor: ");
        idProductor = Integer.parseInt(in.readLine());


        return idProductor;
    }

    //Funcion que retorna la cantidad de entregas del productor
    static int leerCantidadEntregas(int id) throws Exception {
        int cantidadEntregas;

        //Leer la cantidad de entregas
        System.out.println("Ingrese la cantidad de entregas del productor de Id_"+id+" : ");
        cantidadEntregas = Integer.parseInt(in.readLine());

        return cantidadEntregas;
    }

    //Funcion que retorna la cantidad de botellas entregadas por el productor en cada entrega
    static int leerCantidadBotellas(int pId, int pCont) throws Exception {
        int cantidadBotellas; 

        //Leer la cantidad de botellas entregadas de una entrega
        System.out.println("Ingrese la cantidad total de botellas que entregó el productor de Id_"+pId+" en la entrega #"+(pCont+1)+": ");
        cantidadBotellas = Integer.parseInt(in.readLine());

        return cantidadBotellas;
    }

    //Funcion que retorna la cantidad de botellas entregadas por un productor especifico
    static int buscarBotellasProductor(int pListaProductores[],int pListaBotellas[], int pProductorBuscado){
        int i, productorBuscado, valorIndice;
        boolean encontro = false;

        //Buscar indice
        for(productorBuscado=-1, i=0; i<pListaBotellas.length; i++){
            if(pListaBotellas[i]==pProductorBuscado){
                productorBuscado = i+1;}
        }

        //Buscar indice
        for (i=0; i<pListaProductores.length && !encontro; i++){
            if (pListaProductores[i] == pProductorBuscado) {
                encontro = true;
            }
        }

        //Asignar indice y productor buscado
        if (encontro) {
            valorIndice = i-1;
            productorBuscado = pListaBotellas[valorIndice];
        }

        return productorBuscado;
    }
    
    //Funcion que retorna el productor con la mayor entrega
    static int mayorEntrega(int pListaBotellas[], int pListaProductores[], int pContMayor){
        int mayorEntrega, valorIndice, i;
        boolean encontro = false;

        //Buscar indice
        for(mayorEntrega=-1, i=0; i<pListaBotellas.length; i++){
            if(pListaBotellas[i]==pContMayor){
                mayorEntrega = i+1;}
        }

        //Buscar indice
        for (i=0; i<pListaProductores.length && !encontro; i++){
            if (pListaProductores[i] == pContMayor) {
                encontro = true;
            }
        }

        //Asignar indice y mayor entrega
        if (encontro) {
            valorIndice = i-1;
            mayorEntrega = pListaProductores[valorIndice];
        }

        return mayorEntrega;
   }

   //Funcion que retorna el promedio general
    static int CalcularPromedioEntregas (int pSumaTotalBotellas, int pSumaTotalEntregas){
        int promedio;

        //Asignar promedio
        promedio = pSumaTotalBotellas/pSumaTotalEntregas;

        return promedio;
    
    }

   //Funcion que calcula el premio de un productor
   static int CalcularPremio (int pPremio, int pListaBotellas[], int pCont, int pCont1, int pCont2, int pCont3){
        int pagoPremio;

        //Asignar pagoPremio
        if(pCont1==pListaBotellas[pCont]){
            pagoPremio = pPremio;
        }else if(pCont2==pListaBotellas[pCont]){
            pagoPremio = pPremio;
        }else if(pCont3==pListaBotellas[pCont]){
            pagoPremio = pPremio;
        }else{
            pagoPremio = 0;
        }

        return pagoPremio;
    }
   
   //Funcion que calcula el pago de un productor
   static int CalcularPago (int pPagoPremio, int pMontoPorBotella, int pListaBotellas[], int pCont){
        int pago;

        //Asignar promedio
        pago = (pListaBotellas[pCont]*pMontoPorBotella)+pPagoPremio;

        return pago;
    }

    //Funcion que retorna el pago de un productor especifico
    static int pagoProductor(int pListaProductores[],int pListaPagos[], int pProductorBuscado){
        int i, productorBuscado, valorIndice;
        boolean encontro = false;

        //Buscar indice
        for(productorBuscado=-1, i=0; i<pListaPagos.length; i++){
            if(pListaPagos[i]==pProductorBuscado){
                productorBuscado = i+1;}
        }

        //Buscar indice
        for (i=0; i<pListaProductores.length && !encontro; i++){
            if (pListaProductores[i] == pProductorBuscado) {
                encontro = true;
            }
        }

        //Asignar indice y productor buscado
        if (encontro) {
            valorIndice = i-1;
            productorBuscado = pListaPagos[valorIndice];
        }

        return productorBuscado;
    }

    //Funcion que calcula la ganancia total
    static int gananciaTotal (int pPrecioBotella, int pSumaTotalBotellas){
        int ganancia;

        //Asignar ganancia
        ganancia = pPrecioBotella*pSumaTotalBotellas;

        return ganancia;
    }

}