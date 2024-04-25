#include "NodoLibro.h"

NodoLibro::NodoLibro(Libro* pLibro)
{
	setLibro(pLibro);
}

NodoLibro::NodoLibro()
{
	setSiguiente(NULL);
}

NodoLibro* NodoLibro::getSiguiente() const
{
	return sgtLibro;
}

void NodoLibro::setSiguiente(NodoLibro* sig) {
	NodoLibro::sgtLibro = sig;
}

Libro* NodoLibro::getLibro() const {
	return libro;
}
void NodoLibro::setLibro(Libro* libro) {
	NodoLibro::libro = libro;
}
