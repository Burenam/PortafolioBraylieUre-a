#pragma once
#include "Libro.h"
class NodoLibro
{
private:
	Libro* libro;
	NodoLibro* sgtLibro;
public:
	NodoLibro(Libro* pLibro);
	NodoLibro();

	NodoLibro* getSiguiente() const;
	void setSiguiente(NodoLibro* sig);
	Libro* getLibro() const;
	void setLibro(Libro* libro);

};

