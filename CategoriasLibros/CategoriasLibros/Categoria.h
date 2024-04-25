#pragma once
#include <stdlib.h>
#include <iostream>
using namespace std;


class Categoria
{

private:
	string nombre;
	string descripcion;
public:
	Categoria(string , string );
	Categoria();

	void desplegar();

	string getNombre();
	void setNombre(string);

	string getDescrip();
	void setDescrip(string);
};

