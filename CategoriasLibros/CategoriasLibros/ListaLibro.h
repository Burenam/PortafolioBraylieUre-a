#pragma once
#include "NodoLibro.h"
#include <fstream> 
#include <fstream>
#include <vector>
#include <sstream>
class ListaLibro
{
private:
	NodoLibro* cabeza;
	int longitud;
public:

    ListaLibro(NodoLibro*);//Constructor
    ListaLibro();//Constructor
    NodoLibro* getMHead() const;//GetMHead
    void setMHead(NodoLibro*);//SetMHead
    void add_head(NodoLibro*, NodoLibro*, NodoLibro*);
    void add_ele(Libro*);

    int getLongitud();
    void setLongitud(int);

    void recorrerListaSimple();
    void recorrerLibrosxCategoria(string);
    void recorrerLibrosAgotados();
    void recorrerLibrosNoAgotados();
    void anadirPorcentaje(string, float);
    int recorrerExistencia0();
    int precioTotalLibros();
    void modificarLibro(string, string, string, string, string, float, int);
    void modificarLibroStatus(string, int);
    bool getStatus(string);
    void asociarCategoria(string,string);
    bool eliminarLibro(string);
    int buscarPosicionLibro(string);

};

