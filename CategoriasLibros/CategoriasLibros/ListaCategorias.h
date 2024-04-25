#pragma once
#include "NodoCategoria.h"
#include <fstream> 
#include <fstream>
#include <vector>
#include <sstream>

class ListaCategorias
{
private:
    NodoCategoria* cabeza;
    int longitud;
public:

    ListaCategorias(NodoCategoria*);//Constructor
    ListaCategorias();//Constructor
    NodoCategoria* getMHead() const;//GetMHead
    void setMHead(NodoCategoria*);//SetMHead
    void add_head(NodoCategoria*, NodoCategoria*, NodoCategoria*);
    void add_ele(Categoria*);

    int getLongitud();
    void setLongitud(int);

    void recorrerListaSimple();
    void modificarCategoria(string, string);
    bool eliminarLibro(string);
    int buscarPosicionLibro(string);

};