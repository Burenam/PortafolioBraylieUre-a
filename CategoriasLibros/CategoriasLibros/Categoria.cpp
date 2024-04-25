#include "Categoria.h"

Categoria::Categoria(string nombre, string descripcion)
{
	setNombre(nombre);
	setDescrip(descripcion);
}

Categoria::Categoria()
{
}

void Categoria::desplegar()
{
}

string Categoria::getNombre() { return this->nombre; }

void Categoria::setNombre(string nombre) { this->nombre = nombre; }

string Categoria::getDescrip() { return this->descripcion; }

void Categoria::setDescrip(string nombre) { this->descripcion = nombre; }